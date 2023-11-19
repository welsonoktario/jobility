import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Center, Flex, Heading, Text } from '@chakra-ui/layout';
import { UserIcon } from 'lucide-react';

import { useAuth } from '@/components';
import { PageWrapper } from '@/components/page-wrapper';
import { Icon } from '@chakra-ui/react';


export default function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }

    if (user) {
      const nameArray = user?.fullname.split(' ');

      setPersonalInfo({
        firstName: nameArray[0],
        lastName: nameArray[1],
        email: user.email,
      });
    }
  }, [user]);

  return (
    <PageWrapper>
      <Center>
        <Box backgroundColor="white" p={4} rounded="lg" width={500}>
          <Heading size="md" mb={4}>
            Profile Page
          </Heading>
          <Flex direction="row" height={150} gap={4} alignItems='center' >
            <Box backgroundColor="#3182ce" rounded="full" p={4}>
              <UserIcon color='white' size={100}/>
            </Box>
            <Flex direction="column" gap={4}>
              <Text>
                <Text fontWeight="semibold">First Name:</Text>
                <Text>{personalInfo.firstName}</Text>
              </Text>
              <Text>
                <Text fontWeight="semibold">Last Name:</Text>
                <Text>{personalInfo.lastName}</Text>
              </Text>
              <Text>
                <Text fontWeight="semibold">Email:</Text>
                <Text> {[personalInfo.email]}</Text>
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </PageWrapper>
  );
}
