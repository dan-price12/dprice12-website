import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import {IPageNavigation} from '../interfaces/IPageNavigation';
import {Logo, LogoSize} from '../logo/Logo';

type HeaderProps = {
    headerText: string;
    abbreviatedHeaderText: string;
    homePage: IPageNavigation;
    pages: IPageNavigation[];
};

export const Header = (props: HeaderProps) => {
    const {headerText, abbreviatedHeaderText, homePage, pages} = props;

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handlePageNavigationClick = (_page: string) => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Box sx={{mr: 2}}>
                        <Link href={homePage.page}>
                            <Logo size={LogoSize.Icon} />
                        </Link>
                    </Box>

                    {/* XS screen size */}
                    <Typography
                        variant='h5'
                        noWrap
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', sm: 'none'},
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            whiteSpace: 'normal',
                            textAlign: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Link href={homePage.page} style={{textDecoration: 'inherit', color: 'inherit'}}>
                            {abbreviatedHeaderText}
                        </Link>
                    </Typography>
                    {/* SM screen size */}
                    <Typography
                        variant='h6'
                        noWrap
                        sx={{
                            mr: 2,
                            display: {xs: 'none', sm: 'flex'},
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            whiteSpace: 'normal',
                            textAlign: 'center',
                            justifyContent: 'right'
                        }}
                    >
                        <Link href={homePage.page} style={{textDecoration: 'inherit', color: 'inherit'}}>
                            {headerText}
                        </Link>
                    </Typography>

                    {/* XS screen size */}
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size='large'
                            aria-label='main menu'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'}
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.page} onClick={() => handlePageNavigationClick(page.page)}>
                                    <Link href={page.page} style={{textDecoration: 'inherit', color: 'inherit'}}>
                                        {page.name}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* MD screen size */}
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'right'}}>
                        {pages.map((page) => (
                            <Link key={page.page} href={page.page} style={{textDecoration: 'inherit', color: 'inherit'}}>
                                <Button onClick={() => handlePageNavigationClick(page.page)} sx={{my: 2, color: 'white', display: 'block'}}>
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
