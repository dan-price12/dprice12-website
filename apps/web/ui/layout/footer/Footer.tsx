import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import {IPageNavigation} from '../interfaces/IPageNavigation';

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
                        {pages.map((page, index) => {
                            return <FooterLink key={page.name} page={page} index={index} />;
                        })}
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

type FooterLinkProps = {
    page: IPageNavigation;
    index: number;
};

const FooterLink = (props: FooterLinkProps) => {
    const {page, index} = props;

    return (
        <Typography
            variant='caption'
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
            <Link href={page.page} style={{textDecoration: 'inherit', color: 'inherit'}} data-cy={`link-footer-item-${index}`}>
                {` | ${page.name}`}
            </Link>
        </Typography>
    );
};
