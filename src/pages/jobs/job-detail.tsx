import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

import { Job } from '@/types';

import { $get } from '@/lib/helpers';

import { useAuth } from '@/components';
import { PageWrapper } from '@/components/page-wrapper';

export default function JobPage() {
  const { jobId } = useParams();
  const { user } = useAuth();

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

  return (
    <PageWrapper isLoading={isLoading}>
      <Stack p="8" rounded="lg" bg="Background" shadow="md">
        <Flex justify="space-between" w="full">
          <Flex columnGap="6" alignItems="center">
            <Image
              h="20"
              w="20"
              rounded="lg"
              objectFit="contain"
              src={
                job?.company.logo ??
                `https://ui-avatars.com/api/?name=${job?.company.name.replace(' ', '+')}`
              }
            />
            <Stack rowGap="1">
              <Heading size="lg">{job?.title}</Heading>
              <Text>
                <span style={{ userSelect: 'none' }}>🏢 </span>
                {job?.company.name}
              </Text>
            </Stack>
          </Flex>

          <Button as={Link} colorScheme="blue" to={user ? `/jobs/${jobId}/apply` : '/auth/login'}>
            Apply
          </Button>
        </Flex>
      </Stack>
    </PageWrapper>
  );
}
