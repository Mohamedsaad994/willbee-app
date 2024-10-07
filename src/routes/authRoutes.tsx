import { Route, Routes } from "react-router-dom"
import AuthModule from "../pages/AuthPage/AuthModule"
import Register from "../components/registerComponent/Register"
import ForgotPass from "../components/forgotComponent/ForgotPass"
import SignIn from "../components/loginComponent/SignIn"
import ResetPass from "../components/resetComponent/ResetPass"
import Verification from "../components/verifyComponent/Verification"
import Congratulations from "../components/congratulationsComponent/Congratulations"


function AuthRoutes() {

    return (
        <Routes>
            <Route path='/auth' element={<AuthModule />}>
                <Route path="signIn" element={<SignIn />} />
                <Route index element={<SignIn />} />
                <Route path='register' element={<Register />} />
                <Route path='forgot' element={<ForgotPass />} />
                <Route path='reset' element={<ResetPass />} />
                <Route path='verify' element={<Verification />} />
            </Route>
            <Route path='/success' element={<Congratulations />} />
        </Routes>
    )
}

export default AuthRoutes
