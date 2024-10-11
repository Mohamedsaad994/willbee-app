import { Box, useMediaQuery, useTheme } from "@mui/material"
import BookCart from "../bookCart/BookCart"
import BtnGroup from "../btnGroup/BtnGroup"
import Rating from "../rating/Rating"
import PackedgeStyle from './packedge.module.css'
import { Trash } from "../../assets/icons/SvgIcons"


function Packedge() {

    const theme = useTheme()

    const isMediamScreen = useMediaQuery(theme.breakpoints.down('md'))
    // const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'))

    return (
        <Box className={isMediamScreen? PackedgeStyle.mdScreen: ''} sx={{ display: 'flex', padding: '10px', boxShadow: 1, borderRadius: 2, position: 'relative', gap: '20px', my: '20px', width:{xs: '100%', sm: '80%', md: '100%'} }}>
            <button className={PackedgeStyle.btn}>
                <Trash />
            </button>
            <BookCart />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: '1' }}>
                <h2 className={PackedgeStyle.heading}>Financial wealth</h2>
                <Rating />
                <p className={PackedgeStyle.paragh}>Your relationship with money and how to develop it</p>
                <p className={PackedgeStyle.paragh}>Learn the most important reason why you do not have ...</p>
                <Box sx={{marginTop: '20px',display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexDirection: {xs: 'column', md: 'row'}}}>
                    <BtnGroup />
                    <span className={PackedgeStyle.price}>25.000KWD</span>
                </Box>
            </Box>
        </Box>
    )
}

export default Packedge
