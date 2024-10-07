
import { Link } from "react-router-dom"
import Input from "../../common/Input/Input"
import Button from "../../common/Button/Button"
import Title from "../../common/Title/Title"
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import { GoogleLogin, AppleLogin, MicrosoftLogin } from "../../assets/icons/SvgIcons"


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

            <FormGroup sx={{ marginRight: 'auto' }}>
                <FormControlLabel sx={{ marginBottom: '20px' }} control={<Checkbox />} label="Remember Me" />
            </FormGroup>

            <Button text='Log in' />
            <p>Don’t have an account? <Link className='link' to='/auth/register'>Sign up</Link> </p>
            <Link className="link" to='/auth/forgot'>Forgot Password ?</Link>
        </div>
    )
}

export default SignIn
