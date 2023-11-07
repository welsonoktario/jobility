import { User } from '@/types';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
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
import { useEffect, useState } from 'react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

import { $post } from '@/lib/helpers';

import { useAuth } from '@/components/hooks';
import { PageWrapper } from '@/components/page-wrapper';

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, login, isLoading } = useAuth();

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
      setError(e.error);
    }
  }

  return (
    <PageWrapper display="flex" alignItems="center" justifyContent="center">
      <Card rounded="3xl" w={{ base: 'full', md: 'lg' }}>
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
    </PageWrapper>
  );
}
