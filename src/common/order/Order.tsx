import { Box } from "@mui/material"
import BookCart from "../bookCart/BookCart"
import BtnGroup from "../btnGroup/BtnGroup"
import Rating from "../rating/Rating"


function Order() {

    return (
        <Box sx={{display: 'flex', gap: '20px', alignItems: 'center', padding: '12px', borderRadius: 2, backgroundColor: '#fff', my: '20px'}}>
            <Box sx={{width: '40%'}}>
                <BookCart />
            </Box>
            <Box>
                <h2 style={{fontSize: '30px', fontWeight: '700'}}>Financial wealth</h2>
                <Rating />
                <BtnGroup />
                <span className="primary-color" style={{fontSize: '24px', fontWeight: '700', marginTop: '30px', display: 'block'}}>25.000KWD</span>
            </Box>
        </Box>
    )
}

export default Order
