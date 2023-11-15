import { useEffect, useState } from 'react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

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
  Input,
  Link,
  Spinner,
  Text,
} from '@chakra-ui/react';

import { User } from '@/types';

import { $post } from '@/lib/helpers';

import { useAuth } from '@/components/hooks';
import { PageWrapper } from '@/components/page-wrapper';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { user, isLoading, register } = useAuth();
  const [error, setError] = useState('');

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await register(fullname, email, password);
    } catch (e: any) {
      setError(e.message);
    }
  }

  return (
    <PageWrapper display="flex" alignItems="center" justifyContent="center">
      <Card rounded="3xl" w={{ base: 'full', md: 'lg' }}>
        <CardHeader>
          <Heading size="md" textAlign="center">
            Create an Account
          </Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                autoCapitalize="false"
                autoComplete="name"
                placeholder="Full name  "
                isRequired
              />
            </FormControl>

            <FormControl mt="4">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoCapitalize="false"
                autoComplete="email"
                placeholder="Email"
                isRequired
              />
            </FormControl>

            <FormControl mt="4">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoCapitalize="false"
                autoComplete="current-password"
                placeholder="Password"
                isRequired
              />
            </FormControl>

            <Button
              type="submit"
              mt="8"
              w="full"
              variant="solid"
              alignItems="center"
              columnGap="2"
              colorScheme="blue"
              isDisabled={isLoading}
            >
              {isLoading ? <Spinner /> : null}
              Register
            </Button>
          </form>

          <Flex w="full" alignItems="center" columnGap="4" my="8">
            <Divider />
            <Text>or</Text>
            <Divider />
          </Flex>

          <Box textAlign="center">
            <Link as={ReactRouterLink} color="blue" to="/auth/login">
              Login to Jobility
            </Link>
          </Box>
        </CardBody>
      </Card>
    </PageWrapper>
  );
}
