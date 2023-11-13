import { Alert, Heading, SimpleGrid, SimpleGridProps } from '@chakra-ui/react';

import { Job } from '@/types';

import { CardJob } from './job-card';

export type ListJobsProps = SimpleGridProps & {
  jobs: Job[];
};

export function JobList({ jobs, ...props }: ListJobsProps) {
  return (
    <SimpleGrid
      {...props}
      mt={props.mt ?? { base: 6, md: 8 }}
      columns={props.columns ?? { base: 1, md: 2, lg: 3 }}
      gap={props.gap ?? 4}
      flexGrow={props.flexGrow ?? 1}
      placeContent={props.placeContent ?? 'center'}
    >
      {jobs.length ? (
        jobs.map((job) => <CardJob key={job.id} {...job} />)
      ) : (
        <Alert
          bg="transparent"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          w="100%"
          aspectRatio={{ base: '1 / 1', md: '3 / 1' }}
          gridColumn="1 / -1"
        >
          <Heading size="2xl" mb="6">
            😞
          </Heading>
          No job is available currently
        </Alert>
      )}
    </SimpleGrid>
  );
}
