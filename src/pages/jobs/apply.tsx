import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
  extendTheme,
  useBreakpointValue,
} from '@chakra-ui/react';
import { resourceLimits } from 'worker_threads';

import { Application, Gender } from '@/types';
import { educationalAttainment } from '@/types/education';

import { useAuth } from '@/components';
import { DatePicker, DatePickerChange } from '@/components/date-picker';
import { PageWrapper } from '@/components/page-wrapper';
import withTransition from '@/components/with-transition';

import { $post } from '@/lib/helpers';


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
  gender: Gender;
  birthday: FullDateType;
  skills: string[];
  linkResume: string;
};

type Education = {
  educationalAttainment: string;
  schoolName: string;
  startDate: MonthYearDateType;
  endDate: MonthYearDateType;
  accomplishment?: string;
};

type WorkExperience = {
  jobTitle: string;
  jobLevel: string;
  companyName: string;
  location: string;
  startDate: MonthYearDateType;
  endDate: MonthYearDateType;
  accomplishment?: string;
};

function JobApplicationPage() {
  // State variables
  const { jobId } = useParams();
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if ((!isLoading && !user)) {
      navigate('/auth/login');
    }

    if (!isLoading && user) {
      const nameArray = user?.fullname.split(' ');

      setPersonalInfo({
        ...personalInfo,
        firstName: nameArray[0],
        lastName: nameArray[nameArray.length - 1],
        email: user.email,
      });
    }
  }, [isLoading, user]);

  const [skillsInputValue, setSkillsInputValue] = useState('');

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: {
      code: '62',
      number: '',
    },
    gender: Gender.Male,
    birthday: {
      day: 0,
      month: 0,
      year: 0,
    },
    skills: [],
    linkResume: '',
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

  type validationStatus = {
    status: boolean;
    errors: string[];
  };

  const validateInputString = (inputName: string, inputValue: string) => {
    let returnValue: validationStatus = {
      status: false,
      errors: [],
    };

    if (inputValue === '') {
      returnValue.errors.push(`${inputName[0].toUpperCase() + inputName.slice(1)} is required.`);
    }

    if (returnValue.errors.length === 0) {
      returnValue.status = !returnValue.status;
    }

    return returnValue;
  };

  const validatePhoneNumber = (value: string) => {
    let returnValue: validationStatus = {
      status: false,
      errors: [],
    };

    if (value === '') {
      returnValue.errors.push('Phone number is required.');
    }

    if (value.length < 10 || value.length > 11) {
      returnValue.errors.push('Invalid phone number.');
    }

    const regex = /^\d+$/;
    if (!regex.test(value)) {
      returnValue.errors.push('Must be in number.');
    }

    if (returnValue.errors.length === 0) {
      returnValue.status = !returnValue.status;
    }

    return returnValue;
  };

  const validateEmail = (value: string) => {
    let returnValue: validationStatus = {
      status: false,
      errors: [],
    };

    if (value === '') {
      returnValue.errors.push('Email is required.');
    }

    const regex = /^[\w.-]+@(gmail\.com|yahoo\.com)$/;
    if (!regex.test(value)) {
      returnValue.errors.push(`It is not a valid email address.`);
    }

    if (returnValue.errors.length === 0) {
      returnValue.status = !returnValue.status;
    }

    return returnValue;
  };

  const validateDate = (dateType: string, date: FullDateType) => {
    let returnValue: validationStatus = {
      status: false,
      errors: [],
    };

    if (date.day! === 0 || date.month! === 0 || date.year! === 0) {
      returnValue.errors.push(`${dateType[0].toUpperCase() + dateType.slice(1)} is required.`);
    }

    if (returnValue.errors.length === 0) {
      returnValue.status = !returnValue.status;
    }

    return returnValue;
  };

  const validateListSkills = (skills: string[]) => {
    let returnValue: validationStatus = {
      status: false,
      errors: [],
    };

    if (skills.length <= 0) {
      returnValue.errors.push('Need atleast one skill.');
    }

    if (returnValue.errors.length === 0) {
      returnValue.status = !returnValue.status;
    }

    return returnValue;
  };

  const postApplication = async (e: any) => {
    e.preventDefault();
    console.log('test');

    console.log(`Bearer ${localStorage.getItem('token')}`);

    const { data, status, message } = await $post<Application>(
      '/application',
      {
        userId: Number(user?.id),
        jobId: Number(jobId),
        status: 'Pending',
        dateApplied: new Date().toISOString(),
      },
      {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    );

    if (status === 'fail') {
      // throw new Error(message);
      alert('Failed to post an app.');

    }

    if (status === 'ok') {
      navigate('/jobs/apply/success');
    }
  }

  return (
    <PageWrapper>
      {!isLoading && (
        <form
          onSubmit={postApplication}
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
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={!validateInputString('first name', personalInfo.firstName).status}
                    isRequired
                  >
                    <FormLabel fontWeight="normal">First Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="First Name"
                      defaultValue={personalInfo.firstName}
                      onBlur={(e) => {
                        setPersonalInfo({ ...personalInfo, firstName: e.target.value });
                      }}
                    />
                    {!validateInputString('first name', personalInfo.firstName).status && (
                      <FormErrorMessage>
                        {validateInputString('first name', personalInfo.firstName).errors[0]}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={!validateInputString('last name', personalInfo.lastName).status}
                    isRequired
                  >
                    <FormLabel fontWeight="normal">Last Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      defaultValue={personalInfo.lastName}
                      onBlur={(e) => {
                        setPersonalInfo({ ...personalInfo, lastName: e.target.value });
                      }}
                    />
                    {!validateInputString('last name', personalInfo.lastName).status && (
                      <FormErrorMessage>
                        {validateInputString('last name', personalInfo.lastName).errors[0]}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={!validateEmail(personalInfo.email).status}
                    isRequired
                  >
                    <FormLabel fontWeight="normal">Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="Email"
                      defaultValue={personalInfo.email}
                      onBlur={(e) => {
                        setPersonalInfo({ ...personalInfo, email: e.target.value });
                      }}
                    />
                    {!validateEmail(personalInfo.email).status && (
                      <FormErrorMessage>
                        {validateEmail(personalInfo.email).errors[0]}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={!validatePhoneNumber(personalInfo.phoneNumber?.number).status}
                    isRequired
                  >
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
                        type="text"
                        placeholder="Phone Number"
                        defaultValue={personalInfo.phoneNumber?.number}
                        maxLength={11}
                        onBlur={(e) => {
                          setPersonalInfo({
                            ...personalInfo,
                            phoneNumber: { code: '+62', number: e.target.value },
                          });
                        }}
                      />
                    </Flex>
                    {!validatePhoneNumber(personalInfo.phoneNumber?.number).status && (
                      <FormErrorMessage>
                        {validatePhoneNumber(personalInfo.phoneNumber?.number).errors[0]}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={!validateInputString('gender', personalInfo.gender).status}
                    isRequired
                  >
                    <FormLabel fontWeight="normal">Gender</FormLabel>
                    <RadioGroup
                      value={personalInfo.gender}
                      onChange={(newValue: Gender) => {
                        setPersonalInfo({ ...personalInfo, gender: newValue });
                      }}
                    >
                      <Stack direction="row">
                        <Radio value={Gender.Male}>{Gender.Male}</Radio>
                        <Radio value={Gender.Female}>{Gender.Female}</Radio>
                      </Stack>
                    </RadioGroup>
                    {!validateInputString('first name', personalInfo.firstName).status && (
                      <FormErrorMessage>
                        {validateInputString('first name', personalInfo.firstName).errors[0]}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={
                      !validateDate('birthday', {
                        day: personalInfo.birthday?.day,
                        month: personalInfo.birthday?.month,
                        year: personalInfo.birthday?.year,
                      }).status
                    }
                    isRequired
                  >
                    <FormLabel fontWeight="normal">Birthday</FormLabel>
                    <DatePicker
                      day={personalInfo.birthday?.day}
                      month={personalInfo.birthday?.month}
                      year={personalInfo.birthday?.year}
                      onChange={handleBirthdayChange}
                    />
                    {!validateDate('birthday', {
                      day: personalInfo.birthday?.day,
                      month: personalInfo.birthday?.month,
                      year: personalInfo.birthday?.year,
                    }).status && (
                      <FormErrorMessage>
                        {
                          validateDate('birthday', {
                            day: personalInfo.birthday?.day,
                            month: personalInfo.birthday?.month,
                            year: personalInfo.birthday?.year,
                          }).errors[0]
                        }
                      </FormErrorMessage>
                    )}
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
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={
                      !validateInputString('educational attainment', eduInfo.educationalAttainment)
                        .status
                    }
                    isRequired
                  >
                    <FormLabel fontWeight="normal">Educational Attainment</FormLabel>
                    <Select
                      value={eduInfo.educationalAttainment}
                      placeholder="Select an attainment"
                      onChange={(e) => {
                        setEduInfo({ ...eduInfo, educationalAttainment: e.target.value });
                      }}
                    >
                      {educationalAttainment.map((education, idx) => (
                        <option key={idx} value={education}>
                          {education}
                        </option>
                      ))}
                    </Select>
                    {!validateInputString('educational attainment', eduInfo.educationalAttainment)
                      .status && (
                      <FormErrorMessage>
                        {
                          validateInputString(
                            'educational attainment',
                            eduInfo.educationalAttainment,
                          ).errors[0]
                        }
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={
                      !validateInputString('school or university name', eduInfo.schoolName).status
                    }
                    isRequired
                  >
                    <FormLabel fontWeight="normal">School/University</FormLabel>
                    <Input
                      type="text"
                      placeholder="School or University"
                      defaultValue={eduInfo.schoolName}
                      onBlur={(e) => {
                        setEduInfo({ ...eduInfo, schoolName: e.target.value });
                      }}
                    />
                    {!validateInputString('school or university name', eduInfo.schoolName)
                      .status && (
                      <FormErrorMessage>
                        {
                          validateInputString('school or university name', eduInfo.schoolName)
                            .errors[0]
                        }
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={
                      !validateDate('start date', {
                        month: eduInfo.startDate.month,
                        year: eduInfo.startDate.year,
                      }).status
                    }
                    isRequired
                  >
                    <FormLabel fontWeight="normal">Start Date</FormLabel>
                    <DatePicker
                      variant="monthYear"
                      month={eduInfo.startDate.month}
                      year={eduInfo.startDate.year}
                      onChange={handleEducationStartChange}
                    />
                    {!validateDate('start date', {
                      month: eduInfo.startDate.month,
                      year: eduInfo.startDate.year,
                    }).status && (
                      <FormErrorMessage>
                        {
                          validateDate('start date', {
                            month: eduInfo.startDate.month,
                            year: eduInfo.startDate.year,
                          }).errors[0]
                        }
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={
                      !validateDate('end date', {
                        month: eduInfo.endDate.month,
                        year: eduInfo.endDate.year,
                      }).status
                    }
                    isRequired
                  >
                    <FormLabel fontWeight="normal">End Date</FormLabel>
                    <DatePicker
                      variant="monthYear"
                      month={eduInfo.endDate.month}
                      year={eduInfo.endDate.year}
                      onChange={handleEducationEndChange}
                    />
                    {!validateDate('end date', {
                      month: eduInfo.endDate.month,
                      year: eduInfo.endDate.year,
                    }).status && (
                      <FormErrorMessage>
                        {
                          validateDate('end date', {
                            month: eduInfo.endDate.month,
                            year: eduInfo.endDate.year,
                          }).errors[0]
                        }
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl display="flex" flexDirection="column">
                    <FormLabel fontWeight="normal">Accomplishment</FormLabel>
                    <Textarea
                      defaultValue={eduInfo.accomplishment}
                      placeholder="Here is a sample placeholder"
                      onBlur={(e) => setEduInfo({ ...eduInfo, accomplishment: e.target.value })}
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
                  Work Experience
                </Text>
                <Flex direction="column" gap={18}>
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={!validateInputString('job title', workExpInfo.jobTitle).status}
                    isRequired
                  >
                    <FormLabel fontWeight="normal">Job Title</FormLabel>
                    <Input
                      defaultValue={workExpInfo.jobTitle}
                      placeholder="Job Title"
                      onBlur={(e) => {
                        setWorkExpInfo({ ...workExpInfo, jobTitle: e.target.value });
                      }}
                    />
                    {!validateInputString('job title', workExpInfo.jobTitle).status && (
                      <FormErrorMessage>
                        {validateInputString('job title', workExpInfo.jobTitle).errors[0]}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={!validateInputString('job title', workExpInfo.jobLevel).status}
                    isRequired
                  >
                    <FormLabel fontWeight="normal">Job Level</FormLabel>
                    <Input
                      defaultValue={workExpInfo.jobLevel}
                      placeholder="Job Level"
                      onBlur={(e) => {
                        setWorkExpInfo({ ...workExpInfo, jobLevel: e.target.value });
                      }}
                    />
                    {!validateInputString('job level', workExpInfo.jobLevel).status && (
                      <FormErrorMessage>
                        {validateInputString('job level', workExpInfo.jobLevel).errors[0]}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={!validateInputString('company name', workExpInfo.companyName).status}
                    isRequired
                  >
                    <FormLabel fontWeight="normal">Company</FormLabel>
                    <Input
                      defaultValue={workExpInfo.companyName}
                      placeholder="Company"
                      onBlur={(e) => {
                        setWorkExpInfo({ ...workExpInfo, companyName: e.target.value });
                      }}
                    />
                    {!validateInputString('company name', workExpInfo.companyName).status && (
                      <FormErrorMessage>
                        {validateInputString('company name', workExpInfo.companyName).errors[0]}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={!validateInputString('location', workExpInfo.location).status}
                    isRequired
                  >
                    <FormLabel fontWeight="normal">Location</FormLabel>
                    <Input
                      defaultValue={workExpInfo.location}
                      placeholder="Location"
                      onBlur={(e) => {
                        setWorkExpInfo({ ...workExpInfo, location: e.target.value });
                      }}
                    />
                    {!validateInputString('location', workExpInfo.location).status && (
                      <FormErrorMessage>
                        {validateInputString('location', workExpInfo.location).errors[0]}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={
                      !validateDate('start date', {
                        month: workExpInfo.startDate.month,
                        year: workExpInfo.startDate.year,
                      }).status
                    }
                    isRequired
                  >
                    <FormLabel fontWeight="normal">Start Date</FormLabel>
                    <DatePicker
                      variant="monthYear"
                      month={workExpInfo.startDate.month}
                      year={workExpInfo.startDate.year}
                      onChange={handleWorkStartChange}
                    />
                    {!validateDate('start date', {
                      month: workExpInfo.startDate.month,
                      year: workExpInfo.startDate.year,
                    }).status && (
                      <FormErrorMessage>
                        {
                          validateDate('start date', {
                            month: workExpInfo.startDate.month,
                            year: workExpInfo.startDate.year,
                          }).errors[0]
                        }
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    isInvalid={
                      !validateDate('end date', {
                        month: workExpInfo.endDate.month,
                        year: workExpInfo.endDate.year,
                      }).status
                    }
                    isRequired
                  >
                    <FormLabel fontWeight="normal">End Date</FormLabel>
                    <DatePicker
                      variant="monthYear"
                      month={workExpInfo.endDate.month}
                      year={workExpInfo.endDate.year}
                      onChange={handleWorkEndChange}
                    />
                    {!validateDate('end date', {
                      month: workExpInfo.endDate.month,
                      year: workExpInfo.endDate.year,
                    }).status && (
                      <FormErrorMessage>
                        {
                          validateDate('end date', {
                            month: workExpInfo.endDate.month,
                            year: workExpInfo.endDate.year,
                          }).errors[0]
                        }
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl display="flex" flexDirection="column">
                    <FormLabel fontWeight="normal">Accomplishment</FormLabel>
                    <Textarea
                      defaultValue={workExpInfo.accomplishment}
                      placeholder="Here is a sample placeholder"
                      onBlur={(e) =>
                        setWorkExpInfo({ ...workExpInfo, accomplishment: e.target.value })
                      }
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
                  Skills
                </Text>
                <Flex direction="column" gap={2}>
                  <Text fontWeight="semibold">Add your new skill:</Text>
                  <FormControl display="flex" flexDirection="column">
                    <Flex direction="row" gap={5}>
                      <Input
                        type="text"
                        placeholder="Skill"
                        defaultValue={skillsInputValue}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            if (validateInputString('skills', skillsInputValue).status) {
                              setPersonalInfo({
                                ...personalInfo,
                                skills: [...personalInfo.skills, skillsInputValue],
                              });
                            }
                          }
                        }}
                        onChange={(e) => {
                          setTimeout(() => {
                            setSkillsInputValue(e.target.value);
                          }, 150);
                        }}
                      ></Input>
                      <Button
                        type="button"
                        colorScheme="blue"
                        isDisabled={!validateInputString('skill', skillsInputValue).status}
                        onClick={(e) => {
                          e.preventDefault();
                          setPersonalInfo({
                            ...personalInfo,
                            skills: [...personalInfo.skills, skillsInputValue],
                          });
                        }}
                      >
                        Add
                      </Button>
                    </Flex>
                  </FormControl>
                  <Text fontWeight="semibold">List of your skills:</Text>
                  {personalInfo.skills.map((skill, idx) => (
                    <Flex
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      key={idx}
                    >
                      <Text>{skill}</Text>
                      <Flex direction="row" gap={2}>
                        <Button
                          type="button"
                          colorScheme="red"
                          onClick={(e) => {
                            personalInfo.skills.splice(idx, 1);
                            setPersonalInfo({ ...personalInfo, skills: [...personalInfo.skills] });
                          }}
                        >
                          Delete
                        </Button>
                      </Flex>
                    </Flex>
                  ))}
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
                <FormControl
                  isInvalid={!validateInputString('resume', personalInfo.linkResume).status}
                  isRequired
                >
                  <FormLabel fontSize="md" fontWeight="bold" mb={18}>
                    Resume
                  </FormLabel>
                  <Text mb={2}>Please put your link to the drive where your resume in.</Text>
                  <Input
                    type="text"
                    defaultValue={personalInfo.linkResume}
                    placeholder="Link to resume"
                    onBlur={(e) => setPersonalInfo({ ...personalInfo, linkResume: e.target.value })}
                  ></Input>
                  {!validateInputString('resume', personalInfo.linkResume).status && (
                    <FormErrorMessage>
                      {validateInputString('resume', personalInfo.linkResume).errors[0]}
                    </FormErrorMessage>
                  )}
                </FormControl>
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
                  Submit your information
                </Button>
              </Flex>
            </Flex>
          </Grid>
        </form>
      )}
    </PageWrapper>
  );
}

export default withTransition(JobApplicationPage);
