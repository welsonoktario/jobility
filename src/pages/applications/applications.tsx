import { Container, Select, Grid, GridItem, Flex, SimpleGrid, Text, Input, FormControl, FormLabel, HStack, Button, Textarea, Box, useBreakpointValue } from '@chakra-ui/react'

export default function ApplicationsPage() {
  const breakpoints = useBreakpointValue(
    {
      base: {
        templateColumns: '1fr'
      },
      md: {
        templateColumns: '0.6fr 0.4fr'
      }
    }
  );

  console.log(breakpoints);

  return (
    <Container my={22} mx='auto' maxW={800}>
      <Grid templateColumns={breakpoints?.templateColumns} gap={18} maxW='max-content'>
        {/* First Column */}
        <Flex direction='column' gap={18}>
          <Flex direction='column' p={22} border='1px' borderColor='gray.200'  borderRadius='lg' boxShadow='md'>
            <Text fontSize='md' fontWeight='medium' mb={18}>Personal Information</Text> 
            <form>
              <Flex direction='column' gap={18}>
                <FormControl isRequired>
                  <FormLabel fontWeight='normal'>First Name</FormLabel>
                  <Input placeholder='First Name'/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight='normal'>Last Name</FormLabel>
                  <Input placeholder='Last Name'/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight='normal'>Email</FormLabel>
                  <Input placeholder='Email'/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight='normal'>Phone Number</FormLabel>
                  <Input placeholder='Phone Number'/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight='normal'>Birthday</FormLabel>
                  <HStack>
                    <Select placeholder='Day'></Select>
                    <Select placeholder='Month'></Select>
                    <Select placeholder='Year'></Select>
                  </HStack>
                </FormControl>
                <Button mx='auto' width={100} colorScheme='blue'>Save</Button>
              </Flex>
            </form>
          </Flex>
          <Flex direction='column' p={22} border='1px' borderColor='gray.200'  borderRadius='lg' boxShadow='md'>
            <Text fontSize='md' fontWeight='medium' mb={18}>Education</Text> 
            <form>
              <Flex direction='column' gap={18}>
                <FormControl isRequired>
                  <FormLabel fontWeight='normal'>Educational Attainment</FormLabel>
                  <Select placeholder='Select an attainment'></Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight='normal'>School/University</FormLabel>
                  <Input placeholder='School or University'/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight='normal'>Start Date</FormLabel>
                  <HStack>
                    <Select placeholder='Day'></Select>
                    <Select placeholder='Month'></Select>
                    <Select placeholder='Year'></Select>
                  </HStack>
                </FormControl><FormControl isRequired>
                  <FormLabel fontWeight='normal'>End Date</FormLabel>
                  <HStack>
                    <Select placeholder='Day'></Select>
                    <Select placeholder='Month'></Select>
                    <Select placeholder='Year'></Select>
                  </HStack>
                </FormControl>
                <FormControl>
                  <FormLabel fontWeight='normal'>Accomplishment</FormLabel>
                  <Textarea placeholder='Here is a sample placeholder' />
                </FormControl>
                <Button mx='auto' width={100} colorScheme='blue'>Save</Button>
              </Flex>
            </form>
          </Flex>
          <Flex direction='column' p={22} border='1px' borderColor='gray.200'  borderRadius='lg' boxShadow='md'>
            <Text fontSize='md' fontWeight='medium' mb={18}>Work Experience</Text> 
            <form>
              <Flex direction='column' gap={18}>
                <FormControl isRequired>
                  <FormLabel fontWeight='normal'>Job Title</FormLabel>
                  <Input placeholder='Job Title'/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight='normal'>Job Level</FormLabel>
                  <Input placeholder='Job Level'/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight='normal'>Company</FormLabel>
                  <Input placeholder='Company'/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight='normal'>Location</FormLabel>
                  <Input placeholder='Location'/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight='normal'>Start Date</FormLabel>
                  <HStack>
                    <Select placeholder='Day'></Select>
                    <Select placeholder='Month'></Select>
                    <Select placeholder='Year'></Select>
                  </HStack>
                </FormControl><FormControl isRequired>
                  <FormLabel fontWeight='normal'>End Date</FormLabel>
                  <HStack>
                    <Select placeholder='Day'></Select>
                    <Select placeholder='Month'></Select>
                    <Select placeholder='Year'></Select>
                  </HStack>
                </FormControl>
                <FormControl>
                  <FormLabel fontWeight='normal'>Accomplishment</FormLabel>
                  <Textarea placeholder='Here is a sample placeholder' />
                </FormControl>
                <Button mx='auto' width={100} colorScheme='blue'>Save</Button>
              </Flex>
            </form>
          </Flex>
          <Flex direction='column' p={22} border='1px' borderColor='gray.200'  borderRadius='lg' boxShadow='md' gap={18}>
            <Text fontSize='md' fontWeight='medium'>Resume</Text> 
            <Text>Please upload your resume in either <Text as='span' fontWeight='bold'>DOC</Text>, <Text as='span' fontWeight='bold'>DOCX</Text>, or <Text as='span' fontWeight='bold'>PDF</Text> format. Maximum file size: <Text as='span' fontWeight='bold'>10MB</Text>.</Text>
            <Button mx='auto' width={100} colorScheme='blue'>Upload</Button>
          </Flex>
        </Flex>
        {/* Second Column */}
        <Flex direction='column' gap={18}>
          <Flex direction='column' p={22} border='1px' borderColor='gray.200'  borderRadius='lg' boxShadow='md' gap={18}>
            <Text><Text as='span' fontWeight='bold'>Attention</Text>: Prior to submitting your profile, please ensure that all information provided is accurate and correct. Any inaccuracies may impact the evaluation process.</Text>
            <Button colorScheme='blue'>Submit your profile</Button>
          </Flex>
        </Flex>
      </Grid>
    </Container>
  );
}