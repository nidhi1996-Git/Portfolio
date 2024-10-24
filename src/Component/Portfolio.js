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

export const Portfolio = () => {
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
                        >Contact <span style={{ color: 'red' }}>........................</span></h1>

                        <div className='phoneDiv'>

                            <div class="flex-container-contact">
                                <IconButton className='img-contact'>
                                    <PhoneAndroidIcon />
                                </IconButton>
                                <div class="text-container-contact">
                                    <span>Phone</span>
                                    <span>892298656</span>
                                </div>
                            </div>

                        </div>

                        <div className='emailDiv'>

                            <div class="flex-container-email">
                                <IconButton className='img-email'>
                                    <PhoneAndroidIcon />
                                </IconButton>
                                <div class="text-container-email">
                                    <span>Email</span>
                                    <span>n@gmail.com</span>
                                </div>
                            </div>

                        </div>

                        <div className='contact-info'>
                            <p >I am  always open to dicussing new project
                                oppertunities in the tech world , partnership and more so mentorship</p>
                            <TextField label="Name"></TextField>
                            <TextField label="Email"></TextField>
                            <TextField label="Message"></TextField>
                            <button>Submit</button>
                        </div>

                    </div>
                </div>
            </section>
        </section>



    )
}