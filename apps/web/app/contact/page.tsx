import React from 'react';
import {Container, Paper} from '@mui/material';
import {Metadata} from 'next';
import {headers} from 'next/headers';
import ContactForm from '../../components/ContactForm/ContactForm';
import {SubHeader} from '../../ui/page-elements/subheader/SubHeader';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Connect with Salient Technology Consulting today to discover how we can best support and assist you.'
};

export default function Contact() {
    const headersList = headers();
    const hostname = headersList.get('host') ?? 'salienttechconsulting.com';

    const headerText = 'Contact Us';
    const headerSubText = 'Connect with us today';

    return (
        <>
            <SubHeader headerText={headerText} headerSubText={headerSubText} />
            <Container maxWidth='md'>
                <Paper sx={{px: 2, py: 2, mb: 4, mt: 6}} elevation={5}>
                    <ContactForm hostname={hostname} />
                </Paper>
            </Container>
        </>
    );
}
