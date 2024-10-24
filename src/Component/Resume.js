import React from 'react'
import { Header } from './Header'
import '../CSS/main.css'
import Card from '@mui/material/Card';
import nidhi from '../image/nidhi.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Divider, colors } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';

export const Resume = () => {
    return (
        <section>
            <Header />

            <section>
                <div className='left'>
                    <Card className='cardLeft'>
                        <img alt='No Image' src={nidhi} height='150px' width='150px' />
                        <h1 style={{ fontSize: '30px' }}>Beatrice Wambui</h1>
                        <h3>Full stack Developer</h3>
                        <IconButton >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton >
                            <LinkedInIcon />
                        </IconButton>

                        <IconButton >
                            <TwitterIcon />
                        </IconButton>

                        <IconButton>
                            <GitHubIcon />
                        </IconButton>

                        <Card className='cardLeftBetween'>

                            <div class="flex-container">
                                <IconButton className='img'>
                                    <PhoneAndroidIcon />
                                </IconButton>
                                <div class="text-container">
                                    <span>Phone</span>
                                    <span>892298656</span>
                                </div>
                            </div>

                            <Divider />

                            <div class="flex-container">
                                <IconButton className='img'>
                                    <PhoneAndroidIcon />
                                </IconButton>
                                <div class="text-container">
                                    <span>Email</span>
                                    <span>n@gmail.com</span>
                                </div>
                            </div>



                            <Divider />


                            <div class="flex-container">
                                <IconButton className='img'>
                                    <PhoneAndroidIcon />
                                </IconButton>
                                <div class="text-container">
                                    <span>Location</span>
                                    <span>Knya</span>
                                </div>
                            </div>



                            <Divider />

                            <button class="btn"><i class="fa fa-download"></i> Download</button>
                        </Card>
                    </Card>
                </div>
                <div className='right'>
                    {/* <Card className='cardRight'>
                    </Card> */}

                    <div className='menuButton'>
                        <button className='button'> <i class="fa fa-home"></i> Home</button>
                        <button className='button'><i class="fa fa-ressume"></i> Resume</button>
                        <button className='button'><i class="fa fa-work"></i> Work</button>
                        <button className='button'><i class="fa fa-contact"></i> Contact</button>
                    </div>
                    <div className='details'>
                        <h1
                            style={{ textAlign: 'left', paddingLeft: '50px', paddingTop: '50px', fontSize: '40px' }}
                        >Resume <span style={{ color: 'red' }}>........................</span></h1>



                        <div className='education'>

                            <div class="flex-container-edu">
                                <IconButton className='img-edu'>
                                    <PhoneAndroidIcon />
                                </IconButton>
                                <div class="text-container-edu">
                                    <span>Education</span>

                                </div>
                            </div>

                        </div>





                        <div className='experience'>

                            <div class="flex-container-exp">
                                <IconButton className='img-exp'>
                                    <PhoneAndroidIcon />
                                </IconButton>
                                <div class="text-container-exp">
                                    <span>Experience</span>
                                </div>
                            </div>

                        </div>



                        <div className='home1'>

                            <div class="flex-container1">
                                <IconButton className='img1'>
                                    <PhoneAndroidIcon />
                                </IconButton>
                                <div class="text-container1">
                                    <span>Web Development</span>
                                    <span>892298656</span>
                                </div>
                            </div>

                        </div>

                        <div className='home2'>

                            <div class="flex-container2">
                                <IconButton className='img2'>
                                    <PhoneAndroidIcon />
                                </IconButton>
                                <div class="text-container2">
                                    <span>App Development</span>
                                    <span>n@gmail.com</span>
                                </div>
                            </div>

                        </div>



                        <div className='home3'>

                            <div class="flex-container3">
                                <IconButton className='img3'>
                                    <PhoneAndroidIcon />
                                </IconButton>
                                <div class="text-container3">
                                    <span>Mentorship</span>
                                    <span>892298656</span>
                                </div>
                            </div>

                        </div>

                        <div className='home4'>

                            <div class="flex-container4">
                                <IconButton className='img4'>
                                    <PhoneAndroidIcon />
                                </IconButton>
                                <div class="text-container4">
                                    <span>UI/UX Designing</span>
                                    <span>892298656</span>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </section>
        </section>



    )
}