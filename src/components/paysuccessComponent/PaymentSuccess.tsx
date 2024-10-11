import { Box } from "@mui/material"
import { SuccessIcon } from "../../assets/icons/SvgIcons"
import Styles from './payment.module.css'


function PaymentSuccess() {

    return (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={Styles.success}>
            <Box sx={{ width: {lg:'30%', md: '50%', sm: '70%', xs: '85%'} , textAlign: 'center' }}>
                <SuccessIcon />
                <h1>Payment successfully !</h1>
                <p className={Styles.darkP}>Your order # is: 64484032</p>
                <p className="secondry">An email receipt including the details about your order has been sent to your email ID.</p>
                <p className={Styles.darkP}>Payment Method</p>
                <p className="secondry">Google UPI</p>
                <p className={Styles.darkP}>Order Details</p>
                <p className="secondry">Payment is successfully processsed and your Order is on the way.</p>
                <Box sx={{display: 'flex', justifyContent: 'space-between', width: '80%', margin: 'auto', gap: '20px'}}>
                    <button className={Styles.btn}>My Learning</button>
                    <button className={Styles.btnOutline}>Home</button>
                </Box>
            </Box>


        </Box>
    )
}

export default PaymentSuccess
