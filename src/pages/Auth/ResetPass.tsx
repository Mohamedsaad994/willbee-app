import Button from "../../components/Button"
import Input from "../../components/Input"


function ResetPass() {

    return (
        <div className="auth-holder">
            <h2>New password</h2>
            <p>Enter a new password</p>

            <Input label="New Password" for='pass' type="password" />
            <Input label="New Password confirmation" for='confirmPass' type="password" />


            <Button text='Confirm' />
        </div>
    )
}

export default ResetPass
