'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TableRow as TableRowType } from '@/types/dashboard';

interface DataTableProps {
  rows: TableRowType[];
  title?: string;
}

export default function DataTable({ rows, title }: DataTableProps) {
  const getStatusColor = (status: string): 'success' | 'warning' | 'error' | 'default' => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'success';
      case 'pending':
        return 'warning';
      case 'inactive':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Paper 
      sx={{ 
        width: '100%', 
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '12px',
        boxShadow: '0 1px 3px 0 rgba(45, 55, 72, 0.1)',
      }}
    >
      {title && (
        <Box sx={{ p: 3, pb: 0 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600,
              color: 'text.primary',
              fontSize: '1.125rem',
              letterSpacing: '-0.025em',
            }}
          >
            {title}
          </Typography>
        </Box>
      )}
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell 
                sx={{ 
                  fontWeight: 600,
                  fontSize: '0.8125rem',
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  bgcolor: 'grey.50',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  py: 2,
                }}
              >
                User
              </TableCell>
              <TableCell 
                sx={{ 
                  fontWeight: 600,
                  fontSize: '0.8125rem',
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  bgcolor: 'grey.50',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  py: 2,
                }}
              >
                Role
              </TableCell>
              <TableCell 
                sx={{ 
                  fontWeight: 600,
                  fontSize: '0.8125rem',
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  bgcolor: 'grey.50',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  py: 2,
                }}
              >
                Status
              </TableCell>
              <TableCell 
                sx={{ 
                  fontWeight: 600,
                  fontSize: '0.8125rem',
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  bgcolor: 'grey.50',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  py: 2,
                }}
              >
                Join Date
              </TableCell>
              <TableCell 
                sx={{ 
                  fontWeight: 600,
                  fontSize: '0.8125rem',
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  bgcolor: 'grey.50',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  py: 2,
                  width: 60,
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow 
                key={row.id}
                sx={{
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                  '&:last-child td': {
                    borderBottom: 0,
                  },
                }}
              >
                <TableCell 
                  sx={{ 
                    py: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar 
                      sx={{ 
                        width: 32, 
                        height: 32,
                        bgcolor: 'primary.main',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                      }}
                    >
                      {row.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <Box>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontWeight: 600,
                          color: 'text.primary',
                          fontSize: '0.875rem',
                        }}
                      >
                        {row.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.secondary',
                          fontSize: '0.75rem',
                        }}
                      >
                        {row.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell 
                  sx={{ 
                    py: 2,
                    fontSize: '0.875rem',
                    color: 'text.primary',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  {row.role}
                </TableCell>
                <TableCell 
                  sx={{ 
                    py: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Chip
                    label={row.status}
                    color={getStatusColor(row.status)}
                    size="small"
                    sx={{
                      fontWeight: 500,
                      fontSize: '0.75rem',
                      height: 24,
                    }}
                  />
                </TableCell>
                <TableCell 
                  sx={{ 
                    py: 2,
                    fontSize: '0.875rem',
                    color: 'text.primary',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  {row.joinDate}
                </TableCell>
                <TableCell 
                  sx={{ 
                    py: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <IconButton 
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        bgcolor: 'action.hover',
                      },
                    }}
                  >
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
