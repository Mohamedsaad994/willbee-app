import { Box } from "@mui/material"
import BookStyles from './bookcart.module.css'
import { ButtonStyled } from "../../assets/icons/SvgIcons"


function BookCart() {

    return (
        <Box className={BookStyles.bookCart}>
            <Box>
                <img className={BookStyles.img} src="../../../public/images/a992745c66356b21c44087fe49a73c9c.png" alt="" />
            </Box>
            <h3>Beauty sessions</h3>

            <ButtonStyled/>
        </Box>

    )
}

export default BookCart
