'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, ReactNode } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { usePathname } from 'next/navigation';
import theme from '@/theme/theme';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { MenuItem } from '@/types/layout';

const menuItems: MenuItem[] = [
  { label: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
  { label: 'Profile', path: '/profile', icon: <PersonIcon /> },
  { label: 'Settings', path: '/settings', icon: <SettingsIcon /> },
  { label: 'Login', path: '/login', icon: <LoginIcon /> },
];

interface ThemeRegistryProps {
  children: ReactNode;
}

export default function ThemeRegistry({ children }: ThemeRegistryProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Don't show navbar/sidebar on login and register pages
  const isAuthPage = pathname === '/login' || pathname === '/register';

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isAuthPage ? (
        <>{children}</>
      ) : (
        <Box sx={{ display: 'flex' }}>
          <Navbar onMenuClick={handleSidebarToggle} />
          <Sidebar
            open={sidebarOpen}
            onClose={handleSidebarClose}
            menuItems={menuItems}
          />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            {children}
          </Box>
        </Box>
      )}
    </ThemeProvider>
  );
}
