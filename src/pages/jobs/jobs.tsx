import { Job } from '@/types';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { $get } from '@/lib/helpers';

import { CardJob } from '@/components/card-job';
import { PageWrapper } from '@/components/page-wrapper';
import { ChevronDownIcon } from 'lucide-react';

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState<Record<string, string>>({});

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const loadData = async () => {
    setIsLoading(true);

    try {
      const filterEmpty = Object.keys(filters).length <= 0;
      const { status, data, message } = await $get<Job[]>(
        filterEmpty ? '/job' : '/job' + new URLSearchParams(filters),
      );

      if (status === 'error') {
        throw new Error(message);
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    loadData();
  }, [filters]);

  return (
    <PageWrapper position={'relative'}>
      {isLoading ? <p>Loading...</p> : null}

      {error ? (
        <Alert status="error" rounded="2xl" mb="4">
          <AlertIcon />
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
      ) : null}

      <Stack
        as="form"
        onSubmit={handleSearch}
        position={{ base: 'absolute', md: 'inherit' }}
        bottom={{ base: 4, md: 'inherit' }}
        insetX={{ base: 4, md: 'inherit' }}
        bg="white"
        rounded="2xl"
        shadow="lg"
        p="6"
      >
        <Heading size="md">🔎 Find your dream job</Heading>
        <Flex flexDirection={{ base: 'column', md: 'row' }} mt="4" gap="4">
          <Input variant="filled" placeholder="Job title, company name" />
          <Select
            display={{ base: 'none', md: 'block' }}
            placeholder="Job specialization"
            variant="filled"
          >
            <option>Administration</option>
            <option>IT</option>
          </Select>
          <Button type="submit" flexShrink="0" colorScheme="blue">
            Search&nbsp;&nbsp;&nbsp;🔍
          </Button>
        </Flex>
        <Box w='100%' overflowX='scroll'>
          <Select placeContent='Disabilties' icon={<ChevronDownIcon />} multiple>
            <option value="tunanetra">Tunanetra</option>
            <option value="tunarungu">Tunarungu</option>
            <option value="tunawicara">Tunawicara</option>
          </Select>
        </Box>
      </Stack>

      <SimpleGrid
        mt={{ base: 0, md: 8 }}
        my={{ base: 'auto', md: 0 }}
        columns={{ base: 1, md: 2, lg: 3 }}
        gap="4"
        flexGrow="1"
        placeContent="center"
      >
        {jobs.length ? (
          jobs.map((job) => <CardJob {...job} />)
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
    </PageWrapper>
  );
}
