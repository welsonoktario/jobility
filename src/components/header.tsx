import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import clsx from 'clsx';
import { MenuIcon, MonitorIcon, MoonIcon, SunIcon, TypeIcon, UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useAuth, useScroll, useTheme } from '@/components/hooks';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      backgroundColor={y > 80 ? 'Background' : 'transparent'}
      boxShadow={y > 80 ? 'lg' : 'none'}
      backdropBlur={y > 80 ? 'lg' : 'none'}
    >
      <Container py={4} maxW={'6xl'}>
        <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Flex direction={'row'} columnGap={2} alignItems={'center'}>
            <IconButton aria-label="Open side menu" onClick={onOpen} variant={'ghost'} isRound>
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <Heading size={'md'}>Jobility</Heading>
            </Link>
          </Flex>

          <Flex direction={'row'} columnGap={4} alignItems={'center'}>
            <Menu>
              <MenuButton as={Button} variant={'ghost'}>
                {themeMenuIcon()}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setTheme('light')}></MenuItem>
                <MenuItem onClick={() => setTheme('dark')}>Dark</MenuItem>
                <MenuItem onClick={() => setTheme('system')}>System</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button} variant={'ghost'}>
                <TypeIcon />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setFontSize('base')}>Default</MenuItem>
                <MenuItem onClick={() => setFontSize('lg')}>Large</MenuItem>
                <MenuItem onClick={() => setFontSize('xl')}>Extra Large</MenuItem>
              </MenuList>
            </Menu>

            {user ? (
              <Button>
                <UserIcon />
              </Button>
            ) : (
              <Link to={'/auth/login'}>
                <Button variant={'solid'}>Login</Button>
              </Link>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
