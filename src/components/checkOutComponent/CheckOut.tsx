import { Box, Divider } from "@mui/material"
import Heading from "../../common/heading/Heading"
import GetWay from "../../common/getWay/GetWay"
import { MasterCard, RuPay, Visa } from "../../assets/icons/SvgIcons"
import Order from "../../common/order/Order"
import DetailsStyle from './checkout.module.css'
import PaymentButton from "../../common/paymentButton/PaymentButton"


function CheckOut() {

    return (
        <>
            <Heading />
            <Box sx={{ display: 'flex', gap: '20px' }}>
                <Box sx={{ width: '60%' }}>
                    <h3 style={{ fontSize: '24px' }}>Payment getway</h3>
                    <GetWay title="AlAHLY BANK" icon={<MasterCard />} />
                    <GetWay title="ALEX BANK" icon={<Visa />} />
                    <GetWay title="CAIRO BANK" icon={<RuPay />} />
                </Box>
                <Box sx={{ backgroundColor: '#F6F6F6', width: '40%', padding: '24px', marginBottom: '30px' }}>
                    <h3 style={{ fontSize: '24px' }}>Order Summary</h3>
                    <Order />
                    <Order />
                    <Order />
                    <Divider />
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
                        <span style={{ color: '#f04437' }}>-15.00 K.D</span>
                    </Box>
                    <Divider />
                    <Box className={DetailsStyle.box}>
                        <span>Total</span>
                        <span>270.00 K.D</span>
                    </Box>
                    <PaymentButton value='Place Order'/>
                </Box>
            </Box>
        </>
    )
}

export default CheckOut
