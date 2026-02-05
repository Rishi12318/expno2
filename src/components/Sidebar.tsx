'use client';

import { useRouter, usePathname } from 'next/navigation';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { SidebarProps } from '@/types/layout';

const DRAWER_WIDTH = 280;

export default function Sidebar({ open, onClose, menuItems }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      sx={{
        width: DRAWER_WIDTH,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          bgcolor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider',
          pt: 8,
        },
      }}
    >
      <Box sx={{ px: 3, py: 3, background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'white',
            fontWeight: 700,
            fontSize: '1.25rem',
            letterSpacing: '-0.02em',
          }}
        >
          Navigation
        </Typography>
      </Box>
      
      <Divider sx={{ mx: 0, bgcolor: '#e7e5e4' }} />
      
      <Box sx={{ px: 2, pt: 3 }}>
        <List disablePadding>
          {menuItems.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                selected={pathname === item.path}
                onClick={() => handleNavigation(item.path)}
                sx={{
                  borderRadius: '14px',
                  minHeight: 50,
                  px: 2,
                  '&:hover': {
                    bgcolor: 'rgba(13, 148, 136, 0.08)',
                  },
                  '&.Mui-selected': {
                    background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
                    color: 'white',
                    boxShadow: '0 4px 12px rgba(13, 148, 136, 0.25)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)',
                    },
                    '& .MuiListItemIcon-root': {
                      color: 'white',
                    },
                  },
                }}
              >
                <ListItemIcon 
                  sx={{ 
                    color: pathname === item.path ? 'inherit' : 'text.secondary',
                    minWidth: 44,
                    '& .MuiSvgIcon-root': {
                      fontSize: '1.375rem',
                    },
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '0.9375rem',
                    fontWeight: pathname === item.path ? 700 : 500,
                    color: pathname === item.path ? 'inherit' : 'text.primary',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
