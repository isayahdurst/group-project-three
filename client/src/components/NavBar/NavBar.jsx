import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    Heading,
    Text,
    useColorModeValue,
    useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { ImCool, ImCool2 } from 'react-icons/im';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Auth from '../../utils/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({ children }) => {
    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    const { colorMode, toggleColorMode } = useColorMode();

    const links = {
        Dashboard: '/',
        Contacts: '/contacts',
        Profile: '/profile',
        Conversations: '/conversations',
        Support: '/support',
    };

    return (
        <Box
            as='section'
            pb={{ base: '12', md: '24' }}
            minHeight={'100vh'}
            maxHeight={'100vh'}>
            <Box
                as='nav'
                bg='bg-surface'
                boxShadow='sm'
                px={5}
                style={{margin: '0 125px'}}
                mb={{ base: '5', md: '5' }}>
                <Container py={{ base: '4', lg: '5' }}  maxWidth='full'>
                    <HStack spacing='10' justify='space-between' mt={4}>
                        {!isDesktop ? (
                            <Flex justify='center' flex='1'>
                                <Heading>
                                    <span>Lead</span>
                                    <span style={{ color: 'red' }}>Stack</span>
                                </Heading>
                            </Flex>
                        ) : (
                            <Flex justify='space-between' flex='1'>
                                <Link to="/">
                                <Heading style={{ fontSize: '1.8rem' }}>
                                    <span><FontAwesomeIcon style={{ margin: '2px 2px 0 0' }} icon={faCubes} />Lead</span>
                                    <span style={{ color: 'red' }}>Stack</span>
                                </Heading>

                                </Link>
                                {/* TODO: Add a search bar and ensure this menu is only visible when the user is logged in */}
                                <ButtonGroup variant='link' spacing='8' mt={2}>
                                    {[
                                        'Dashboard',
                                        'Contacts',
                                        'Conversations',
                                        'Support',
                                        'Profile',
                                    ].map((item) => (
                                        <Link key={item} to={links[item]}>
                                            <Button>{item}</Button>
                                        </Link>
                                    ))}
                                </ButtonGroup>
                                <HStack spacing='3'>
                                    <IconButton
                                        variant='ghost'
                                        icon={
                                            colorMode === 'light' ? (
                                                <ImCool fontSize='1.25rem' />
                                            ) : (
                                                <ImCool fontSize='1.25rem' />
                                            )
                                        }
                                        aria-label='Open Menu'
                                        onClick={() =>
                                            toggleColorMode(
                                                colorMode === 'light'
                                                    ? 'dark'
                                                    : 'light'
                                            )
                                        }
                                    />
                                    {Auth.loggedIn() ? (
                                        <>
                                            <Button
                                                colorScheme='red'
                                                onClick={logout}>
                                                Logout
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Login />
                                            <Signup />
                                        </>
                                    )}
                                </HStack>
                            </Flex>
                        )}
                        {!isDesktop && (
                            <IconButton
                                variant='ghost'
                                icon={<FiMenu fontSize='1.5rem' />}
                                aria-label='Open Menu'
                            />
                        )}
                    </HStack>
                </Container>
            </Box>
            {children}
        </Box>
    );
};

export default NavBar;