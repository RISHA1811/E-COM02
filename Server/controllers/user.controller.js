import UserModel from "../Models/user.model.js";
import bcryptjs  from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sendEmailFun from "../Config/sendemail.js";
import VerificationEmail from "../utils/verifyEmailTemplate.js";
import generatedAccessToken from "../utils/generateaccesstoken.js";
import generatedRefreshToken from "../utils/generaterefreshtoken.js";
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import { error } from "console";

cloudinary.config({ 
        cloud_name: process.env.cloudinary_config_Cloud_Name , 
        api_key: process.env.cloudinary_config_API_Key, 
        api_secret: process.env.cloudinary_config_api_secret,
        secure:true,

    });


export async function registerusercontroller(request,response){
    try {
        let user 
        console.log('Received registration request:', request.body);

        const { name, email , password } = request.body;
        if (!name|| !email || !password){
            console.log('Missing required fields');
            return response.status(400).json({
                message : "provide email, name , password" , 
                error : true,
                success : false
})        
}

 user = await UserModel.findOne({email:email});


if(user){
    return response.json({
        message : "User already Registered with this email" , 
        error : true,
        success : false
    })
}


const verifyCode = Math.floor(100000 + Math.random()* 900000).toString();



const salt = await bcryptjs.genSalt(10);
const hashPassword = await bcryptjs.hash(password,salt)




 user = new UserModel({
    email : email,
    password : hashPassword,
    name : name ,
    otp: verifyCode,
    otpExpires: Date.now() + 600000
});

console.log('Attempting to save user:', user);
try {
    await user.save();
    console.log('User saved successfully with ID:', user._id);
} catch (dbError) {
    console.error('Database error:', dbError);
    return response.status(500).json({
        message: "Error saving user to database",
        error: true,
        success: false
    });
}

const verifyEmail = await sendEmailFun(
    email,
    "Verify email from Ecommerce App",
    "",
    VerificationEmail(name, verifyCode)
);
console.log('Email sent:', verifyEmail);

// create a token for the user
const token = jwt.sign(
    { email: user.email, id: user._id},
    process.env.JSON_WEB_TOKEN_SECRET_KEY
);


return response.status(200).json({
    success :  true,
    error:false,
    message: "User registered successfully! Please verify your email.",
    token: token,
});



    } catch (error) {
        console.error('Registration error:', error);
        return response.status(500).json({
            message: error.message || "An error occurred during registration",
            error: true,
            success: false,
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        })
    }
}

export async function verifyEmailController(request,response) {
    try {
        const{email, otp} = request.body;

        const user = await UserModel.findOne({email:email});
        if(!user){
           return response.status(400).json({ error:true,success:false, message:"user not found"});

        }


        const isCodeValid = user.otp === otp;
        const  isNotExpired = user.otpExpires > Date.now();

if(isCodeValid && isNotExpired ){
    user.verify_email = true;
    user.otp = null;
    user.otpExpires = null;
    await user.save();
    return response.status(200).json({ error:false, success:true, message : "Email verified Successfully"});

}else if (!isCodeValid) {
        return response.status(400).json({ error:true, success:false, message : "Invalid OTP"});
} else {
        return response.status(400).json({ error:true, success:false, message : "OTP expired"});

}



        
    } catch (error) {
         return response.status(500).json({
        message: error.message || error ,
        error: true,
        success: false
    })
}

}


// login controller
export async function loginUserController(request,response) {
    try {
        const {email , password}= request.body;

    const user = await UserModel.findOne({email:email});

    if(user.status !== "Active"){
       return response.status(400).json({
            message:"Contact to admin",
            error:true,
            success:false
        })
    }


if(user.verify_email !== true){
       return response.status(400).json({
            message:"Your email is not verify yet, Please verify your email first",
            error:true,
            success:false
        })
    }




    const checkpassword= await bcryptjs.compare(password,user.password);
    if(!checkpassword){
      return response.status(400).json({
            message:"Check your password",
            error:true,
            success:false
        })
    }



const accesstoken = await generatedAccessToken(user._id)
const refreshtoken = await generatedRefreshToken(user._id)

const updateUser = await UserModel.findByIdAndUpdate(user?._id,{
    last_login_date : new Date()
})

const cookiesOption = {
    httpOnly : true,
    secure : true,
    sameSite : "None"
}
response.cookie('accessToken',accesstoken,cookiesOption)
response.cookie('refreshToken',refreshtoken,cookiesOption)

return response.json({
    message : "Login successfully",
    error : false,
    success : true,
    data : {
        accesstoken,
        refreshtoken
    }
})



    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
        
    }

}


// logout controller
export async function logoutController(request,response) {
    try {
        const userid = request.userid

        const cookiesOption = {
            httpOnly : true,
            secure : true,
            sameSite : "None"
        }

        response.clearCookie('accessToken',cookiesOption)
        response.clearCookie("refreshToken",cookiesOption)

const removeRefreshToken = await UserModel.findByIdAndUpdate(userid,{
    refresh_token : ""
})
return response.json({
    message:"Logout successfully",
    error: false,
    success: true
})
    } catch (error) {
          return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

// avtar creation controller
var imagesArr= [];

   const options = {
        use_filename : true,
        unique_filename : false,
        overwrite :  false,
    };

export async function userAvatarController(request,response){
    try {
        imagesArr = [];
        const userId = request.userId;
        const image = request.files;


        const user = await UserModel.findOne({ _id: userId});


        if(!user){
     return response.status(500).json
({
    message:"user not found",
    error:true,
    success:false
})       
}


// That image which was alraedy loaded or uploaded that we have to remove so we will do one thing 

    const imgUrl = user.avatar;
    const urlArr = imgUrl.split("/");
    const avatar_image = urlArr[urlArr.length - 1];
        const imageName =  avatar_image.split(".")[0];

    if(imageName){
    const res = await cloudinary.uploader.destroy(imageName,
        (error,result) => {

        }
    );
    }


for(let i = 0; i < request?.files?.length; i++){


   
    const img = await cloudinary.uploader.upload(
        image[i].path,
        options,
        function(error,result) {
            imagesArr.push(result.secure_url);
            fs.unlinkSync(`uploads/${request.files[i].filename}`);
            console.log(request.files[i].filename)
        }
    );

}

user.avatar = imagesArr[0];
await user.save();


return response.status(200).json({
    _id: userId,
    avatar: imagesArr[0]
});
    } catch (error) {
        return response.status(500).json
({
    message:error.message || error,
    error:true,
    success:false
})       
    }
}


export async function removeImageFromCloudinary(request,response){
    const imgUrl = request.query.img;
    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.length - 1];
        const imageName =  image.split(".")[0];

    if(imageName){
    const res = await cloudinary.uploader.destroy(imageName,
        (error,result) => {

        }
    );
    if(res){
        response.status(200).send(res);

    }
    }
   
} 

// update user details as user add new things the details will be updated

export async function updateUserDetails(request,response){
    try {
        const userId = request.userId  // auth middleware mein userId ha 
        const {name, email , mobile ,password} = request.body;


        const userExist = await UserModel.findById(userId); // this is mainly used for searching that is userexist or not , if it will not exist then we have to first register and verify the email
        if(!userExist)
           return response.status(400).send('The user cannot be updated!');

        let verifyCode = " ";
        if(email !== userExist.email){
            verifyCode = Math.floor(100000 + Math.random()* 9000000).toString();
        }

let hashPassword = ""

if(password) {
    const salt = await bcryptjs.genSalt(10)
    hashPassword = await bcryptjs.hash(password, salt)
}else{
    hashPassword = userExist.password;

}

const updateUser = await UserModel.findByIdAndUpdate(
    userId,
    {
        name: name,
        mobile : mobile,
        email : email,
        verify_email: email !== userExist.email ? false : true,
        password : hashPassword,
        otp:verifyCode !=="" ? verifyCode : null,
        otpExpires:verifyCode!=="" ? Date.now() + 600000 : ''
    },
    {new: true }

)

if(email !== userExist.email){
   await sendEmailFun ({
    sendTo:email,
    subject: "Verify email from Ecommerce App",
    text: "",
    html : VerificationEmail(name, verifyCode)

   })
}

return response.json({
    message:"User Updated Successfully",
    error: false,
    success: true,
    user:updateUser
})


    } catch (error) {
          return response.status(500).json
({
    message:error.message || error,
    error:true,
    success:false
})       
    }
}

// now we are going to make api of  forget password
export async function forgetpasswordcontroller(request,response){
    try {
        const {email} = request.body
        const user = await UserModel.findOne({email:email})
        if(!user){
            return response.status(400).json({
                message:"Email not available because user is not there",
                error:true,
                success:false
            })
        }
        let verifyCode = Math.floor(100000 + Math.random()* 900000).toString();

user.otp=verifyCode;
user.otpExpires= Date.now() + 600000;

await user.save();


try {
    console.log('Attempting to send forgot password email to:', user.email);
    const emailResult = await sendEmailFun(
        user.email,
        "Reset Your Password - Ecommerce App",
        "",
        VerificationEmail(user.name, verifyCode)
    );
    
    console.log('Email sending result:', emailResult);

    if (!emailResult) {
        return response.status(500).json({
            message: "Failed to send verification email",
            error: true,
            success: false
        });
    }

    return response.json({
        message: "Please check your email for password reset instructions",
        error: false,
        success: true
    });
} catch (emailError) {
    console.error('Error sending email:', emailError);
    return response.status(500).json({
        message: "Failed to send verification email",
        error: true,
        success: false
    });
}



        

        
    } catch (error) {
        console.error('Forgot password error:', error);
        return response.status(500).json({
            message: error.message || "An error occurred during password reset",
            error: true,
            success: false
        });
    }
}

export async function verifyForgotPasswordOtp(request,response){
   try {


 const {email,otp}=request.body;
    const user =  await UserModel.findOne({email:email});
    if(!user){
        return response.status(400).json({
            message:"User not found",
            error:true,
            success:false
        })
    }

if(!email || !otp){
    return response.status(400).json({
        message:"Provide required field email and otp",
        error:true,
        success:false
    })
}







if(otp !== user.otp){
    return response.status(400).json({
        message:"Invalid OTP",
        error:true,
        success:false
    })
}


const currentTime = new Date().toISOString();

if(user.otpExpires < currentTime){
return response.status(400).json({
    message:"OTP is expired",
    error:true,
    success:false
})
}

user.otp = "";
user.otpExpires = "";
await user.save();



      return response.status(400).json({
        message:"OTP Verified Successfully",
        error:false,
        success:true
    })


    
   } catch (error) {
    return response.status(500).json({
        message:error.message || error,
        error:true,
        success:false
    })
    
   }

}



// reset password controller
export async function resetpassword(request,response){
    try {
        const {email, newPassword, confirmPassword} = request.body;

        
if(!email || !newPassword || !confirmPassword){
    return response.status(400).json({
        message:"Provide required field email and newpassword , newpassword",
        error:true,
        success:false
    })

}

const user = await UserModel.findOne({email:email});

if(!user){
    return response.status(400).json({
        message:"Email Not Found",
        error: true,
        success:false
    })
}


if(newPassword !== confirmPassword){
    return response.status(400).json({
        message:"newPassword and confirmPassword must be same",
        error:true,
        success:false
    })
}
const salt = await bcryptjs.genSalt(10);
const hashPassword = await bcryptjs.hash(confirmPassword,salt)

user.password = hashPassword;
await user.save();

return response.status(200).json({
    message:"Password reset successfully",
    error:false,
    success:true
})



    } catch (error) {
        return response.status(500).json({
        message:error.message || error,
        error:true,
        success:false
        })
    }
}

// refresh token controller api 
export async function refreshToken(request,response){
try {

    const refreshToken = request.cookies.refreshToken || request?.headers?.authorization?.split(" ")[1]; // bearer token

    if(!refreshToken){
        return response.stattus(401).json({
            message:"Invalid Token",
            error:true,
            success:false
        })
    }



    const verifyToken = await jwt.verify(refreshToken,process.env.SECRET_KEY_REFRESH_TOKEN);


    if(!verifyToken){
        return response.status(401).json({
            message:"Token Expired",
            error:true,
            success:false
        })
    }


const userId = verifyToken?._id;
const newAccessToken = await generatedAccessToken(userId);

const cookiesOption = {
    httpOnly : true,
    secure : true,
    sameSite : "None"
}
response.cookie('accessToken',newAccessToken,cookiesOption)


return response.json({
    message:"New Access token generated ",
    error:false,
    success:true,
    data : {
        accesstoken : newAccessToken
    }
})


    


} catch (error) {
    return response.status(500).json({
        message:error.message || error,
        error:true,
        success:false
    })
}
}


// get user details 
export async function userDetails (request,response){
    try {
        const userId = request.userId


        const user = await UserModel.findById(userId).select('-password -refresh_token')

        return response.json({
            message:'user details',
            data: user,
            error:false,
            success:true
        })


    } catch (error) {
        return response.status(500).json({
            message:"Something is wrong",
            error:true,
            success:false
        })
    }
}