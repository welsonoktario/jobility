import { Link } from 'react-router-dom';

import { PageWrapper } from '@/components/page-wrapper';

export default function JobsPage() {
  return (
    <PageWrapper>
      <Link className="btn btn-primary" to="/jobs/9059e341-64b8-46df-8580-2b6a1399a859">
        Go to job detail
      </Link>
    </PageWrapper>
  );
}
