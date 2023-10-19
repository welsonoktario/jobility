import { useParams } from 'react-router-dom';

import { PageWrapper } from '@/components/page-wrapper';

export default function JobPage() {
  const { jobId } = useParams();

  return (
    <PageWrapper>
      <p>Job {jobId} page</p>
    </PageWrapper>
  );
}
