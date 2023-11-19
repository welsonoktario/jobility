import { useEffect, useState } from 'react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  Collapse,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Link,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { LogInIcon } from 'lucide-react';

import { useAuth } from '@/components/hooks';
import { PageWrapper } from '@/components/page-wrapper';
import withTransition from '@/components/with-transition';

function LoginPage() {
  const navigate = useNavigate();
  const { user, login, isLoading, setIsLoading } = useAuth();

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.checkValidity();

    try {
      await login(email, password);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <PageWrapper display="flex" alignItems="center" justifyContent="center">
      <Box w={{ base: 'full', md: 'lg' }} m="auto" mt={[0, 32]}>
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
        <Card rounded="3xl">
          <CardHeader>
            <Heading size="md" textAlign="center">
              Login to Jobility
            </Heading>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  autoCapitalize="false"
                  autoComplete="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isRequired
                />
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  autoCapitalize="false"
                  autoComplete="current-password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isRequired
                />
              </FormControl>

              <Button
                mt="8"
                w="full"
                variant="solid"
                alignItems="center"
                columnGap="2"
                colorScheme="blue"
                type="submit"
                isDisabled={isLoading}
              >
                {isLoading ? (
                  <Spinner />
                ) : (
                  <Icon>
                    <LogInIcon />
                  </Icon>
                )}
                Login
              </Button>
            </form>

            <Flex w="full" alignItems="center" columnGap="4" my="8">
              <Divider />
              <Text>or</Text>
              <Divider />
            </Flex>

            <Box textAlign="center">
              <Link as={ReactRouterLink} color="blue" to="/auth/register">
                Create an account
              </Link>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </PageWrapper>
  );
}

export default withTransition(LoginPage);
