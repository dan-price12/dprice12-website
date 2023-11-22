import React from 'react';
import {Container, Paper} from '@mui/material';
import ContactForm from '../components/ContactForm/ContactForm';
import {SubHeader} from '../ui/page-elements/subheader/SubHeader';

export default function Contact() {
    const headerText = 'Contact Us';
    const headerSubText = 'Connect with us today';

    return (
        <>
            <SubHeader headerText={headerText} headerSubText={headerSubText} />
            <Container maxWidth='md'>
                <Paper sx={{px: 2, py: 2, mb: 4, mt: 6}} elevation={5}>
                    <ContactForm />
                </Paper>
            </Container>
        </>
    );
}
