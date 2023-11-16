import { Link as RouterLink } from 'react-router-dom';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

import { Job } from '@/types';

import { formatRupiah, relativeDateTime } from '@/lib';

export type CardJobProps = Job;

export function CardJob(props: CardJobProps) {
  return (
    <Card rounded="2xl">
      <CardBody>
        <Flex columnGap="4" align="center">
          <Image
            h="12"
            w="12"
            src={
              props.company.logo ??
              `https://ui-avatars.com/api/?name=${props.company.name.replace(' ', '+')}`
            }
            loading="lazy"
            rounded="lg"
          />
          <Box>
            <Heading size="md" mb="1">
              {props.title}
            </Heading>
            <Link as={RouterLink} to="/company/1" color="blue" isExternal>
              {`🏢 ${props.company.name}`}
            </Link>
          </Box>
        </Flex>

        <Stack mt="6" rowGap="0">
          <Text>
            <span style={{ userSelect: 'none' }}>♿&nbsp;&nbsp;&nbsp;</span>
            {props.disability?.name ?? '-'}
          </Text>
          <Text>
            <span style={{ userSelect: 'none' }}>🕔&nbsp;&nbsp;&nbsp;</span>
            {props.system}
          </Text>
          <Text>
            <span style={{ userSelect: 'none' }}>📍&nbsp;&nbsp;&nbsp;</span>
            {props.location}
          </Text>
          <Text>
            <span style={{ userSelect: 'none' }}>💲&nbsp;&nbsp;&nbsp;</span>
            {props.salary ? formatRupiah(props.salary) : 'Hidden'}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex justifyContent="space-between" alignItems="center" w="100%">
          <Text color="GrayText" fontSize="sm">
            {`Posted ${relativeDateTime(props.datePosted)}`}
          </Text>
          <Flex columnGap="2">
            <Button as={RouterLink} to={`/jobs/${props.id}`}>
              View
            </Button>
            <Button as={RouterLink} to={`/jobs/${props.id}/apply`} colorScheme="blue">
              Apply
            </Button>
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
}
