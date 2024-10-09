import { Box } from "@mui/material"
import { Line } from "../../assets/icons/SvgIcons"
import Packedge from "../../common/packedge/Packedge"
import myCartStyles from './my-cart.module.css'
import PaymentDetails from "../../common/paymentDetails/PaymentDetails"


function MyCart() {

    return (
        <>
            <h1 className={myCartStyles.heading}>My Cart</h1>
            <Line />
            <div className={myCartStyles.cart}>

                <Box className={myCartStyles.packedgeHolder}>
                    <Packedge />
                    <Packedge />
                    <Packedge />
                    <Packedge />
                    <Packedge />
                </Box>
                <Box className={myCartStyles.detailsHolder}>
                    <PaymentDetails />
                </Box>



            </div>
        </>
    )
}

export default MyCart
