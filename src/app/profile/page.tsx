'use client';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';

export default function ProfilePage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
        User Profile
      </Typography>
      
      <Paper elevation={2} sx={{ p: 4, mt: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar
            sx={{
              width: 100,
              height: 100,
              bgcolor: 'primary.main',
              mr: 3,
            }}
          >
            <PersonIcon sx={{ fontSize: 60 }} />
          </Avatar>
          <Box>
            <Typography variant="h5" fontWeight="bold">
              Harsh Jain
            </Typography>
            <Typography variant="body1" color="text.secondary">
              harsh.jain@university.edu
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Chip label="Active" color="success" size="small" />
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Student ID
            </Typography>
            <Typography variant="body1" fontWeight="500">
              2024CS001
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Department
            </Typography>
            <Typography variant="body1" fontWeight="500">
              Computer Science
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Semester
            </Typography>
            <Typography variant="body1" fontWeight="500">
              6th Semester
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Enrollment Year
            </Typography>
            <Typography variant="body1" fontWeight="500">
              2022
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
