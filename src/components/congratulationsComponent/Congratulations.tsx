import { Box } from "@mui/material"
import { SuccessIcon } from "../../assets/icons/SvgIcons"


function Congratulations() {

    return (
        <div className="auth-holder">
            <Box sx={{height: '100vh', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                <SuccessIcon/>
                <h2>Congratulations !</h2>
                <p>You have registered for the site. We hope you have a great experience.</p>
            </Box>
        </div>
    )
}

export default Congratulations



