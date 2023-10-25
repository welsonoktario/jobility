import { Container, Flex, type ContainerProps } from '@chakra-ui/react';

export type PageWrapperProps = ContainerProps & {
  children: React.ReactNode;
};

export function PageWrapper({ children, ...props }: PageWrapperProps) {
  return (
    <Container {...props} as={Container} maxW={'7xl'} paddingY={'8'} flexGrow="1">
      {children}
    </Container>
  );
}
