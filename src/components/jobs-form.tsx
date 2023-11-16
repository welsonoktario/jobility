import React from 'react';

import { Button, Flex, Heading, Input, Select, Stack, StackProps, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from 'lucide-react';

import { JobCategory } from '@/types';

import { JobFilter } from './job-filter';

const disabilities = [
  { value: '1', label: 'Color Blindness' },
  { value: '2', label: 'Partial Blindness' },
  { value: '3', label: 'Full Blindness' },
  { value: '4', label: 'Dyslexia' },
  { value: '5', label: 'Hearing Loss' },
  { value: '6', label: 'Deafness' },
  { value: '7', label: 'Physical Impairment' },
];
const jobTypes = [
  { value: 'Fulltime', label: 'Full-time' },
  { value: 'Contract', label: 'Contract' },
  { value: 'Internship', label: 'Internship' },
  { value: 'Parttime', label: 'Part-time' },
  { value: 'Temporary', label: 'Temporary' },
  { value: 'FreshGraduate', label: 'Fresh Graduate' },
  { value: 'Subcontract', label: 'Subcontract' },
];
const jobSystems = [
  { value: 'Onsite', label: 'Onsite' },
  { value: 'Remote', label: 'Remote' },
  { value: 'Hybrid', label: 'Hybrid' },
];

type JobsFormProps = StackProps & {
  filters: Record<string, any>;
  jobCategories: JobCategory[];
  onSearch: (e: React.FormEvent<HTMLDivElement>) => void;
  onInputChange: (key: string, value: string) => void;
  onCheckboxChange: (key: string, value: string) => void;
};

export function JobsForm({
  filters = {},
  jobCategories = [],
  onSearch,
  onInputChange,
  onCheckboxChange,
  ...props
}: JobsFormProps) {
  return (
    <Stack
      onSubmit={onSearch}
      position="sticky"
      rounded="2xl"
      zIndex="100"
      shadow="lg"
      bg="white"
      as="form"
      top="20"
      p="6"
    >
      <Heading size="md">👀&nbsp;&nbsp;Find your dream job</Heading>
      <Flex mt="4" gap="4">
        <Input
          variant="filled"
          placeholder="💼  Search job title..."
          onBlur={(e) => onInputChange('query', e.target.value)}
        />
        <Select
          variant="filled"
          placeholder="🌏  Location"
          display={{ base: 'none', md: 'block' }}
          icon={<ChevronDownIcon />}
          onChange={(e) => onInputChange('location', e.target.value)}
        >
          <option>Bandung</option>
          <option>Jakarta</option>
          <option>Surabaya</option>
        </Select>
        <Select
          variant="filled"
          placeholder="📝  Job specialization"
          display={{ base: 'none', md: 'block' }}
          icon={<ChevronDownIcon />}
          onChange={(e) => onInputChange('specialization', e.target.value)}
        >
          {jobCategories.map((category) => (
            <option key={`category__${category.id}`} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
        <Button type="submit" flexShrink="0" colorScheme="blue">
          🔍
          <Text display={{ base: 'none', md: 'inline-block' }} as="span">
            &nbsp;&nbsp;Search
          </Text>
        </Button>
      </Flex>
      <Flex mt="2" columnGap="4" overflowX="auto" w="full">
        <JobFilter
          title="♿ Disabilities"
          filters={filters}
          filterKey="disabilities"
          options={disabilities}
          onCheckboxChange={onCheckboxChange}
        />
        <JobFilter
          title="🤝 Job Types"
          filters={filters}
          filterKey="jobTypes"
          options={jobTypes}
          onCheckboxChange={onCheckboxChange}
        />
        <JobFilter
          title="🌐 Remote"
          filters={filters}
          filterKey="jobSystems"
          options={jobSystems}
          onCheckboxChange={onCheckboxChange}
        />
      </Flex>
    </Stack>
  );
}
