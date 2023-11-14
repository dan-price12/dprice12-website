import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';
import '../ui/fonts/fonts.css';
import type {Preview} from '@storybook/react';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {withThemeFromJSXProvider} from '@storybook/addon-themes';
import {getTheme} from '../ui/themes/Theme';
import {ThemeMode} from '../ui/enum/ThemeMode';

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
};

const lightTheme = getTheme(ThemeMode.Light);
const darkTheme = getTheme(ThemeMode.Dark);

const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: lightTheme,
            dark: darkTheme
        },
        defaultTheme: 'light',
        Provider: ThemeProvider,
        GlobalStyles: CssBaseline
    })
];

export default preview;
export {decorators};
