import { Box } from "@mui/material"
import { Container } from "@mui/material"
import Footer from "../../common/footer/Footer"
import NavBar from "../../common/Navbar/NavBar"
import './auth.css'
import { Outlet } from "react-router-dom"



function AuthModule() {


    return (
        <div className="auth">
            <NavBar />
            <Container maxWidth="xl" sx={{ display: 'flex', py: '20px', height: '100%' }}>

                <Box sx={{ width: { xs: '80%', sm: '60%', md: '50%' }, boxShadow: { xs: 0, md: 1 }, borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', mx: 'auto' }}>

                    <Box sx={{ width: { xs: '100%', md: '70%' }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', py: '30px', mx: 'auto' }}>
                        <img src="/public/images/UnionCenter.png" alt="" style={{ marginBottom: '20px' }} />

                        <Outlet />
                    </Box>
                </Box>


                <Box sx={{ width: '50%', display: { xs: 'none', md: 'block' } }}>
                    <img width='100%' height='100%' src="/public/images/Group 1000011016.png" alt="" />
                </Box>


            </Container>
            <Footer />
        </div>
    )
}

export default AuthModule
