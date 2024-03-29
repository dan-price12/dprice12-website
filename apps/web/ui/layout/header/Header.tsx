import React from 'react';
import {Brightness3, LightMode} from '@mui/icons-material';
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
import {ThemeMode} from '../../enum/ThemeMode';
import {IPageNavigation} from '../interfaces/IPageNavigation';
import {Logo, LogoSize} from '../logo/Logo';

type HeaderProps = {
    headerText: string;
    abbreviatedHeaderText: string;
    homePage: IPageNavigation;
    pages: IPageNavigation[];
    themeMode: ThemeMode;
    onThemeModeClick: () => void;
};

export const Header = (props: HeaderProps) => {
    const {headerText, abbreviatedHeaderText, homePage, pages, themeMode, onThemeModeClick} = props;

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handlePageNavigationClick = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position='static' data-cy='app-bar-header'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <HeaderLogo homePage={homePage} />
                    <HeaderText headerText={headerText} abbreviatedHeaderText={abbreviatedHeaderText} homePage={homePage} />
                    <NavigationMenu
                        anchorElNav={anchorElNav}
                        pages={pages}
                        handleOpenNavMenu={handleOpenNavMenu}
                        handleCloseNavMenu={handleCloseNavMenu}
                        handlePageNavigationClick={handlePageNavigationClick}
                    />
                    <ThemeModeIcon themeMode={themeMode} onThemeModeClick={onThemeModeClick} />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

type HeaderLogoProps = {
    homePage: IPageNavigation;
};

function HeaderLogo(props: HeaderLogoProps) {
    const {homePage} = props;

    return (
        <Box sx={{mr: 2}}>
            <Link href={homePage.page} aria-label='Home' data-cy='link-header-logo'>
                <Logo size={LogoSize.Icon} />
            </Link>
        </Box>
    );
}

type HeaderTextProps = {
    headerText: string;
    abbreviatedHeaderText: string;
    homePage: IPageNavigation;
};

function HeaderText(props: HeaderTextProps) {
    const {headerText, abbreviatedHeaderText, homePage} = props;

    return (
        <>
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
                    justifyContent: 'left'
                }}
            >
                <Link
                    href={homePage.page}
                    style={{textDecoration: 'inherit', color: 'inherit'}}
                    data-cy='link-header-xs-abbreviatedHeaderText'
                >
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
                    justifyContent: 'left'
                }}
            >
                <Link href={homePage.page} style={{textDecoration: 'inherit', color: 'inherit'}} data-cy='link-header-sm-headerText'>
                    {headerText}
                </Link>
            </Typography>
        </>
    );
}

type NavigationMenuProps = {
    anchorElNav: HTMLElement | null;
    pages: IPageNavigation[];
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: () => void;
    handlePageNavigationClick: () => void;
};

function NavigationMenu(props: NavigationMenuProps) {
    const {anchorElNav, pages, handleOpenNavMenu, handleCloseNavMenu, handlePageNavigationClick} = props;

    return (
        <>
            {/* XS screen size */}
            <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                <IconButton
                    size='large'
                    aria-label='main menu'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    onClick={handleOpenNavMenu}
                    color='inherit'
                    data-cy='button-header-xs-menu'
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
                    {pages.map((page, index) => (
                        <MenuItem key={page.page} onClick={handlePageNavigationClick} data-cy={`button-header-xs-menu-item-${index}`}>
                            <Link href={page.page} style={{textDecoration: 'inherit', color: 'inherit'}}>
                                {page.name}
                            </Link>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            {/* MD screen size */}
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'right'}}>
                {pages.map((page, index) => (
                    <Link key={page.page} href={page.page} style={{textDecoration: 'inherit', color: 'inherit'}}>
                        <Button
                            onClick={handlePageNavigationClick}
                            sx={{my: 2, color: 'white', display: 'block'}}
                            data-cy={`button-header-md-menu-item-${index}`}
                        >
                            {page.name}
                        </Button>
                    </Link>
                ))}
            </Box>
        </>
    );
}

type ThemeModeIconProps = {
    themeMode: ThemeMode;
    onThemeModeClick: () => void;
};

function ThemeModeIcon(props: ThemeModeIconProps) {
    const {themeMode, onThemeModeClick} = props;

    return (
        <IconButton
            sx={{ml: 1}}
            onClick={onThemeModeClick}
            color='inherit'
            aria-label={themeMode === ThemeMode.Dark ? 'Light mode' : 'Dark mode'}
            data-cy='button-header-theme-mode'
        >
            {themeMode === ThemeMode.Dark ? <LightMode /> : <Brightness3 />}
        </IconButton>
    );
}
