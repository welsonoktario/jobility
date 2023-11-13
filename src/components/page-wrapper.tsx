import { Container, Flex, Spinner, Text, type ContainerProps } from '@chakra-ui/react';

export type PageWrapperProps = ContainerProps & {
  children: React.ReactNode;
  isLoading?: boolean;
};

export function PageWrapper({ children, isLoading, ...props }: PageWrapperProps) {
  return isLoading ? (
    <Flex justify="center" align="center" grow="1" direction="column">
      <Spinner />
      <Text mt={4} fontWeight="semibold">
        Loading...
      </Text>
    </Flex>
  ) : (
    <Container {...props} maxW={'7xl'} paddingY={'8'} flexGrow="1">
      {children}
    </Container>
  );
}
