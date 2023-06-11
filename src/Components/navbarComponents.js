import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import IconEx from '@mui/icons-material/AddLinkSharp';
import MenuItem from "@mui/material/MenuItem";
import {TextField} from "@mui/material";

export default function NavbarComponents() {
    return (
        <Box sx={{ flexGrow: 1
        }}>
            <AppBar position="static" color="">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <IconEx fontSize="large"/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        KGM-APP
                    </Typography>
                    <TextField id="outlined-search" label="what are you looking for?" size="small" type="search"  sx={{
                        marginRight:112,
                        width:300,

                    }} />
                    <MenuItem >
                        <Typography component="a" href="#"  sx={{
                            textDecoration:"none",
                            color:"inherit",
                            padding:0.1,
                            marginRight:2,
                        }}
                        >HOME</Typography>

                        <Typography component="a" href="#"  sx={{
                            textDecoration:"none",
                            color:"inherit",
                            padding:0.1,
                            marginRight:2,
                        }}
                        >BOOKS</Typography>
                        <Typography component="a" href="#"  sx={{
                            textDecoration:"none",
                            color:"inherit",
                            padding:0.1,
                            marginRight:2,
                        }}
                        >GALERY</Typography>
                        <Typography component="a" href="#"  sx={{
                            textDecoration:"none",
                            color:"inherit",
                            padding:0.1,
                            marginRight:2,
                        }}
                        >ABOUT</Typography>
                        <Typography component="a" href="#"  sx={{
                            textDecoration:"none",
                            color:"inherit",
                            padding:0.1,
                            marginRight:2,
                        }}
                        >CONTACT</Typography>

                    </MenuItem>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}