import { Route, Routes } from "react-router-dom"
import AuthModule from "../pages/Auth/AuthModule"
import Register from "../pages/Auth/Register"
import ForgotPass from "../pages/Auth/ForgotPass"
import SignIn from "../pages/Auth/SignIn"
import ResetPass from "../pages/Auth/ResetPass"
import Verification from "../pages/Auth/Verification"
import Congratulations from "../pages/Auth/Congratulations"


function AuthRoutes() {

    return (
        <Routes>
            <Route path='/auth' element={<AuthModule/>}>
                <Route path="signIn" element={<SignIn/>} />
                <Route index element={<SignIn/>} />
                <Route path='register' element={<Register/>} />
                <Route path='forgot' element={<ForgotPass/>} />
                <Route path='reset' element={<ResetPass/>} />
                <Route path='verify' element={<Verification/>} />
            </Route>
            <Route path='/success' element={<Congratulations/>}/>
        </Routes>
    )
}

export default AuthRoutes
