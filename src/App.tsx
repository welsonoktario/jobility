import { Route, Routes } from 'react-router-dom';

import Home from '@/pages/home';

import Layout from '@/components/layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
