import { formatRupiah, relativeDateTime } from '@/lib';
import { Job } from '@/types';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export type CardJobProps = Job;

export function CardJob(props: CardJobProps) {
  return (
    <Card>
      <CardBody>
        <Box>
          <Heading size="md" mb="1">
            {props.title}
          </Heading>
          <Link as={RouterLink} to="/company/1" color="blue" isExternal>
            {`🏢 ${props.company.name}`}
          </Link>
        </Box>

        <Stack mt="6" rowGap="0">
          <Text>{`🕔&nbsp;&nbsp;&nbsp;${props.system}`}</Text>
          <Text>{`📍&nbsp;&nbsp;&nbsp;${props.location}`}</Text>
          <Text>{`💲&nbsp;&nbsp;&nbsp;${
            props.salary ? formatRupiah(props.salary) : 'Hidden'
          }`}</Text>
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
