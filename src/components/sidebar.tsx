import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';

import { useSidebar } from '@/components/hooks';

export function Sidebar() {
  const { isOpen, onOpen, onClose } = useSidebar();

  return (
    <Drawer isOpen={isOpen ?? false} placement="left" onClose={onClose!}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Heading size={'lg'} display={{ md: 'none' }}>
            Jobility
          </Heading>
        </DrawerHeader>

        <DrawerBody>
          <Text>Drawer Content</Text>
        </DrawerBody>

        <DrawerFooter>
          <Text>Footer</Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
