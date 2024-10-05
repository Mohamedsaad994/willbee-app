
import { Link } from "react-router-dom"
import AppleLogin from "../../components/AppleLogin"
import GoogleLogin from "../../components/GoogleLogin"
import MicrosoftLogin from "../../components/MicrosoftLogin"
import Input from "../../components/Input"
import Button from "../../components/Button"
import Title from "../../components/Title"
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material"


function SignIn() {

    return (
        <div className="auth-holder">
            <h2>Login</h2>
            <p>Welcome back, enter your details to re-login</p>
            <GoogleLogin />
            <AppleLogin />
            <MicrosoftLogin />
            <Title />

            <Input label='E-Mail' for='email' type='mail' />
            <Input label='Password' for='pass' type='password' />

            <FormGroup sx={{marginRight: 'auto'}}>
                <FormControlLabel sx={{marginBottom: '20px'}} control={<Checkbox />} label="Remember Me" />
            </FormGroup>

            <Button text='Log in' />
            <p>Don’t have an account? <Link className='link' to='/auth/register'>Sign up</Link> </p>
            <Link className="link" to='/auth/forgot'>Forgot Password ?</Link>
        </div>
    )
}

export default SignIn
