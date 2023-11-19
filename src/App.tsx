import { Route, Routes, useLocation } from 'react-router-dom';

import loadable from '@loadable/component';
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';

const Layout = loadable(() => import('@/components/layout'));
const LoginPage = loadable(() => import('@/pages/auth/login'));
const RegisterPage = loadable(() => import('@/pages/auth/register'));
const JobsPage = loadable(() => import('@/pages/jobs/jobs'));
const JobDetailPage = loadable(() => import('@/pages/jobs/job-detail'));
const ProfilePage = loadable(() => import('@/pages/profile'));
const ApplyPage = loadable(() => import('@/pages/jobs/apply'));
const ApplicationsPage = loadable(() => import('@/pages/applications/applications'));
const ApplicationDetailPage = loadable(() => import('@/pages/applications/application-detail'));
const SuccessPage = loadable(() => import('@/pages/jobs/success'));

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<JobsPage />} />
          <Route path="auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="jobs">
            <Route index element={<JobsPage />} />
            <Route path=":jobId" element={<JobDetailPage />} />
            <Route path=":jobId/apply" element={<ApplyPage />} />
            <Route path="apply/success" element={<SuccessPage />} />
          </Route>
          <Route path="applications">
            <Route index element={<ApplicationsPage />} />
            <Route path=":applicationId" element={<ApplicationDetailPage />} />
          </Route>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
