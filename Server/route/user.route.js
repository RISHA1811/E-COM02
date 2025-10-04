import { Router } from "express";
import { forgetpasswordcontroller, loginUserController, logoutController, refreshToken, registerusercontroller, removeImageFromCloudinary, resetpassword, updateUserDetails, userAvatarController, userDetails, verifyEmailController, verifyForgotPasswordOtp } from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

const  userRouter = Router()
userRouter.post('/register',registerusercontroller);
userRouter.post('/verifyEmail',verifyEmailController);
userRouter.post('/login',loginUserController);
userRouter.get('/logout',logoutController);
userRouter.put('/user-avatar',auth,upload.array('avatar'),userAvatarController);
userRouter.delete('/deleteImage',auth,removeImageFromCloudinary);
userRouter.put('/:id',auth,updateUserDetails);
userRouter.post('/forgot-password',forgetpasswordcontroller);
userRouter.post('/verify-forgot-password-otp',verifyForgotPasswordOtp);
userRouter.post('/reset-password',resetpassword);
userRouter.post('/refresh-token',refreshToken);
userRouter.get('/user-details',userDetails);


export default userRouter;
