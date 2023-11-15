import {useMemo} from 'react';
import {ThemeProvider, useMediaQuery} from '@mui/material';
import {ThemeMode} from '../ui/enum/ThemeMode';
import {Footer} from '../ui/layout/footer/Footer';
import {Header} from '../ui/layout/header/Header';
import {getTheme} from '../ui/themes/Theme';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
    const {children} = props;

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const themeMode = useMemo(() => (prefersDarkMode ? ThemeMode.Dark : ThemeMode.Light), [prefersDarkMode]);
    const theme = getTheme(themeMode);

    const headerText = 'Salient Technology Consulting';
    const abbreviatedHeaderText = 'STC';
    const homePage = {page: '/', name: 'Home'};
    const headerPages = [
        {page: 'services', name: 'Services'},
        {page: 'about', name: 'About'},
        {page: 'contact', name: 'Contact'}
    ];

    const footerText = '© 2023 Salient Technology Consulting LLC | All rights reserved.';
    const footerPages = [
        {page: 'privacy', name: 'Privacy Policy'},
        {page: 'sitemap', name: 'Sitemap'}
    ];

    return (
        <ThemeProvider theme={theme}>
            <Header headerText={headerText} abbreviatedHeaderText={abbreviatedHeaderText} homePage={homePage} pages={headerPages} />
            {children}
            <Footer footerText={footerText} pages={footerPages} />
        </ThemeProvider>
    );
}
