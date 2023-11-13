import { Container, type ContainerProps, Flex, Spinner, Text } from '@chakra-ui/react';

export type PageWrapperProps = ContainerProps & {
  children: React.ReactNode;
  isLoading?: boolean;
};

export function PageWrapper({ children, isLoading, ...props }: PageWrapperProps) {
  return (
    <>
      <Flex
        display={isLoading ? 'flex' : 'none'}
        justify="center"
        align="center"
        direction="column"
        grow="1"
      >
        <Spinner textAlign="center" />
        <Text textAlign="center" mt={4} fontWeight="semibold">
          Loading...
        </Text>
      </Flex>

      <Container
        {...props}
        display={isLoading ? 'none' : 'block'}
        maxW={'7xl'}
        paddingY={'8'}
        flexGrow="1"
      >
        {children}
      </Container>
    </>
  );
}
