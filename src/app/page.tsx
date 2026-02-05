'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import { useRouter } from 'next/navigation';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';

const features = [
  {
    title: 'Real-time Analytics',
    description: 'Monitor your business metrics with comprehensive real-time dashboards and insights.',
    icon: <TrendingUpIcon sx={{ fontSize: 48 }} />,
    path: '/dashboard',
    color: '#0d9488',
  },
  {
    title: 'User Profiles',
    description: 'Manage team members with detailed profiles, roles, and permissions.',
    icon: <PersonIcon sx={{ fontSize: 48 }} />,
    path: '/profile',
    color: '#f97316',
  },
  {
    title: 'Advanced Settings',
    description: 'Configure and customize every aspect of your platform to match your needs.',
    icon: <SettingsIcon sx={{ fontSize: 48 }} />,
    path: '/settings',
    color: '#8b5cf6',
  },
];

const stats = [
  { label: 'Active Users', value: '12.5K', icon: <PersonIcon /> },
  { label: 'Performance Score', value: '98.5%', icon: <SpeedIcon /> },
  { label: 'Security Rating', value: 'A+', icon: <SecurityIcon /> },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800,
              mb: 3,
              background: 'linear-gradient(135deg, #0d9488 0%, #f97316 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.03em',
            }}
          >
            Welcome to Component Library
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ 
              mb: 5,
              fontWeight: 500,
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1.125rem', md: '1.375rem' },
            }}
          >
            A powerful platform built with modern component libraries for seamless user experience
          </Typography>
          
          <Grid container spacing={3} sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
            {stats.map((stat, idx) => (
              <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 1 }}>{stat.icon}</Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => router.push('/dashboard')}
              startIcon={<DashboardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.125rem',
                fontWeight: 600,
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
              }}
            >
              Explore Dashboard
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => router.push('/login')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.125rem',
                fontWeight: 600,
                borderRadius: '14px',
                borderWidth: '2px',
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center',
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Platform Features
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ 
              textAlign: 'center',
              mb: 6,
              fontSize: '1.125rem',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Everything you need to manage your business efficiently
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '24px',
                    border: '2px solid',
                    borderColor: 'divider',
                    cursor: 'pointer',
                  }}
                  onClick={() => router.push(feature.path)}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        bgcolor: `${feature.color}20`,
                        color: feature.color,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: 'text.primary',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7, fontWeight: 500 }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            px: 4,
            borderRadius: '32px',
            background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
            color: 'white',
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2rem', md: '2.75rem' } }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.95, fontWeight: 500 }}>
            Join thousands of teams already using our platform
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push('/register')}
            sx={{
              px: 5,
              py: 2,
              fontSize: '1.125rem',
              fontWeight: 600,
              borderRadius: '14px',
              bgcolor: 'white',
              color: 'primary.main',
            }}
          >
            Create Account
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
