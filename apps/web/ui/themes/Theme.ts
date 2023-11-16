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
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: themeMode === ThemeMode.Dark ? '#1A2027' : '#fff'
                    }
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: themeMode === ThemeMode.Dark ? '#121212' : '#626464'
                    }
                }
            }
        }
    });
};
