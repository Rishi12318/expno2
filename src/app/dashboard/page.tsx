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
    title: 'Active Projects',
    value: '127',
    icon: <FolderIcon />,
    color: '#0d9488',
    description: '23 pending approval',
  },
  {
    title: 'Revenue',
    value: '₹45.2L',
    icon: <AttachMoneyIcon />,
    color: '#0d9488',
    description: '+18% from last quarter',
  },
  {
    title: 'Completion Rate',
    value: '94.3%',
    icon: <TrendingUpIcon />,
    color: '#0d9488',
    description: 'Above target',
  },
  {
    title: 'Total Users',
    value: '2,543',
    icon: <PeopleIcon />,
    color: '#0d9488',
    description: '+12% from last month',
  },
];

const tableData: TableRow[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@company.io',
    role: 'Admin',
    status: 'Active',
    joinDate: '2023-08-15',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    email: 'marcus.chen@company.io',
    role: 'Developer',
    status: 'Active',
    joinDate: '2023-11-22',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    email: 'elena.rodriguez@company.io',
    role: 'Designer',
    status: 'Pending',
    joinDate: '2024-01-08',
  },
  {
    id: 4,
    name: 'David Thompson',
    email: 'david.thompson@company.io',
    role: 'Manager',
    status: 'Active',
    joinDate: '2023-07-12',
  },
  {
    id: 5,
    name: 'Jessica Park',
    email: 'jessica.park@company.io',
    role: 'Developer',
    status: 'Inactive',
    joinDate: '2023-09-05',
  },
  {
    id: 6,
    name: 'Alex Johnson',
    email: 'alex.johnson@company.io',
    role: 'Analyst',
    status: 'Active',
    joinDate: '2024-01-20',
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
          variant="h3" 
          sx={{ 
            fontWeight: 700,
            color: 'text.primary',
            mb: 2,
            letterSpacing: '-0.03em',
            fontSize: '2.25rem',
          }}
        >
          Project Overview
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ fontSize: '1.125rem', mb: 4, fontWeight: 500 }}
        >
          Track your team's progress and monitor key performance metrics in real-time.
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

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {statCardsData.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
            <StatCard data={stat} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mb: 4, mt: 6 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 700,
            color: 'text.primary',
            mb: 1.5,
            fontSize: '1.75rem',
            letterSpacing: '-0.02em',
          }}
        >
          Team Members
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            mb: 3,
            fontSize: '1rem',
            fontWeight: 500,
          }}
        >
          Manage and monitor all team members across different departments
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
