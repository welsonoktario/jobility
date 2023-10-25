import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { MenuIcon, MonitorIcon, MoonIcon, SunIcon, TypeIcon, UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useAuth, useScroll, useTheme } from '@/components/hooks';
import { useSidebar } from './hooks/useSidebar';

export default function Header() {
  const { isOpen, onOpen, onClose } = useSidebar();
  const { theme, setTheme, setFontSize } = useTheme();
  const { user } = useAuth();
  const { y } = useScroll();

  const themeMenuIcon = () => {
    if (theme === 'light') {
      return <SunIcon />;
    }

    if (theme === 'dark') {
      return <MoonIcon />;
    }

    return <MonitorIcon />;
  };

  return (
    <Box
      width={'full'}
      position={'sticky'}
      top={0}
      backgroundColor={y > 80 ? 'Background' : 'Background'}
      boxShadow={y > 80 ? 'lg' : 'none'}
      backdropBlur={y > 80 ? 'lg' : 'none'}
      transition={'all'}
      transitionDuration={'250'}
      zIndex={'sticky'}
    >
      <Container py={4} maxW={'7xl'}>
        <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Flex direction={'row'} columnGap={2} alignItems={'center'}>
            <IconButton aria-label="Open side menu" onClick={onOpen} variant={'ghost'} isRound>
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <Heading size={'lg'}>Jobility</Heading>
            </Link>
          </Flex>

          <Flex direction={'row'} columnGap={4} alignItems={'center'}>
            <Menu>
              <MenuButton as={IconButton} variant={'ghost'} icon={themeMenuIcon()} isRound />
              <MenuList>
                <MenuItem onClick={() => setTheme('light')}>Light</MenuItem>
                <MenuItem onClick={() => setTheme('dark')}>Dark</MenuItem>
                <MenuItem onClick={() => setTheme('system')}>System</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={IconButton} variant={'ghost'} icon={<TypeIcon />} isRound />
              <MenuList>
                <MenuItem onClick={() => setFontSize('base')}>Default</MenuItem>
                <MenuItem onClick={() => setFontSize('lg')}>Large</MenuItem>
                <MenuItem onClick={() => setFontSize('xl')}>Extra Large</MenuItem>
              </MenuList>
            </Menu>

            {user ? (
              <IconButton aria-label="Profile" icon={<UserIcon />} colorScheme="blue" isRound />
            ) : (
              <Link to={'/auth/login'}>
                <Button variant={'solid'} colorScheme="blue">
                  Login
                </Button>
              </Link>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
