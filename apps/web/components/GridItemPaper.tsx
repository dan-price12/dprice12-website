import React from 'react';
import {Grid, Paper, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

type GridItemPaperProps = {
    title: string;
    description?: string;
    descriptionRaw?: React.ReactNode;
    icon?: React.ReactNode;
};

export default function GridItemPaper(props: GridItemPaperProps) {
    const {title, description, descriptionRaw, icon} = props;

    const StyledPaper = styled(Paper)(({theme}) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: 450,
        color: theme.palette.text.primary,
        height: 550,
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
