import React from 'react';
import {Container, Paper} from '@mui/material';
import Head from 'next/head';
import ContactForm from '../components/ContactForm/ContactForm';
import {SubHeader} from '../ui/page-elements/subheader/SubHeader';

export default function Contact() {
    const titleText = 'Contact Us';
    const metaDescriptionText = 'Connect with Salient Technology Consulting today to discover how we can best support and assist you.';
    const headerText = 'Contact Us';
    const headerSubText = 'Connect with us today';

    return (
        <>
            <Head>
                <title>{titleText}</title>
                <meta name='description' content={metaDescriptionText} />
            </Head>
            <SubHeader headerText={headerText} headerSubText={headerSubText} />
            <Container maxWidth='md'>
                <Paper sx={{px: 2, py: 2, mb: 4, mt: 6}} elevation={5}>
                    <ContactForm />
                </Paper>
            </Container>
        </>
    );
}
