'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/navigation';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';

const features = [
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive dashboard with real-time analytics, user management, and data visualization.',
    icon: <DashboardIcon sx={{ fontSize: 40 }} />,
    path: '/dashboard',
  },
  {
    title: 'User Profile',
    description: 'Personalized user profiles with settings, preferences, and account management.',
    icon: <PersonIcon sx={{ fontSize: 40 }} />,
    path: '/profile',
  },
  {
    title: 'Settings Panel',
    description: 'System configuration, theme customization, and application preferences.',
    icon: <SettingsIcon sx={{ fontSize: 40 }} />,
    path: '/settings',
  },
];

export default function HomePage() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 700,
            color: 'text.primary',
            mb: 2,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            letterSpacing: '-0.025em',
          }}
        >
          Component Library
        </Typography>
        <Typography 
          variant="h5" 
          color="text.secondary"
          sx={{ 
            mb: 4,
            fontWeight: 400,
            fontSize: { xs: '1.125rem', md: '1.25rem' },
            lineHeight: 1.6,
          }}
        >
          A modern React application built with Material-UI components, featuring responsive design and clean architecture.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => handleNavigation('/dashboard')}
            sx={{ 
              px: 4,
              py: 1.5,
              borderRadius: '10px',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
            }}
          >
            View Dashboard
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<LoginIcon />}
            onClick={() => handleNavigation('/login')}
            sx={{ 
              px: 4,
              py: 1.5,
              borderRadius: '10px',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
              borderColor: 'primary.main',
            }}
          >
            Login
          </Button>
        </Box>
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                cursor: 'pointer',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '12px',
                boxShadow: '0 1px 3px 0 rgba(45, 55, 72, 0.1)',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  boxShadow: '0 4px 6px -1px rgba(45, 55, 72, 0.1)',
                  transform: 'translateY(-2px)',
                  borderColor: 'primary.main',
                },
              }}
              onClick={() => handleNavigation(feature.path)}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Box 
                  sx={{ 
                    mb: 3,
                    color: 'primary.main',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary',
                    fontSize: '1.125rem',
                    letterSpacing: '-0.025em',
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    lineHeight: 1.6,
                    fontSize: '0.875rem',
                  }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Technology Stack */}
      <Paper 
        sx={{ 
          p: 4,
          textAlign: 'center',
          bgcolor: 'grey.50',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '12px',
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 600,
            mb: 2,
            color: 'text.primary',
            fontSize: '1.25rem',
            letterSpacing: '-0.025em',
          }}
        >
          Built With Modern Technologies
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ 
            mb: 3,
            fontSize: '0.875rem',
            lineHeight: 1.6,
          }}
        >
          This application showcases the power of Next.js 15, TypeScript, and Material-UI working together to create beautiful, functional user interfaces.
        </Typography>
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 2, 
            justifyContent: 'center', 
            flexWrap: 'wrap',
          }}
        >
          {['Next.js 15', 'TypeScript', 'Material-UI', 'React'].map((tech) => (
            <Box
              key={tech}
              sx={{
                px: 3,
                py: 1,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '20px',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'text.primary',
              }}
            >
              {tech}
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  );
}

