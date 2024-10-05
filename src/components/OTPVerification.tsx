
import './otp-verify.css'

function OTPVerification() {

    return (
        <div className="otp-card">
            <input type="text" maxLength={1} placeholder='-' autoFocus />
            <input type="text" maxLength={1} placeholder='-'/>
            <input type="text" maxLength={1} placeholder='-'/>
            <input type="text" maxLength={1} placeholder='-'/>
        </div>
    )
}

export default OTPVerification
