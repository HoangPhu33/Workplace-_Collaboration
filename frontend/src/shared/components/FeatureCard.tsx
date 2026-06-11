import { Card, CardContent, Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps): JSX.Element {
  return (
    <Card elevation={0} sx={{ height: '100%', border: '1px solid rgba(15, 23, 42, 0.08)' }}>
      <CardContent>
        <Stack spacing={2}>
          <BoxIcon>{icon}</BoxIcon>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

function BoxIcon({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: 48,
        height: 48,
        borderRadius: 3,
        bgcolor: 'rgba(15, 118, 110, 0.12)',
        color: 'primary.main',
      }}
    >
      {children}
    </Stack>
  );
}