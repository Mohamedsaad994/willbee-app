import { Box } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function Back() {

    return (
        <Box sx={{fontSize: '18px', fontWeight: '700', display: 'flex',alignItems: 'center', cursor:'pointer'}} className='primary-color'>
            <ArrowBackIosIcon fontSize="small"/>
            Back
        </Box>
    )
}

export default Back
