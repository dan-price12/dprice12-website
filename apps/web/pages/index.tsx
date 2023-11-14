import React, {useMemo} from 'react';
import {ThemeProvider, useMediaQuery} from '@mui/material';
import {ThemeMode} from '../ui/enum/ThemeMode';
import {Header} from '../ui/layout/header/Header';
import {getTheme} from '../ui/themes/Theme';

export default function Web() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const themeMode = useMemo(() => (prefersDarkMode ? ThemeMode.Dark : ThemeMode.Light), [prefersDarkMode]);
    const theme = getTheme(themeMode);

    return (
        <ThemeProvider theme={theme}>
            <Header
                headerText={'Salient Technology Consulting'}
                abbreviatedHeaderText={'STC'}
                pages={[
                    {page: 'services', name: 'Services'},
                    {page: 'about', name: 'About'},
                    {page: 'contact', name: 'Contact'}
                ]}
            />
        </ThemeProvider>
    );
}
