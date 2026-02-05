'use client';

import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PeopleIcon from '@mui/icons-material/People';
import FolderIcon from '@mui/icons-material/Folder';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AddIcon from '@mui/icons-material/Add';
import StatCard from '@/components/StatCard';
import DataTable from '@/components/DataTable';
import ConfirmDialog from '@/components/ConfirmDialog';
import { StatCardData, TableRow } from '@/types/dashboard';

const statCardsData: StatCardData[] = [
  {
    title: 'Total Users',
    value: '2,543',
    icon: <PeopleIcon />,
    color: '#2d3748',
    description: '+12% from last month',
  },
  {
    title: 'Active Projects',
    value: '127',
    icon: <FolderIcon />,
    color: '#2d3748',
    description: '23 pending approval',
  },
  {
    title: 'Revenue',
    value: '₹45.2L',
    icon: <AttachMoneyIcon />,
    color: '#2d3748',
    description: '+18% from last quarter',
  },
  {
    title: 'Completion Rate',
    value: '94.3%',
    icon: <TrendingUpIcon />,
    color: '#2d3748',
    description: 'Above target',
  },
];

const tableData: TableRow[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    role: 'Admin',
    status: 'Active',
    joinDate: '2024-01-15',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    role: 'Developer',
    status: 'Active',
    joinDate: '2024-02-20',
  },
  {
    id: 3,
    name: 'Amit Patel',
    email: 'amit.patel@example.com',
    role: 'Designer',
    status: 'Pending',
    joinDate: '2024-03-10',
  },
  {
    id: 4,
    name: 'Sneha Verma',
    email: 'sneha.verma@example.com',
    role: 'Manager',
    status: 'Active',
    joinDate: '2024-01-05',
  },
  {
    id: 5,
    name: 'Karan Singh',
    email: 'karan.singh@example.com',
    role: 'Developer',
    status: 'Inactive',
    joinDate: '2023-11-22',
  },
];

export default function DashboardPage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAddNew = () => {
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    console.log('New item added');
    setDialogOpen(false);
  };

  const handleCancel = () => {
    setDialogOpen(false);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 600,
            color: 'text.primary',
            mb: 1,
            letterSpacing: '-0.025em',
          }}
        >
          Analytics Dashboard
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ fontSize: '1rem', mb: 3 }}
        >
          Welcome back! Here's what's happening with your platform today.
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddNew}
          sx={{ 
            borderRadius: '8px',
            fontWeight: 500,
            textTransform: 'none',
            px: 3,
            py: 1,
          }}
        >
          Add New
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statCardsData.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <StatCard data={stat} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mb: 3 }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 600,
            color: 'text.primary',
            mb: 1,
            fontSize: '1.25rem',
            letterSpacing: '-0.025em',
          }}
        >
          User Management
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            fontSize: '0.875rem',
          }}
        >
          Overview of all registered users in the system
        </Typography>
      </Box>

      <DataTable rows={tableData} />

      <ConfirmDialog
        open={dialogOpen}
        title="Add New Item"
        message="Are you sure you want to add a new item to the system?"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </Container>
  );
}
