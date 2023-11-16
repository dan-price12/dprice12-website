import React from 'react';
import {Box, Container, Paper, Typography} from '@mui/material';

export default function Web() {
    const headerText = 'About Us';
    const headerSubText = 'Technology Consulting, Cloud Solutions, Software Development, Business Intelligence and Analytics';
    const bodyText =
        'Founded in 2023, Salient Technology Consulting is the premier provider of technology consulting and professional services. Our primary aim is to deliver exceptionally high-quality technology solutions that enable our clients to maximize their technology return on investment. With more than a decade of experience in delivering enterprise-scale, full-stack technology solutions to clients across the globe, you can count on us to go above and beyond to ensure your vision is fully realized.';

    return (
        <>
            <Box>
                <Typography
                    variant='h3'
                    component='div'
                    sx={{
                        mt: 5,
                        mb: 1,
                        flexGrow: 1,
                        fontWeight: 500,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        whiteSpace: 'normal',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {headerText}
                </Typography>
                <Typography
                    variant='caption'
                    component='div'
                    sx={{
                        mb: 5,
                        flexGrow: 1,
                        fontWeight: 500,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        whiteSpace: 'normal',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {headerSubText}
                </Typography>
            </Box>
            <Container maxWidth='md'>
                <Paper sx={{mx: 5, mb: 3, px: 2, py: 1}} elevation={5}>
                    <Typography
                        variant='body2'
                        component='div'
                        sx={{
                            flexGrow: 1,
                            fontWeight: 500,
                            color: 'inherit',
                            textDecoration: 'none',
                            whiteSpace: 'normal',
                            textAlign: 'left',
                            justifyContent: 'center'
                        }}
                    >
                        {bodyText}
                    </Typography>
                </Paper>
            </Container>
        </>
    );
}
