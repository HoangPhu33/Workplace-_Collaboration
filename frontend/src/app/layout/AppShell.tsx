import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

export function AppShell(): JSX.Element {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f8fbff 0%, #eef4fa 100%)',
      }}
    >
      <AppBar position="sticky" elevation={0} color="transparent">
        <Toolbar sx={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)', backdropFilter: 'blur(10px)' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', flexGrow: 1 }}>
            Workplace Collaboration
          </Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Outlet />
      </Container>
    </Box>
  );
}