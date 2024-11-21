import React, { useState } from 'react';
import {AppBar, Toolbar, Typography,IconButton, Button, Drawer,List, ListItem, ListItemText, useMediaQuery } from "@mui/material"; 
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from '@mui/material/styles';

import desk from '../img/degic 1.png'






export default function Nabvar() {
  
    const  [open, setOpen] = useState(false); 
    const Theme  = useTheme(); 
    const IsMobile = useMediaQuery(Theme.breakpoints.down("sm"))
    const menuItems = ["About", "Services","Projects", "Contacts" ];

    return (
        <>
            <AppBar elevation={0} className='Navbar' position='static' sx={{backgroundColor:"white", color:"black", borderBottom:"1px solid #fafafa"}}>
                <Toolbar >
                    {IsMobile ? (
                        <div>
                            <IconButton color='inherit' onClick={()=> setOpen(true) } >
                                <MenuIcon />
                            </IconButton>
                        </div>
                    ) : (
                        <div className='flex w-full items-center justify-between'>
                           <img className='w-1/6' src={desk} alt="" />
    
                          <div className='flex items-center'>
                          {menuItems.map((item) => (
                                <Button color='inherit' key={item} >{item}</Button>
                            ))}
                            <Button variant='outlined'
                             sx={{
                                color:"#2AB691",
                                backgroundColor: "white",
                                borderRadius:"10px",
                                "&:hover": {
                                    backgroundColor:"#2AB666",
                                    color:"white"
                                }}}>
    
                                Sign Up
                            </Button>
                          </div>
                        
                        </div>
                    )}
                </Toolbar>
            </AppBar>
    
            <Drawer anchor='left' open={open} onClose={()=> setOpen(false) }>
                <List>
                    {menuItems.map((item)=>(
                        <ListItem button key={item} onClick={()=> setOpen(false)}>
                            <ListItemText>{item}</ListItemText>
                        </ListItem>
                    ) )}
    
                    <ListItem button> <ListItemText primary="Sign up" />  </ListItem>
                </List>        
                
            </Drawer>
        </>
      )
    }