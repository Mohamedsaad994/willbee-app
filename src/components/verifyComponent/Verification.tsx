import { Link } from "react-router-dom"
import Button from "../../common/Button/Button"
import OTPVerification from "../../common/OTP/OTPVerification"
import Back from "../../common/back/Back"
import { Box } from "@mui/material"


function Verification() {

    return (
        <div className="auth-holder">
            <h2>Account Verification</h2>
            <p>Activation code has been sent to your email.</p>
            <h4>ahmed.mohamed22@gmail.com</h4>
            <h3 style={{ margin: '15px 0' }} className="primary-color">Change</h3>
            <OTPVerification />
            <div className="time primary-color" style={{ margin: '15px 0' }}>00:45</div>

            <p>Didn't receive the activation code ?<span> Resend </span>  </p>

            <Button text='Activation' />
            <Box sx={{ marginRight: 'auto' }}>
                <Link className="none-decoration" to='/auth/register'>
                    <Back />
                </Link>
            </Box>
        </div>
    )
}

export default Verification
