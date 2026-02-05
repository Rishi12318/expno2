'use client';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
        Settings
      </Typography>

      <Paper elevation={2} sx={{ p: 4, mt: 3 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Notifications
        </Typography>
        <Box sx={{ my: 2 }}>
          <FormControlLabel
            control={
              <Switch
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
            }
            label="Enable push notifications"
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <FormControlLabel
            control={
              <Switch
                checked={emailUpdates}
                onChange={(e) => setEmailUpdates(e.target.checked)}
              />
            }
            label="Receive email updates"
          />
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Appearance
        </Typography>
        <Box sx={{ my: 2 }}>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
              />
            }
            label="Dark mode (Coming soon)"
            disabled
          />
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
          <Button variant="contained">
            Save Changes
          </Button>
          <Button variant="outlined" color="secondary">
            Reset to Default
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
