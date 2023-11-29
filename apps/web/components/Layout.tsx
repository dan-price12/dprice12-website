import {useEffect} from 'react';
import {Container, CssBaseline, ThemeProvider, useMediaQuery} from '@mui/material';
import {useAtom} from 'jotai';
import {themeModeAtom} from '../storage/themeModeStorage';
import {ThemeMode} from '../ui/enum/ThemeMode';
import {Footer} from '../ui/layout/footer/Footer';
import {Header} from '../ui/layout/header/Header';
import {getTheme} from '../ui/themes/Theme';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
    const {children} = props;
    const [themeMode, setThemeMode] = useAtom(themeModeAtom);

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(() => {
        setThemeMode(prefersDarkMode ? ThemeMode.Dark : ThemeMode.Light);
    }, [prefersDarkMode, setThemeMode]);

    const theme = getTheme(themeMode);

    const headerText = 'Salient Technology Consulting';
    const abbreviatedHeaderText = 'Salient';
    const homePage = {page: '/', name: 'Home'};
    const headerPages = [
        {page: 'services', name: 'Services'},
        {page: 'about', name: 'About'},
        {page: 'contact', name: 'Contact'}
    ];

    const footerText = '© 2023 Salient Technology Consulting LLC | All rights reserved.';
    const footerPages = [{page: 'privacy', name: 'Privacy Policy'}];

    const handleThemeModeClick = () => {
        setThemeMode(themeMode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header
                headerText={headerText}
                abbreviatedHeaderText={abbreviatedHeaderText}
                homePage={homePage}
                pages={headerPages}
                themeMode={themeMode}
                onThemeModeClick={handleThemeModeClick}
            />
            <Container maxWidth='xl'>{children}</Container>
            <Footer footerText={footerText} pages={footerPages} />
        </ThemeProvider>
    );
}
