import { Job } from '@/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { $get } from '@/lib/helpers';

import { PageWrapper } from '@/components/page-wrapper';

export default function JobPage() {
  const { jobId } = useParams();

  const [job, setJob] = useState<Job | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (jobId) {
      setTimeout(() => {
        $get<Job>(`/job/${jobId}`)
          .then(({ status, data, message }) => {
            console.log(data);
            status === 'fail' ? setError(message ?? '') : setJob(data);
          })
          .finally(() => setIsLoading(false));
      }, 1000);
    }
  }, []);

  return <PageWrapper isLoading={isLoading}></PageWrapper>;
}
