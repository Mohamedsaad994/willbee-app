import { Route, Routes } from "react-router-dom"
import CartPage from "../pages/Cart/CartPage"
import CheckOut from "../components/checkOutComponent/CheckOut"
import MyCart from "../components/myCartComponent/MyCart"
import PaymentSuccess from "../components/paysuccessComponent/PaymentSuccess"


function CartRoutes() {

    return ( 
        <Routes> 
            <Route path="/" element={<CartPage/>}>
                <Route path="myCart" element={<MyCart/>}/>
                <Route index element={<MyCart/>}/>
                <Route path="checkout" element={<CheckOut/>}/>
            </Route>
            <Route path='/success' element={<PaymentSuccess/>}/>
        </Routes>
    )
}

export default CartRoutes
