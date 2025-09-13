import jwt from "jsonwebtoken"
import UserModel from "../Models/user.model.js"

const generatedRefreshToken = async (userId)=>{
    const token =  jwt.sign({id:userId},
        process.env.SECRET_KEY_REFRESH_TOKEN,
        {expiresIn :'5h'}
    )

    const updateRefreshTokenUser = await UserModel.updateOne(
        { _id: userId},
        {
            refresh_token : token
        }
    )
    return token
}


export default generatedRefreshToken;
