import { Container, type ContainerProps, Flex } from '@chakra-ui/react';

export type PageWrapperProps = ContainerProps & {
  children: React.ReactNode;
};

export function PageWrapper({ children, ...props }: PageWrapperProps) {
  return (
    <Container {...props} maxW={'7xl'} py={props.py ?? { base: 4, md: 8 }} flexGrow="1">
      {children}
    </Container>
  );
}
