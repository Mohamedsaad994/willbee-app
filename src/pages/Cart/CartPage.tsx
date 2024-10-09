import { Outlet } from "react-router-dom"
import Footer from "../../common/footer/Footer"
import NavBar from "../../common/Navbar/NavBar"
import cartStyle from './cart.module.css'
import { Container } from "@mui/material"


function CartPage() {

    return (
        <div className={cartStyle.cartPage}>
            <NavBar />
            <Container maxWidth='xl' sx={{flexGrow: '1'}}>
                <Outlet />
            </Container>
            <Footer />
        </div>

    )
}

export default CartPage
