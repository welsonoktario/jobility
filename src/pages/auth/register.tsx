import { Button } from '@/components';
import { User } from '@/types';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Card, CardTitle } from '@/components/card';
import { useAuth } from '@/components/hooks';
import { PageWrapper } from '@/components/page-wrapper';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

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
    var data = {
      id: 1,
      email,
      fullname,
    } satisfies User;

    setUser(data);
  }

  return (
    <PageWrapper className="flex h-full flex-col items-center justify-center">
      <Card className="w-full md:w-1/3">
        <div className="card-body">
          <CardTitle className="mx-auto">Create an Account</CardTitle>

          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label htmlFor="fullname" className="label">
                Full Name
              </label>
              <input
                className="input bg-base-200 dark:bg-base-300"
                type="text"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                autoCapitalize="false"
                autoComplete="name"
                placeholder="Email"
              />
            </div>

            <div className="form-control mt-2 w-full">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                className="input bg-base-200 dark:bg-base-300"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoCapitalize="false"
                autoComplete="email"
                placeholder="Email"
              />
            </div>

            <div className="form-control mt-2 w-full">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                className="input w-full bg-base-200 dark:bg-base-300"
                type="password"
                name="password"
                autoCapitalize="false"
                autoComplete="current-password"
                placeholder="Password"
              />
            </div>

            <Button className="mt-8 w-full" color="info">
              Register
            </Button>
          </form>

          <div className="divider my-4">or</div>

          <Link className="link mx-auto w-fit text-info" to="/auth/login">
            Login to Jobility
          </Link>
        </div>
      </Card>
    </PageWrapper>
  );
}
