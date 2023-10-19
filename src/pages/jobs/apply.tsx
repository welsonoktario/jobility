import { useParams } from 'react-router-dom';

import { PageWrapper } from '@/components/page-wrapper';

export default function ApplyPage() {
  const { jobId } = useParams();

  return (
    <PageWrapper>
      <p>Apply {jobId} job page</p>
    </PageWrapper>
  );
}
