import { Route, Routes } from 'react-router-dom';

import loadable from '@loadable/component';

const Layout = loadable(() => import('@/components/layout'));
const HomePage = loadable(() => import('@/pages/home'));
const LoginPage = loadable(() => import('@/pages/auth/login'));
const RegisterPage = loadable(() => import('@/pages/auth/register'));
const JobsPage = loadable(() => import('@/pages/jobs/jobs'));
const JobPage = loadable(() => import('@/pages/jobs/job-detail'));
const ProfilePage = loadable(() => import('@/pages/profile'));
const ApplyPage = loadable(() => import('@/pages/jobs/apply'));
const ApplicationsPage = loadable(() => import('@/pages/applications/applications'));
const ApplicationDetailPage = loadable(() => import('@/pages/applications/application-detail'));

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
