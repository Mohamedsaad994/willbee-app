import { Box, Divider } from "@mui/material"
import DetailsStyle from './details.module.css'
import PaymentButton from "../paymentButton/PaymentButton"

function PaymentDetails() {

    return (
        <Box sx={{padding: '10px', boxShadow: 1, borderRadius: 2, my: '20px'}}>
            <h3 className={DetailsStyle.heading}>payment details</h3>
            <Box className={DetailsStyle.box}>
                <span>Subtotal</span>
                <span>220.000 K.D</span>
            </Box>
            <Box className={DetailsStyle.box}>
                <span>Taxes</span>
                <span>23.000 K.D</span>
            </Box>
            <Box className={DetailsStyle.box}>
                <span>Apply Promocode</span>
                <span style={{color: '#f04437'}}>-15.00 K.D</span>
            </Box>
            <Divider />
            <Box className={DetailsStyle.box}>
                <span>Total</span>
                <span>270.00 K.D</span>
            </Box>

            <PaymentButton value='Checkout'/>
        </Box>
    )
}

export default PaymentDetails
