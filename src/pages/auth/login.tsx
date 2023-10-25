import { Button } from '@/components';
import { User } from '@/types';
import { Loader2, LogInIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { $post } from '@/lib/helpers';

import { Card, CardTitle } from '@/components/card';
import { useAuth } from '@/components/hooks';
import { FormControl, FormLabel, TextField } from '@/components/inputs';
import { PageWrapper } from '@/components/page-wrapper';

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await $post<User>('/auth/login', {
      email,
      password,
    });

    const { status, data, message } = res;

    setUser(data!);
  }

  return (
    <PageWrapper className="flex h-full flex-col items-center justify-center">
      <Card className="w-full md:w-1/3">
        <div className="card-body">
          <CardTitle className="mx-auto">Login to Jobility</CardTitle>

          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                type="email"
                name="email"
                autoCapitalize="false"
                autoComplete="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>

            <FormControl className="mt-2">
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                type="password"
                name="password"
                autoCapitalize="false"
                autoComplete="current-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>

            <Button className="mt-8 w-full" color="info" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 animate-spin" />
              ) : (
                <LogInIcon className="mr-2" />
              )}
              Login
            </Button>
          </form>

          <div className="divider my-4">or</div>

          <Link className="link mx-auto w-fit text-info" to="/auth/register">
            Create an account
          </Link>
        </div>
      </Card>
    </PageWrapper>
  );
}
