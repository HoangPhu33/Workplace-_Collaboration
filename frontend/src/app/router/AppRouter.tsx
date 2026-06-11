import { Route, Routes } from 'react-router-dom';
import { AppShell } from '../layout/AppShell';
import { HomePage } from '../../features/overview/pages/HomePage';

export function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}