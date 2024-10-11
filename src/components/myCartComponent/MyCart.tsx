import { Box, useMediaQuery, useTheme } from "@mui/material"
import { Line } from "../../assets/icons/SvgIcons"
import Packedge from "../../common/packedge/Packedge"
import myCartStyles from './my-cart.module.css'
import PaymentDetails from "../../common/paymentDetails/PaymentDetails"


function MyCart() {

    const theme = useTheme()

    const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <h1 className={myCartStyles.heading}>My Cart</h1>
            <Line />
            <div className={isLargeScreen? myCartStyles.lgCart: myCartStyles.cart}>

                <Box className={myCartStyles.packedgeHolder}>
                    <Packedge />
                    <Packedge />
                    <Packedge />
                    <Packedge />
                    <Packedge />
                </Box>
                <Box sx={{mx: 'auto',width: {xs: '100%',sm: '80%', md: '50%', lg: '25%'}}}>
                    <PaymentDetails />
                </Box>



            </div>
        </>
    )
}

export default MyCart
