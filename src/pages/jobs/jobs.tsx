import { useEffect, useState } from 'react';

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  CloseButton,
  Collapse,
  Flex,
  Spinner,
  Text,
} from '@chakra-ui/react';

import { Disability, Job, JobCategory } from '@/types';

import { tryParseNumber } from '@/lib';
import { $get } from '@/lib/helpers';

import { JobList, JobsForm, PageWrapper } from '@/components';

export type PaginatedJobs = {
  data: Job[];
  totalData: number;
  dataPerPage: number;
  currentPage: number;
  totalPages: number;
};

export default function JobsPage() {
  const [categories, setCategories] = useState<JobCategory[]>([]);
  const [jobs, setJobs] = useState<PaginatedJobs | null>();
  const [filters, setFilters] = useState<Record<string, any>>({});

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const loadJobCategories = async () => {
    try {
      const { status, data, message } = await $get<JobCategory[]>('/categories');

      if (status === 'fail') {
        throw new Error(message);
      }

      setCategories(data!);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const loadJobs = async () => {
    setIsLoading(true);

    try {
      const filterEmpty = Object.keys(filters).length <= 0;
      const { data, message } = await $get<PaginatedJobs>(
        filterEmpty ? '/job' : '/job?' + new URLSearchParams(filters),
      );

      if (!data) {
        throw new Error(message);
      }

      setJobs(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleInputChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: tryParseNumber(value) ?? value });
  };

  const handleCheckboxChange = (key: string, value: string) => {
    const values = new Set<string | number>(filters[key] || []);
    values.has(value) ? values.delete(value) : values.add(tryParseNumber(value) ?? value);

    setFilters({ ...filters, [key]: Array.from(values) });
  };

  useEffect(() => {
    loadJobCategories();
  }, []);

  useEffect(() => {
    loadJobs();
  }, [filters]);

  return (
    <PageWrapper py={0}>
      <Collapse in={error !== ''}>
        <Alert status="error" rounded="2xl" my="4">
          ❗
          <Flex columnGap="1" w="100%">
            <AlertTitle>Oops!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Flex>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={() => setError('')}
          />
        </Alert>
      </Collapse>

      <JobsForm
        filters={filters}
        jobCategories={categories}
        onCheckboxChange={handleCheckboxChange}
        onInputChange={handleInputChange}
        onSearch={handleSearch}
      />

      {isLoading ? (
        <Flex mt={{ base: 40, md: 64 }} justify="center" align="center" direction="column" grow="1">
          <Spinner textAlign="center" />
          <Text textAlign="center" mt={4} fontWeight="semibold">
            Loading...
          </Text>
        </Flex>
      ) : (
        <>
          <JobList jobs={jobs?.data ?? []} />

          <Flex justifyContent="center" w="full" mt="8">
            {jobs?.currentPage === jobs?.totalPages ? (
              <Text color="gray.500">All jobs have already been shown</Text>
            ) : (
              <Button colorScheme="blue">Load more jobs</Button>
            )}
          </Flex>
        </>
      )}
    </PageWrapper>
  );
}
