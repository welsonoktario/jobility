import { Route, Routes } from 'react-router-dom';

import LoginPage from '@/pages/auth/login';
import RegisterPage from '@/pages/auth/register';
import HomePage from '@/pages/home';
import ApplyPage from '@/pages/jobs/apply';
import JobPage from '@/pages/jobs/job-detail';
import JobsPage from '@/pages/jobs/jobs';
import ProfilePage from '@/pages/profile';

import Layout from '@/components/layout';

import ApplicationDetailPage from './pages/applications/application-detail';
import ApplicationsPage from './pages/applications/applications';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="jobs">
          <Route index element={<JobsPage />} />
          <Route path=":jobId" element={<JobPage />} />
          <Route path=":jobId/apply" element={<ApplyPage />} />
        </Route>
        <Route path="applications">
          <Route index element={<ApplicationsPage />} />
          <Route path=":applicationId" element={<ApplicationDetailPage />} />
        </Route>
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}
