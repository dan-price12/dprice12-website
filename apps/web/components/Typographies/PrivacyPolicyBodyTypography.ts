'use client';

import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

const PrivacyPolicyBodyTypography = styled(Typography)(({theme}) => ({
    ...theme.typography.body2,
    color: 'inherit',
    flexGrow: 1,
    fontWeight: 300,
    justifyContent: 'center',
    textAlign: 'left',
    textDecoration: 'none',
    whiteSpace: 'pre-line'
}));

const PrivacyPolicyBodyHeaderTypography = styled(PrivacyPolicyBodyTypography)(() => ({
    fontWeight: 700
}));

export {PrivacyPolicyBodyTypography, PrivacyPolicyBodyHeaderTypography};
