import { useParams } from 'react-router-dom';

export default function ApplyPage() {
  const { jobId } = useParams();

  return <p>Apply {jobId} job page</p>;
}
