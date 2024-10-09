import { Box } from "@mui/material"
import Back from "../back/Back"
import { Link } from "react-router-dom"


function Heading() {

    return (
        <Box sx={{ boxShadow: 1, borderRadius: 2, padding: '24px', my: '20px' }}>
            <Link style={{textDecoration: 'none'}} to='/cart/MyCart'>
                <Back />
            </Link>
            <h3 style={{ marginTop: '20px' }}>Check out</h3>
        </Box>
    )
}

export default Heading
