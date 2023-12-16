import React from 'react';
import {Box, Container, Grid, Paper, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import Head from 'next/head';
import Link from 'next/link';
import GridItemPaper from '../components/GridItemPaper';
import BusinessDecisions from '../ui/illustrations/undraw/BusinessDecisions';
import ConnectedWorld from '../ui/illustrations/undraw/ConnectedWorld';
import {SubHeader} from '../ui/page-elements/subheader/SubHeader';

export default function Home() {
    const titleText = 'Salient Technology Consulting';
    const metaDescriptionText =
        'A full-spectrum technology services provider specializing in custom software and cloud development, data warehousing, and business intelligence.';
    const headerText = 'Technology Consulting & Custom Development';
    const headerSubText = 'Proven expertise to fuel growth through technology';
    const bodyText = `At Salient Technology Consulting, we redefine the landscape of technology services as a full-spectrum provider. We are here to assist during every phase of your journey - from formulating a comprehensive technical strategy, to planning and decision making, and through implementation, deployment, and testing. We transcend the role of a typical service provider, aspiring to be your strategic partner. Our commitment is to stand by you, understanding your unique needs, and contributing strategically to your success. Choose Salient Technology Consulting for a partnership that extends far beyond the ordinary.`;

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
                <Box flexGrow={1} overflow='hidden' px={1} pt={1} pb={4}>
                    <Paper sx={{px: 2, py: 2, mx: 4}} elevation={5}>
                        <BodyTypography>{bodyText}</BodyTypography>
                    </Paper>
                    <Grid container spacing={4} justifyContent={'center'} pt={4}>
                        <GridItemPaper
                            title='Our Approach'
                            description={`We firmly believe that cultivating a long-term relationship founded on trust is the most effective way to deliver unparalleled value to your organization. At the core of our philosophy lies the belief that providing the highest quality solution to a given problem yields maximum long-term value. By prioritizing excellence, we minimize defects and enhance overall resiliency, ensuring our solutions stand the test of time. This commitment to uncompromising quality serves as the bedrock for sustained success, empowering our clients with solutions that consistently exceed expectations and weather the challenges of an ever-evolving landscape. Our commitment to transparency and honesty is a cornerstone of our approach, ensuring that your experience with us is characterized by clarity, trust, and steadfast support throughout every phase of our partnership.`}
                            icon={<ConnectedWorld />}
                        />
                        <GridItemPaper
                            title='Free Consultation'
                            descriptionRaw={
                                <>
                                    {`We invite you to take advantage of a free initial consultation. It's an opportunity for us to understand your unique needs and for you to assess if we are the right match for you. This commitment to an open dialogue ensures that from the start, we're focused on providing value that aligns seamlessly with your goals. `}
                                    <Link href='contact' style={{color: 'inherit'}}>
                                        Contact us
                                    </Link>
                                    {` today to schedule your complimentary consultation and let's explore the possibilities together.`}
                                </>
                            }
                            icon={<BusinessDecisions />}
                        />
                    </Grid>
                </Box>
            </Container>
        </>
    );
}
