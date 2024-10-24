import React from "react";
import '../CSS/main.css'
import { IconButton, Typography, Box, AppBar, Toolbar, InputBase, Badge } from '@mui/material';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

export const Header = () => {
    return (
                <header  style={{ paddingTop:"40px"}}>
                    <Toolbar>

                        <Typography >
                           <div style={{paddingLeft:"45px", fontSize:"30px"}}> <span style={{color:"black"}}>Beatrice</span> <span style={{color:"red"}}>Wambui</span></div>
                        </Typography>

                        <Box sx={{ flexGrow: 1 }} />
                        <Box>
                            <IconButton color="inherit">

                                {/* <NightlightRoundIcon style={{backgroundColor:"red"}} /> */}
                                <span  style={{width:"50px", height:'50px'}} class="material-symbols-outlined">dark_mode</span>

                            </IconButton>

                        </Box>
                    </Toolbar>
                </header>
            
    
    )
}