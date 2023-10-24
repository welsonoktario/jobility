import { Button, Text } from '@chakra-ui/react';
import { Container } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container>
      <Link to="/jobs">
        <Button variant={'solid'}>Browse Jobs</Button>
      </Link>
      <Text size={'lg'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum soluta fugiat id
        repudiandae, nulla reiciendis ipsum saepe assumenda commodi temporibus ipsa consequatur
        consectetur tempora? Dolore consequatur nulla distinctio laboriosam?
      </Text>
    </Container>
  );
}
