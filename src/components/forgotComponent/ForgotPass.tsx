
import Input from "../../common/Input/Input"
import Button from "../../common/Button/Button"

function ForgotPass() {

    return (
        <div className="auth-holder">
            <h2>Forgot your password!</h2>
            <p>Enter your registered email</p>

            <Input label='E-Mail' for='email' type='mail' />


            <Button text='Send' />
        </div>
    )
}

export default ForgotPass
