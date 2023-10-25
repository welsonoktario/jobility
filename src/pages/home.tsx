import { Button, Container, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container maxW={'7xl'}>
      <Link to="/jobs">
        <Button variant={'solid'}>Browse Jobs</Button>
      </Link>
      <Text fontSize={'6xl'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum soluta fugiat id
        repudiandae, nulla reiciendis ipsum saepe assumenda commodi temporibus ipsa consequatur
        consectetur tempora? Dolore consequatur nulla distinctio laboriosam? Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Repellendus quam porro error mollitia provident illo
        molestias reiciendis perferendis iusto voluptate! Totam maxime expedita sint sunt quae
        exercitationem et earum minus! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Facere et exercitationem culpa nihil commodi inventore accusamus! Labore illum distinctio
        excepturi pariatur delectus atque a optio, quo exercitationem, voluptatem laudantium quos.
      </Text>
    </Container>
  );
}
