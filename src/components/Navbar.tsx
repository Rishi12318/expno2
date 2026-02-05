'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NavbarProps } from '@/types/layout';

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1300 }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, px: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            onClick={onMenuClick}
            sx={{ 
              color: 'white',
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.03em',
              fontSize: '1.375rem',
            }}
          >
            Dashboard
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton 
            sx={{
              color: 'white',
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <Badge 
              badgeContent={3} 
              sx={{ 
                '& .MuiBadge-badge': { 
                  fontSize: '0.625rem',
                  bgcolor: 'secondary.main',
                  fontWeight: 600,
                }
              }}
            >
              <NotificationsIcon fontSize="small" />
            </Badge>
          </IconButton>
          <Avatar 
            sx={{ 
              width: 38, 
              height: 38,
              bgcolor: 'white',
              color: 'primary.main',
              fontSize: '0.9375rem',
              fontWeight: 700,
              border: '2px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            RJ
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
