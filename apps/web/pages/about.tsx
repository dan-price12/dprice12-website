import React from 'react';
import {Container, Paper, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import Head from 'next/head';
import {SubHeader} from '../ui/page-elements/subheader/SubHeader';

export default function About() {
    const titleText = 'About Us';
    const metaDescriptionText = 'Learn more about Salient Technology Consulting.';
    const headerText = 'About Us';
    const headerSubText = 'Full-spectrum technology solutions custom-tailored to your exact business needs';
    const bodyText = `Established in 2023, Salient Technology Consulting stands as the foremost provider of top-tier technology consulting and professional services. Backed by over a decade of expertise in delivering comprehensive, enterprise-scale, full-stack technology solutions to clients worldwide, we pride ourselves on going above and beyond to actualize your vision. At the heart of our mission lies the commitment to deliver exceptionally high-quality technology solutions, empowering our clients to optimize their return on technology investment. We ensure that this optimization is paired with unwavering confidence in the stability and reliability of the solutions we provide. Your success is not just a goal; it's a commitment we uphold, offering cutting-edge technology solutions that blend performance with the utmost dependability. Trust us to not only meet but exceed your expectations, as we navigate the ever-evolving landscape of technology with dedication and precision.`;

    const BodyTypography = styled(Typography)(({theme}) => ({
        ...theme.typography.body2,
        color: 'inherit',
        flexGrow: 1,
        fontWeight: 500,
        justifyContent: 'center',
        textAlign: 'left',
        textDecoration: 'none',
        whiteSpace: 'normal'
    }));

    return (
        <>
            <Head>
                <title>{titleText}</title>
                <meta name='description' content={metaDescriptionText} />
            </Head>
            <SubHeader headerText={headerText} headerSubText={headerSubText} />
            <Container maxWidth='md'>
                <Paper sx={{px: 2, py: 2, mb: 4, mt: 6}} elevation={5}>
                    <BodyTypography>{bodyText}</BodyTypography>
                </Paper>
            </Container>
        </>
    );
}
