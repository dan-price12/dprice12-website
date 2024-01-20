'use client';

import React from 'react';
import {Grid, Paper, Typography, useMediaQuery} from '@mui/material';
import {styled, useTheme} from '@mui/material/styles';

type GridItemPaperProps = {
    title: string;
    description?: string;
    descriptionRaw?: React.ReactNode;
    icon?: React.ReactNode;
};

export default function GridItemPaper(props: GridItemPaperProps) {
    const {title, description, descriptionRaw, icon} = props;

    const currentTheme = useTheme();
    const isMediumOrHigher = useMediaQuery(currentTheme.breakpoints.up('md'));

    const StyledPaper = styled(Paper)(({theme}) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: 450,
        color: theme.palette.text.primary,
        height: isMediumOrHigher ? 555 : 'auto',
        margin: 'auto'
    }));

    const StyledTypography = styled(Typography)(({theme}) => ({
        ...theme.typography.h4,
        fontWeight: 500,
        textAlign: 'center'
    }));

    return (
        <Grid item xs={12} md={6} justifyContent={'center'}>
            <StyledPaper elevation={5}>
                <StyledTypography>{title}</StyledTypography>
                {icon && icon}
                <Typography variant='body2'>{descriptionRaw ?? description}</Typography>
            </StyledPaper>
        </Grid>
    );
}
