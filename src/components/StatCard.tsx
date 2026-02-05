'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { StatCardData } from '@/types/dashboard';

interface StatCardProps {
  data: StatCardData;
}

export default function StatCard({ data }: StatCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        border: '2px solid',
        borderColor: '#e7e5e4',
        borderRadius: '20px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        background: 'linear-gradient(135deg, #ffffff 0%, #fafaf9 100%)',
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #0d9488 0%, #f97316 100%)',
        },
      }}
    >
      <CardContent sx={{ p: 3.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2.5 }}>
          <Box>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ 
                fontWeight: 600,
                fontSize: '0.8125rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                mb: 1.5,
              }}
            >
              {data.title}
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700,
                color: 'text.primary',
                fontSize: '2rem',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              {data.value}
            </Typography>
          </Box>
          <Box 
            sx={{ 
              p: 2,
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
              color: 'white',
              boxShadow: '0 4px 12px rgba(13, 148, 136, 0.25)',
              '& .MuiSvgIcon-root': {
                fontSize: '1.5rem',
              },
            }}
          >
            {data.icon}
          </Box>
        </Box>
        
        {data.description && (
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              fontSize: '0.8125rem',
              mt: 1.5,
              fontWeight: 500,
            }}
          >
            {data.description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
