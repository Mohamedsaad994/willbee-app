import { Box } from "@mui/material"

type GetWayPorps ={
    title: string
    icon: React.ReactNode
}

function GetWay(props: GetWayPorps) {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: 1, borderRadius: 2, padding: '24px 16px', my: '20px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {props.icon}
                <h3 style={{ fontSize: '24px', fontWeight: '700', marginLeft: '20px' }}>{props.title}</h3>
            </Box>
            <p className='secondry' style={{ fontSize: '20px' }}>XXXX68</p>
            <input type="radio" />
        </Box>
    )
}

export default GetWay
