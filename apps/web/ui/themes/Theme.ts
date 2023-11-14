import {createTheme} from '@mui/material';
import {ThemeMode} from '../enum/ThemeMode';

export const getTheme = (themeMode: ThemeMode) => {
    return createTheme({
        palette: {
            mode: themeMode
        },
        typography: {
            h5: {
                fontFamily: 'good-times'
            },
            h6: {
                fontFamily: 'good-times'
            }
        }
    });
};
