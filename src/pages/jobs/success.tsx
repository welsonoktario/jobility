import { Flex, Heading, Text, Center, Button } from '@chakra-ui/react';
import { CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '@/components/page-wrapper';
import withTransition from '@/components/with-transition';

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Center height="100vh">
        <Flex backgroundColor={'white'} p={4} borderWidth={1} borderRadius="md" boxShadow="lg"  direction='column' gap={2}>
          <Flex p={4} alignItems='center' gap={5}>
            <CheckCircle2 color='green' size={50}/>
            <Flex direction='column'>
              <Heading size="lg" mb={2}>Submit information success</Heading>
              <Text>Your information has been successfully submitted.</Text>
            </Flex>
          </Flex>
          <Button colorScheme='blue' onClick={(e) => {
                navigate('/jobs');
              }}>Back to job search</Button>
        </Flex>
      </Center>
    </PageWrapper>
  );
}

export default withTransition(SuccessPage);