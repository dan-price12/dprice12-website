import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {IPageNavigation} from '../interfaces/IPageNavigation';

type FooterLinkProps = {
    page: IPageNavigation;
};

const FooterLink = (props: FooterLinkProps) => {
    const {page} = props;

    return (
        <Typography
            variant='caption'
            component='a'
            href={page.page}
            sx={{
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                whiteSpace: 'normal',
                textAlign: 'center',
                justifyContent: 'center'
            }}
        >
            &nbsp;| {page.name}
        </Typography>
    );
};

type FooterProps = {
    footerText: string;
    pages: IPageNavigation[];
};

export const Footer = (props: FooterProps) => {
    const {footerText, pages} = props;

    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        variant='caption'
                        component='div'
                        sx={{
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            whiteSpace: 'normal',
                            textAlign: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {footerText}
                        {pages.map((page) => {
                            return <FooterLink key={page.name} page={page} />;
                        })}
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
