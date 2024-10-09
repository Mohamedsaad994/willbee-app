import { Box } from "@mui/material"
import { GoldStar, GrayStar } from "../../assets/icons/SvgIcons"


function Rating() {

    return (
        <Box sx={{display: 'flex', gap: '3px', my:'10px'}}>
            <GoldStar/>
            <GoldStar/>
            <GoldStar/>
            <GoldStar/>
            <GrayStar/>
        </Box>
    )
}

export default Rating
