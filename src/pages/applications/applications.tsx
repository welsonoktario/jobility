import { PageWrapper } from '@/components/page-wrapper';
import { educationalAttainment } from '@/types/education';
import { Container, Select, Grid, GridItem, Flex, SimpleGrid, Text, Input, FormControl, FormLabel, HStack, Button, Textarea, Box, useBreakpointValue } from '@chakra-ui/react'
import { useState, useEffect } from 'react';

export default function ApplicationsPage() {
   // State variables
   const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: {
      code: '62',
      number: ''
    },
    birthday: {
      day: NaN,
      month: NaN,
      year: NaN
    }
  });

  const [eduInfo, setEduInfo] = useState({
    educationalAttainment: '',
    schoolName: '',
    startDate: {
      day: NaN,
      month: NaN,
      year: NaN
    },
    endDate: {
      day: NaN,
      month: NaN,
      year: NaN
    },
    accomplishment: ''
  });

  const [workExpInfo, setWorkExpInfo] = useState({
    jobTitle: '',
    jobLevel: '',
    companyName: '',
    location: '',
    startDate: {
      day: NaN,
      month: NaN,
      year: NaN
    },
    endDate: {
      day: NaN,
      month: NaN,
      year: NaN
    },
    accomplishment: ''
  });


  // Date variables
  const getListOfYears = () => {
    let tempArr = [];
    for (let i = new Date().getFullYear(); i >= new Date().getFullYear() - 64; i -= 1) {
      tempArr.push(i);
    }
    return tempArr;
  }

  const getLastDayOfMonth = (year : number, month : number): number => {
    return new Date(year, month + 1, 0).getDate();
  }

  const arrayOfYear = getListOfYears();

  const arrayOfMonth: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  

  const [ arrayOfDay1, setArrayOfDay1 ] = useState<number[]>([]);
  

  useEffect(() => {
    let tempArray: number[] = [];
    if (arrayOfDay1[arrayOfDay1.length - 1] !== getLastDayOfMonth(personalInfo.birthday.year, personalInfo.birthday.month)) {
      for (let i = 1; i <= getLastDayOfMonth(personalInfo.birthday.year, personalInfo.birthday.month); i++) {
        tempArray.push(i);
      }
      setArrayOfDay1(tempArray);
    }
    
  }, [personalInfo.birthday.year, personalInfo.birthday.month])

  const [ arrayOfDay2, setArrayOfDay2 ] = useState<number[]>([]);

  useEffect(() => {
    let tempArray: number[] = [];
    if (arrayOfDay2[arrayOfDay2.length - 1] !== getLastDayOfMonth(eduInfo.startDate.year, eduInfo.startDate.month)) {
      for (let i = 1; i <= getLastDayOfMonth(eduInfo.startDate.year, eduInfo.startDate.month); i++) {
        tempArray.push(i);
      }
      setArrayOfDay2(tempArray);
    }
    
  }, [eduInfo.startDate.year, eduInfo.startDate.month])

  const [ arrayOfDay3, setArrayOfDay3 ] = useState<number[]>([]);

  useEffect(() => {
    let tempArray: number[] = [];
    if (arrayOfDay3[arrayOfDay3.length - 1] !== getLastDayOfMonth(eduInfo.endDate.year, eduInfo.endDate.month)) {
      for (let i = 1; i <= getLastDayOfMonth(eduInfo.endDate.year, eduInfo.endDate.month); i++) {
        tempArray.push(i);
      }
      setArrayOfDay3(tempArray);
    }
    
  }, [eduInfo.endDate.year, eduInfo.endDate.month])

  const [ arrayOfDay4, setArrayOfDay4 ] = useState<number[]>([]);

  useEffect(() => {
    let tempArray: number[] = [];
    if (arrayOfDay4[arrayOfDay4.length - 1] !== getLastDayOfMonth(workExpInfo.startDate.year, workExpInfo.endDate.month)) {
      for (let i = 1; i <= getLastDayOfMonth(workExpInfo.startDate.year, workExpInfo.startDate.month); i++) {
        tempArray.push(i);
      }
      setArrayOfDay4(tempArray);
    }
    
  }, [workExpInfo.startDate.year, workExpInfo.startDate.month])

  const [ arrayOfDay5, setArrayOfDay5 ] = useState<number[]>([]);

  useEffect(() => {
    let tempArray: number[] = [];
    if (arrayOfDay5[arrayOfDay5.length - 1] !== getLastDayOfMonth(workExpInfo.endDate.year, workExpInfo.endDate.month)) {
      for (let i = 1; i <= getLastDayOfMonth(workExpInfo.endDate.year, workExpInfo.endDate.month); i++) {
        tempArray.push(i);
      }
      setArrayOfDay5(tempArray);
    }
    
  }, [workExpInfo.endDate.year, workExpInfo.endDate.month])
  
  // Function Validate
  // if (l)

  // Breakpoint variables
  const breakpoints = useBreakpointValue(
    {
      base: {
        templateColumns: '1fr',
        maxW: 400
      },
      md: {
        templateColumns: '0.6fr 0.4fr',
        maxW: 800
      }
    }
  );

  return (
    <PageWrapper>
      {/* TODO Create the form*/}
      <form onSubmit={() => {
        console.log('test');
      }}>
        <Grid templateColumns={breakpoints?.templateColumns} gap={18} maxW={breakpoints?.maxW} mx='auto'>
          {/* First Column */}
          <Flex direction='column' gap={18}>
            <Flex backgroundColor='white' direction='column' p={22} border='1px' borderColor='gray.200'  borderRadius='lg' boxShadow='md'>
              <Text fontSize='md' fontWeight='bold' mb={18}>Personal Information</Text>
              <Flex direction='column' gap={18}>
                <FormControl display='flex' flexDirection='column' isRequired>
                  <FormLabel fontWeight='normal'>First Name</FormLabel>
                  <Input 
                    type='text' 
                    value={personalInfo.firstName}
                    placeholder='First Name'
                    onChange={(e) => {
                      setPersonalInfo({ ...personalInfo, firstName: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl display='flex' flexDirection='column' isRequired>
                  <FormLabel fontWeight='normal'>Last Name</FormLabel>
                  <Input 
                    type='text' 
                    value={personalInfo.lastName}
                    placeholder='Last Name'
                    onChange={(e) => {
                      setPersonalInfo({ ...personalInfo, lastName: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl display='flex' flexDirection='column' isRequired>
                  <FormLabel fontWeight='normal'>Email</FormLabel>
                  <Input
                    type='email' 
                    value={personalInfo.email}
                    placeholder='Email'
                    onChange={(e) => {
                      setPersonalInfo({ ...personalInfo, email: e.target.value });
                    }}
                  />
                </FormControl>
                
                <FormControl display='flex' flexDirection='column' isRequired>
                  <FormLabel fontWeight='normal'>Phone Number</FormLabel>
                  <Flex direction='row' alignItems='center' gap={2}>
                    <Flex h='100%' border='1px' borderColor='gray.200'  borderRadius='md' px={4} align='center'>
                      +62
                    </Flex>
                    <Input
                      type='number'
                      value={personalInfo.phoneNumber.number}
                      placeholder='Phone Number'
                      onChange={(e) => {
                        setPersonalInfo({ ...personalInfo, phoneNumber: {...personalInfo.phoneNumber, number: e.target.value} });
                      }}
                    />
                  </Flex>
                </FormControl>
                <FormControl display='flex' flexDirection='column' isRequired>
                  <FormLabel fontWeight='normal'>Birthday</FormLabel>
                  <HStack>
                    <Select 
                      placeholder='Day'
                      value={String(personalInfo.birthday.day)}
                      onChange={(e) => {
                        setPersonalInfo({ ...personalInfo, 
                          birthday: { 
                            ...personalInfo.birthday,
                            day: parseInt(e.target.value)
                        }})
                      }}
                    >
                      {arrayOfDay1.map((day, idx) => (<option key={idx} value={idx}>{day}</option>))}
                    </Select>
                    <Select 
                      placeholder='Month'
                      value={String(personalInfo.birthday.month)}
                      onChange={(e) => {
                        setPersonalInfo({ ...personalInfo, 
                          birthday: { 
                            ...personalInfo.birthday,
                            month: parseInt(e.target.value) 
                        }})
                      }}
                    >
                      {arrayOfMonth.map((month, idx) => (<option key={idx} value={idx}>{month}</option>))}
                    </Select>
                    <Select 
                      placeholder='Year'
                      value={String(personalInfo.birthday.year)}
                      onChange={(e) => { 
                        setPersonalInfo({
                          ...personalInfo, 
                          birthday: {
                            ...personalInfo.birthday,
                            year: parseInt(e.target.value)
                        }})
                      }}
                    >
                      {arrayOfYear.map((year, idx) => (<option key={idx} value={year}>{year}</option>))}
                    </Select>
                  </HStack>
                </FormControl>
              </Flex>
            </Flex>
            <Flex backgroundColor='white' direction='column' p={22} border='1px' borderColor='gray.200'  borderRadius='lg' boxShadow='md'>
              <Text fontSize='md' fontWeight='bold' mb={18}>Education</Text> 
              <Flex direction='column' gap={18}>
                <FormControl display='flex' flexDirection='column' isRequired>
                  <FormLabel fontWeight='normal'>Educational Attainment</FormLabel>
                  <Select placeholder='Select an attainment'>
                    {educationalAttainment.map((education, idx) => (<option key={idx} value={education}>{education}</option>))}
                  </Select>
                </FormControl>
                <FormControl display='flex' flexDirection='column' isRequired>
                  <FormLabel fontWeight='normal'>School/University</FormLabel>
                  <Input placeholder='School or University'/>
                </FormControl>
                <FormControl display='flex' flexDirection='column' isRequired>
                  <FormLabel fontWeight='normal'>Start Date</FormLabel>
                  <HStack>
                  <Select 
                      placeholder='Day'
                      value={String(eduInfo.startDate.day)}
                      onChange={(e) => {
                        setEduInfo({ ...eduInfo, 
                          startDate: { 
                            ...eduInfo.startDate,
                            day: parseInt(e.target.value)
                        }})
                      }}
                    >
                      {arrayOfDay2.map((day, idx) => (<option key={idx} value={idx}>{day}</option>))}
                    </Select>
                    <Select 
                      placeholder='Month'
                      value={String(eduInfo.startDate.month)}
                      onChange={(e) => {
                        setEduInfo({ ...eduInfo, 
                          startDate: { 
                            ...eduInfo.startDate,
                            month: parseInt(e.target.value) 
                        }})
                      }}
                    >
                      {arrayOfMonth.map((month, idx) => (<option key={idx} value={idx}>{month}</option>))}
                    </Select>
                    <Select 
                      placeholder='Year'
                      value={String(eduInfo.startDate.year)}
                      onChange={(e) => { 
                        setEduInfo({
                          ...eduInfo, 
                          startDate: {
                            ...eduInfo.startDate,
                            year: parseInt(e.target.value)
                        }})
                      }}
                    >
                      {arrayOfYear.map((year, idx) => (<option key={idx} value={year}>{year}</option>))}
                    </Select>
                  </HStack>
                </FormControl>
                <FormControl display='flex' flexDirection='column' isRequired>
                  <FormLabel fontWeight='normal'>End Date</FormLabel>
                  <HStack>
                    <Select 
                      placeholder='Day'
                      value={String(eduInfo.endDate.day)}
                      onChange={(e) => {
                        setEduInfo({ ...eduInfo, 
                          endDate: { 
                            ...eduInfo.endDate,
                            day: parseInt(e.target.value)
                        }})
                      }}
                    >
                      {arrayOfDay3.map((day, idx) => (<option key={idx} value={idx}>{day}</option>))}
                    </Select>
                    <Select 
                      placeholder='Month'
                      value={String(eduInfo.endDate.month)}
                      onChange={(e) => {
                        setEduInfo({ ...eduInfo, 
                          endDate: { 
                            ...eduInfo.endDate,
                            month: parseInt(e.target.value) 
                        }})
                      }}
                    >
                      {arrayOfMonth.map((month, idx) => (<option key={idx} value={idx}>{month}</option>))}
                    </Select>
                    <Select 
                      placeholder='Year'
                      value={String(eduInfo.endDate.year)}
                      onChange={(e) => { 
                        setEduInfo({
                          ...eduInfo, 
                          endDate: {
                            ...eduInfo.endDate,
                            year: parseInt(e.target.value)
                        }})
                      }}
                    >
                      {arrayOfYear.map((year, idx) => (<option key={idx} value={year}>{year}</option>))}
                    </Select>
                  </HStack>
                </FormControl>
                <FormControl display='flex' flexDirection='column'>
                  <FormLabel fontWeight='normal'>Accomplishment</FormLabel>
                  <Textarea placeholder='Here is a sample placeholder' />
                </FormControl>
              </Flex>
            </Flex>
            <Flex backgroundColor='white' direction='column' p={22} border='1px' borderColor='gray.200'  borderRadius='lg' boxShadow='md'>
              <Text fontSize='md' fontWeight='bold' mb={18}>Work Experience</Text> 
              <Flex direction='column' gap={18}>
                <FormControl display='flex' flexDirection='column' isRequired>
                  <FormLabel fontWeight='normal'>Job Title</FormLabel>
                  <Input placeholder='Job Title'/>
                </FormControl>
                <FormControl display='flex' flexDirection='column' isRequired>
                  <FormLabel fontWeight='normal'>Job Level</FormLabel>
                  <Input placeholder='Job Level'/>
                </FormControl>
                <FormControl display='flex' flexDirection='column' isRequired>
                  <FormLabel fontWeight='normal'>Company</FormLabel>
                  <Input placeholder='Company'/>
                </FormControl>
                <FormControl display='flex' flexDirection='column' isRequired>
                  <FormLabel fontWeight='normal'>Location</FormLabel>
                  <Input placeholder='Location'/>
                </FormControl>
                <FormControl display='flex' flexDirection='column' isRequired>
                  <FormLabel fontWeight='normal'>Start Date</FormLabel>
                  <HStack>
                  <Select 
                      placeholder='Day'
                      value={String(workExpInfo.startDate.day)}
                      onChange={(e) => {
                        setWorkExpInfo({ ...workExpInfo, 
                          startDate: { 
                            ...workExpInfo.startDate,
                            day: parseInt(e.target.value)
                        }})
                      }}
                    >
                      {arrayOfDay4.map((day, idx) => (<option key={idx} value={idx}>{day}</option>))}
                    </Select>
                    <Select 
                      placeholder='Month'
                      value={String(workExpInfo.startDate.month)}
                      onChange={(e) => {
                        setWorkExpInfo({ ...workExpInfo, 
                          startDate: { 
                            ...workExpInfo.startDate,
                            month: parseInt(e.target.value) 
                        }})
                      }}
                    >
                      {arrayOfMonth.map((month, idx) => (<option key={idx} value={idx}>{month}</option>))}
                    </Select>
                    <Select 
                      placeholder='Year'
                      value={String(workExpInfo.startDate.year)}
                      onChange={(e) => { 
                        setWorkExpInfo({
                          ...workExpInfo, 
                          startDate: {
                            ...workExpInfo.startDate,
                            year: parseInt(e.target.value)
                        }})
                      }}
                    >
                      {arrayOfYear.map((year, idx) => (<option key={idx} value={year}>{year}</option>))}
                    </Select>
                  </HStack>
                </FormControl>
                <FormControl display='flex' flexDirection='column' isRequired>
                  <FormLabel fontWeight='normal'>End Date</FormLabel>
                  <HStack>
                  <Select 
                      placeholder='Day'
                      value={String(workExpInfo.endDate.day)}
                      onChange={(e) => {
                        setWorkExpInfo({ ...workExpInfo, 
                          endDate: { 
                            ...workExpInfo.endDate,
                            day: parseInt(e.target.value)
                        }})
                      }}
                    >
                      {arrayOfDay5.map((day, idx) => (<option key={idx} value={idx}>{day}</option>))}
                    </Select>
                    <Select 
                      placeholder='Month'
                      value={String(workExpInfo.endDate.month)}
                      onChange={(e) => {
                        setWorkExpInfo({ ...workExpInfo, 
                          endDate: { 
                            ...workExpInfo.endDate,
                            month: parseInt(e.target.value) 
                        }})
                      }}
                    >
                      {arrayOfMonth.map((month, idx) => (<option key={idx} value={idx}>{month}</option>))}
                    </Select>
                    <Select 
                      placeholder='Year'
                      value={String(workExpInfo.endDate.year)}
                      onChange={(e) => { 
                        setWorkExpInfo({
                          ...workExpInfo, 
                          endDate: {
                            ...workExpInfo.endDate,
                            year: parseInt(e.target.value)
                        }})
                      }}
                    >
                      {arrayOfYear.map((year, idx) => (<option key={idx} value={year}>{year}</option>))}
                    </Select>
                  </HStack>
                </FormControl>
                <FormControl display='flex' flexDirection='column'>
                  <FormLabel fontWeight='normal'>Accomplishment</FormLabel>
                  <Textarea placeholder='Here is a sample placeholder' />
                </FormControl>
              </Flex>
            </Flex>
            <Flex backgroundColor='white' direction='column' p={22} border='1px' borderColor='gray.200'  borderRadius='lg' boxShadow='md' gap={18}>
              <Text fontSize='md' fontWeight='bold'>Resume</Text> 
              <Text>Please upload your resume in either <Text as='span' fontWeight='bold'>DOC</Text>, <Text as='span' fontWeight='bold'>DOCX</Text>, or <Text as='span' fontWeight='bold'>PDF</Text> format. Maximum file size: <Text as='span' fontWeight='bold'>10MB</Text>.</Text>
              <Button mx='auto' width={100} colorScheme='blue'>Upload</Button>
            </Flex>
          </Flex>
          {/* Second Column */}
          <Flex direction='column' gap={18}>
            <Flex backgroundColor='white' direction='column' p={22} border='1px' borderColor='gray.200'  borderRadius='lg' boxShadow='md' gap={18}>
              <Text><Text as='span' fontWeight='bold'>Attention</Text>: Prior to submitting your profile, please ensure that all information provided is accurate and correct. Any inaccuracies may impact the evaluation process.</Text>
              <Button type='submit' colorScheme='blue'>Submit your profile</Button>
            </Flex>
          </Flex>
        </Grid>
      </form>
     
    </PageWrapper>
  );
}