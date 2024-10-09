import { Box } from "@mui/material"
import { Play, Time } from "../../assets/icons/SvgIcons"
import SpanStyle from './group.module.css'

function BtnGroup() {

    return (
        <Box sx={{display: 'flex', gap: '10px'}}>
            <span className={SpanStyle.span}>
                <Play />
                20 Lessons
            </span>
            <span className={SpanStyle.span}>
                <Time />
                5 hours, 33 min
            </span>
        </Box>
    )
}

export default BtnGroup
