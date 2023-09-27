import { useParams } from 'react-router-dom';

export default function JobPage() {
  const { jobId } = useParams();

  return <p>Job {jobId} page</p>;
}
