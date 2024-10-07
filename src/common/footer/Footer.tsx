import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Grid from '@mui/material/Grid2';
import './footer.css'
import { Box, Container } from '@mui/material';
import { AppStore, GooglePlay } from '../../assets/icons/SvgIcons';




function Footer() {

    return (
        <>
            <Box className='primary'>
                <Container maxWidth="xl" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <img style={{ width: '150px', height: '50px', marginBottom: '25px' }} src="/public/images/Union.png" alt="" />
                    <Grid container spacing={2} >
                        <Grid size={{ md: 4, sm: 12, xs: 12 }}>
                            <p>
                                With 65% of free trial users converting to full-paying members, we’re thrilled by the incredible feedback from our community.
                                Parents are learning how to support their young athletes, coaches are expanding their skill sets with new techniques, and junior players are seeing significant improvements in their UTR.
                                Recreational players are finally mastering the correct way to hit shots, including advanced techniques like the Buggy Whip Forehand.
                            </p>

                        </Grid>
                        <Grid size={{ md: 2, sm: 4, xs: 12 }} >
                            <ul >
                                <li>Links</li>
                                <li>FAQs</li>
                                <li>Terms and Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>

                        </Grid>
                        <Grid size={{ md: 3, sm: 4, xs: 12 }}>
                            <ul>
                                <li>Contact</li>
                                <li>
                                    <LocalPhoneIcon />
                                    <span>619-393-4981 ext. 101</span>
                                </li>
                                <li>
                                    <ArrowDropDownCircleIcon />
                                    <span>Invest@Wellbii.com</span>
                                </li>
                            </ul>

                        </Grid>
                        <Grid size={{ md: 3, sm: 4, xs: 12 }}>
                            <ul>
                                <li>DownLoad App</li>
                                <Box>
                                    <AppStore />
                                    <GooglePlay />
                                </Box>
                            </ul>

                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </>
    )
}

export default Footer
