'use client';

import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

export default styled(Typography)(({theme}) => ({
    ...theme.typography.body2,
    color: 'inherit',
    flexGrow: 1,
    fontWeight: 500,
    justifyContent: 'center',
    textAlign: 'left',
    textDecoration: 'none',
    whiteSpace: 'normal'
}));
