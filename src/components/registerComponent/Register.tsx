import { Link } from 'react-router-dom'

import './register.css'
import Title from '../../common/Title/Title'
import { GoogleLogin, AppleLogin, MicrosoftLogin } from '../../assets/icons/SvgIcons'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'

function Register() {

    return (
        <div className="auth-holder">
            <h2>Create a new account</h2>
            <p>Hello, enter the necessary data to create a new account</p>
            <GoogleLogin />
            <AppleLogin />
            <MicrosoftLogin />
            <Title />

            <Input label='First Name' for='firstName' type='text' />
            <Input label='Last Name' for='lastName' type='text' />
            <Input label='User Name' for='userName' type='text' />
            <Input label='E-Mail' for='email' type='mail' />
            <Input label='Password' for='pass' type='password' />
            <Input label='Password conformation' for='rePass' type='password' />

            <p className='hint'>By signing up, I agree with the website's <span>Terms and Conditions</span> Register</p>

            <Button text='Sign Up' />
            <p>Already have an account? <Link className='link' to='/auth/signIn'>Log in</Link> </p>
        </div>
    )
}

export default Register
