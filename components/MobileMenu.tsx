'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';

export default function MobileMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            {/* 👇 Visible only on mobile (hidden on md and up) */}
            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <Tooltip title="Menu">
                    <IconButton
                        onClick={handleClick}
                        size="large"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'mobile-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <MenuIcon fontSize="large" sx={{ color: 'white' }} />
                    </IconButton>
                </Tooltip>
            </Box>

            {/* 👇 The dropdown menu */}
            <Menu
                anchorEl={anchorEl}
                id="mobile-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        sx: {
                            bgcolor: '#111827', // dark background for modern look
                            color: 'white',
                            width: 200,
                            '& .MuiMenuItem-root': {
                                justifyContent: 'center',
                                fontSize: '1rem',
                                fontWeight: 500,
                                '&:hover': {
                                    bgcolor: '#1f2937',
                                },
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {/* 👇 Your links (same as navbar) */}
                <MenuItem component="a" href="#">Home</MenuItem>
                <MenuItem component="a" href="#AboutMe">About Me</MenuItem>
                <MenuItem component="a" href="#Technologies">Technologies</MenuItem>
                <MenuItem component="a" href="#Projects">Projects</MenuItem>
                <MenuItem component="a" href="#Contact">Contact</MenuItem>
            </Menu>
        </React.Fragment>
    );
}
