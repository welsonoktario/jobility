import { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';

import { Button, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';

import { Job } from '@/types';

import { formatRupiah, relativeDateTime } from '@/lib';
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
        <Flex justify="space-between" w="full" h="full">
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

          <Flex direction="column" justify="space-between" align="flex-end" h="full">
            <Text color="GrayText" fontSize="sm">
              {`Posted ${relativeDateTime(job!.datePosted)}`}
            </Text>
            <Button
              as={RouterLink}
              colorScheme="blue"
              to={user ? `/jobs/${jobId}/apply` : '/auth/login'}
              mt="4"
            >
              Apply
            </Button>
          </Flex>
        </Flex>

        <Flex mt="4" columnGap="4">
          <Text>
            <span style={{ userSelect: 'none' }}>🕔&nbsp;&nbsp;&nbsp;</span>
            {job?.system}
          </Text>
          <p>|</p>
          <Text>
            <span style={{ userSelect: 'none' }}>📍&nbsp;&nbsp;&nbsp;</span>
            {job?.location}
          </Text>
          <p>|</p>
          <Text>
            <span style={{ userSelect: 'none' }}>💲&nbsp;&nbsp;&nbsp;</span>
            {job?.salary ? formatRupiah(job?.salary) : 'Hidden'}
          </Text>
        </Flex>
      </Stack>

      <Stack mt="6" p="8" rounded="lg" bg="Background" shadow="md">
        <Heading size="md">Job Description</Heading>
        <Text>{job?.description}</Text>

        {job?.requirement ? (
          <>
            <Heading mt="4" size="md">
              Minimum Qualification
            </Heading>
            <Text>{job?.requirement}</Text>
          </>
        ) : null}
      </Stack>

      <Stack mt="6" p="8" rounded="lg" bg="Background" shadow="md">
        <Heading size="md">About {job?.company.name}</Heading>
        <Text>{job?.company.description}</Text>

        <Stack rowGap="1" mt="4">
          <Text>
            <span style={{ userSelect: 'none' }}>📍&nbsp;&nbsp;&nbsp;</span>
            {job?.company.location}
          </Text>
          <Text>
            <span style={{ userSelect: 'none' }}>🏢&nbsp;&nbsp;&nbsp;</span>
            {job?.company.industry}
          </Text>
          <Text>
            <span style={{ userSelect: 'none' }}>📧&nbsp;&nbsp;&nbsp;</span>
            {job?.company.contact}
          </Text>
          <Text>
            <span style={{ userSelect: 'none' }}>🔗&nbsp;&nbsp;&nbsp;</span>
            <Link color="blue" href={job?.company.links} target="_blank" rel="noopener noreferrer">
              {job?.company.links}
            </Link>
          </Text>
        </Stack>
      </Stack>
    </PageWrapper>
  );
}
