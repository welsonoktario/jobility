import { educationalAttainment } from '@/types/education';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
  Text,
  Textarea,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';

import { DatePicker, DatePickerChange } from '@/components/date-picker';
import { PageWrapper } from '@/components/page-wrapper';

type MonthYearDateType = {
  month?: number;
  year?: number;
};

type FullDateType = {
  day?: number;
} & MonthYearDateType;

type PersonalInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: {
    code: string;
    number: string;
  };
  birthday: FullDateType;
};

type Education = {
  educationalAttainment: string;
  schoolName: string;
  startDate: MonthYearDateType;
  endDate: MonthYearDateType;
  accomplishment: string;
};

type WorkExperience = {
  jobTitle: string;
  jobLevel: string;
  companyName: string;
  location: string;
  startDate: MonthYearDateType;
  endDate: MonthYearDateType;
  accomplishment: string;
};

export default function ApplicationsPage() {
  // State variables
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: {
      code: '62',
      number: '',
    },
    birthday: {
      day: 0,
      month: 0,
      year: 0,
    },
  });

  const [eduInfo, setEduInfo] = useState<Education>({
    educationalAttainment: '',
    schoolName: '',
    startDate: {
      month: 0,
      year: 0,
    },
    endDate: {
      month: 0,
      year: 0,
    },
    accomplishment: '',
  });

  const [workExpInfo, setWorkExpInfo] = useState<WorkExperience>({
    jobTitle: '',
    jobLevel: '',
    companyName: '',
    location: '',
    startDate: {
      month: 0,
      year: 0,
    },
    endDate: {
      month: 0,
      year: 0,
    },
    accomplishment: '',
  });

  // Function Validate
  // if (l)

  // Breakpoint variables
  const breakpoints = useBreakpointValue({
    base: {
      templateColumns: '1fr',
      maxW: 400,
    },
    md: {
      templateColumns: '0.6fr 0.4fr',
      maxW: 800,
    },
  });

  const handleBirthdayChange = (date: DatePickerChange) => {
    setPersonalInfo({
      ...personalInfo,
      birthday: {
        day: date.day,
        month: date.month?.value,
        year: date.year,
      },
    });
  };

  const handleEducationStartChange = (date: DatePickerChange) => {
    setEduInfo({
      ...eduInfo,
      startDate: {
        month: date.month?.value,
        year: date.year,
      },
    });
  };

  const handleEducationEndChange = (date: DatePickerChange) => {
    setEduInfo({
      ...eduInfo,
      endDate: {
        month: date.month?.value,
        year: date.year,
      },
    });
  };

  const handleWorkStartChange = (date: DatePickerChange) => {
    setWorkExpInfo({
      ...workExpInfo,
      startDate: {
        month: date.month?.value,
        year: date.year,
      },
    });
  };

  const handleWorkEndChange = (date: DatePickerChange) => {
    setWorkExpInfo({
      ...workExpInfo,
      endDate: {
        month: date.month?.value,
        year: date.year,
      },
    });
  };

  return (
    <PageWrapper>
      {/* TODO Create the form*/}
      <form
        onSubmit={() => {
          console.log('test');
        }}
      >
        <Grid
          templateColumns={breakpoints?.templateColumns}
          gap={18}
          maxW={breakpoints?.maxW}
          mx="auto"
        >
          {/* First Column */}
          <Flex direction="column" gap={18}>
            <Flex
              backgroundColor="white"
              direction="column"
              p={22}
              border="1px"
              borderColor="gray.200"
              borderRadius="lg"
              boxShadow="md"
            >
              <Text fontSize="md" fontWeight="bold" mb={18}>
                Personal Information
              </Text>
              <Flex direction="column" gap={18}>
                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel fontWeight="normal">First Name</FormLabel>
                  <Input
                    type="text"
                    value={personalInfo.firstName}
                    placeholder="First Name"
                    onChange={(e) => {
                      setPersonalInfo({ ...personalInfo, firstName: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel fontWeight="normal">Last Name</FormLabel>
                  <Input
                    type="text"
                    value={personalInfo.lastName}
                    placeholder="Last Name"
                    onChange={(e) => {
                      setPersonalInfo({ ...personalInfo, lastName: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel fontWeight="normal">Email</FormLabel>
                  <Input
                    type="email"
                    value={personalInfo.email}
                    placeholder="Email"
                    onChange={(e) => {
                      setPersonalInfo({ ...personalInfo, email: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel fontWeight="normal">Phone Number</FormLabel>
                  <Flex direction="row" alignItems="center" gap={2}>
                    <Flex
                      h="100%"
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="md"
                      px={4}
                      align="center"
                    >
                      +62
                    </Flex>
                    <Input
                      type="number"
                      value={personalInfo.phoneNumber.number}
                      placeholder="Phone Number"
                      onChange={(e) => {
                        setPersonalInfo({
                          ...personalInfo,
                          phoneNumber: { ...personalInfo.phoneNumber, number: e.target.value },
                        });
                      }}
                    />
                  </Flex>
                </FormControl>
                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel fontWeight="normal">Birthday</FormLabel>
                  <DatePicker
                    day={personalInfo.birthday.day}
                    month={personalInfo.birthday.month}
                    year={personalInfo.birthday.year}
                    onChange={handleBirthdayChange}
                  />
                </FormControl>
              </Flex>
            </Flex>
            <Flex
              backgroundColor="white"
              direction="column"
              p={22}
              border="1px"
              borderColor="gray.200"
              borderRadius="lg"
              boxShadow="md"
            >
              <Text fontSize="md" fontWeight="bold" mb={18}>
                Education
              </Text>
              <Flex direction="column" gap={18}>
                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel fontWeight="normal">Educational Attainment</FormLabel>
                  <Select placeholder="Select an attainment">
                    {educationalAttainment.map((education, idx) => (
                      <option key={idx} value={education}>
                        {education}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel fontWeight="normal">School/University</FormLabel>
                  <Input placeholder="School or University" />
                </FormControl>
                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel fontWeight="normal">Start Date</FormLabel>
                  <DatePicker
                    variant="monthYear"
                    month={eduInfo.startDate.month}
                    year={eduInfo.startDate.year}
                    onChange={handleEducationStartChange}
                  />
                </FormControl>
                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel fontWeight="normal">End Date</FormLabel>
                  <DatePicker
                    variant="monthYear"
                    month={eduInfo.endDate.month}
                    year={eduInfo.endDate.year}
                    onChange={handleEducationEndChange}
                  />
                </FormControl>
                <FormControl display="flex" flexDirection="column">
                  <FormLabel fontWeight="normal">Accomplishment</FormLabel>
                  <Textarea placeholder="Here is a sample placeholder" />
                </FormControl>
              </Flex>
            </Flex>
            <Flex
              backgroundColor="white"
              direction="column"
              p={22}
              border="1px"
              borderColor="gray.200"
              borderRadius="lg"
              boxShadow="md"
            >
              <Text fontSize="md" fontWeight="bold" mb={18}>
                Work Experience
              </Text>
              <Flex direction="column" gap={18}>
                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel fontWeight="normal">Job Title</FormLabel>
                  <Input placeholder="Job Title" />
                </FormControl>
                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel fontWeight="normal">Job Level</FormLabel>
                  <Input placeholder="Job Level" />
                </FormControl>
                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel fontWeight="normal">Company</FormLabel>
                  <Input placeholder="Company" />
                </FormControl>
                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel fontWeight="normal">Location</FormLabel>
                  <Input placeholder="Location" />
                </FormControl>
                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel fontWeight="normal">Start Date</FormLabel>
                  <DatePicker
                    variant="monthYear"
                    month={workExpInfo.startDate.month}
                    year={workExpInfo.startDate.year}
                    onChange={handleWorkStartChange}
                  />
                </FormControl>
                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel fontWeight="normal">End Date</FormLabel>
                  <DatePicker
                    variant="monthYear"
                    month={workExpInfo.endDate.month}
                    year={workExpInfo.endDate.year}
                    onChange={handleWorkEndChange}
                  />
                </FormControl>
                <FormControl display="flex" flexDirection="column">
                  <FormLabel fontWeight="normal">Accomplishment</FormLabel>
                  <Textarea placeholder="Here is a sample placeholder" />
                </FormControl>
              </Flex>
            </Flex>
            <Flex
              backgroundColor="white"
              direction="column"
              p={22}
              border="1px"
              borderColor="gray.200"
              borderRadius="lg"
              boxShadow="md"
              gap={18}
            >
              <Text fontSize="md" fontWeight="bold">
                Resume
              </Text>
              <Text>
                Please upload your resume in either{' '}
                <Text as="span" fontWeight="bold">
                  DOC
                </Text>
                ,{' '}
                <Text as="span" fontWeight="bold">
                  DOCX
                </Text>
                , or{' '}
                <Text as="span" fontWeight="bold">
                  PDF
                </Text>{' '}
                format. Maximum file size:{' '}
                <Text as="span" fontWeight="bold">
                  10MB
                </Text>
                .
              </Text>
              <Button mx="auto" width={100} colorScheme="blue">
                Upload
              </Button>
            </Flex>
          </Flex>
          {/* Second Column */}
          <Flex direction="column" gap={18}>
            <Flex
              backgroundColor="white"
              direction="column"
              p={22}
              border="1px"
              borderColor="gray.200"
              borderRadius="lg"
              boxShadow="md"
              gap={18}
            >
              <Text>
                <Text as="span" fontWeight="bold">
                  Attention
                </Text>
                : Prior to submitting your profile, please ensure that all information provided is
                accurate and correct. Any inaccuracies may impact the evaluation process.
              </Text>
              <Button type="submit" colorScheme="blue">
                Submit your profile
              </Button>
            </Flex>
          </Flex>
        </Grid>
      </form>
    </PageWrapper>
  );
}
