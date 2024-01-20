import * as React from 'react';
import {Container} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Metadata} from 'next';
import dynamic from 'next/dynamic';
import GridItemPaper from '../../components/GridItemPaper';
import {SubHeader} from '../../ui/page-elements/subheader/SubHeader';

export const metadata: Metadata = {
    title: 'Services',
    description: `Salient Technology Consulting's services include Consulting, Analysis, Software Development, Cloud Solutions, Business Intelligence & Analytics, Automation & DevOps.`
};

export default function Services() {
    const headerText = 'Services';
    const headerSubText = 'Consulting, Analysis, Software Development, Cloud Solutions, BI & Analytics, Automation & DevOps';

    const AllTheData = dynamic(() => import('../../ui/illustrations/undraw/AllTheData'));
    const CloudFiles = dynamic(() => import('../../ui/illustrations/undraw/CloudFiles'));
    const CohortAnalysis = dynamic(() => import('../../ui/illustrations/undraw/CohortAnalysis'));
    const EngineeringTeam = dynamic(() => import('../../ui/illustrations/undraw/EngineeringTeam'));
    const ProductIteration = dynamic(() => import('../../ui/illustrations/undraw/ProductIteration'));
    const Programming = dynamic(() => import('../../ui/illustrations/undraw/Programming'));

    return (
        <>
            <SubHeader headerText={headerText} headerSubText={headerSubText} />
            <Container maxWidth='md'>
                <Box flexGrow={1} overflow='hidden' px={1} pt={1} pb={4}>
                    <Grid container spacing={4} justifyContent={'center'}>
                        <GridItemPaper
                            title='Technology Consulting Services'
                            description={`Transform your business landscape with our comprehensive Technology Consulting Services, designed to empower you in unlocking the full potential of your technology investments. With a meticulous white-glove approach, we deliver expert guidance to help you navigate the dynamic tech landscape, ensuring the selection of optimal solutions tailored to your unique business needs. Aspired to be more than a service provider, our mission is to be your strategic partner. We work hand-in-hand with your team, fostering collaboration and aligning technology initiatives seamlessly with your overarching business goals. Let's redefine success together and propel your business to new heights through strategic technology partnerships!`}
                            icon={<EngineeringTeam />}
                        />
                        <GridItemPaper
                            title='Business and Systems Analysis'
                            description={`With more than a decade of expertise in dissecting intricate business processes and technical systems, we are your ideal ally to unravel and document every facet of your business operations. Our seasoned approach to analysis excels in pinpointing vulnerabilities and bottlenecks, demystifying complex legacy systems, and unveiling avenues for heightened efficiency. With a commitment to streamlining your workflows and optimizing business processes, we stand ready to be your trusted partner in the ongoing journey of enhancing operational efficiency. You can count on us to empower your business with insights and strategies that propel you towards sustained success and operational excellence.`}
                            icon={<CohortAnalysis />}
                        />
                        <GridItemPaper
                            title='Software Development'
                            description={`Leveraging over a decade of expertise in designing and developing enterprise-grade software, we stand as your ideal partner to bring your software vision to life. Using agile methodologies, we iteratively develop custom solutions that not only meet but exceed your specific business requirements, delivering unparalleled value. Whether you're looking to design a robust database from the ground up, design an API or custom integration to unleash the full potential of your existing data, or develop a cutting-edge web application, we are your comprehensive one-stop solution for full-stack software development. Partner with us to embark on a journey of innovation, efficiency, and unparalleled success in the digital realm!`}
                            icon={<Programming />}
                        />
                        <GridItemPaper
                            title='Cloud Solutions'
                            description={`Use our expertise to transform your infrastructure into a streamlined powerhouse while optimizing technology costs with the dynamic potential of modern cloud computing. Whether it's architecting cloud infrastructure, seamlessly migrating existing solutions, or creating cloud-native applications, we've got you covered. While we are certified and specialize in Microsoft Azure, our proficiency extends seamlessly to other public, private, and hybrid cloud environments. Elevate your operations and cost-efficiency by letting us guide your journey into the future of cloud computing.`}
                            icon={<CloudFiles />}
                        />
                        <GridItemPaper
                            title='Business Intelligence and Analytics'
                            description={`Elevate your business understanding and operational clarity with our disciplined approach to business intelligence and analytics. Our comprehensive services extend across the spectrum, modernizing your analytics infrastructure. We will be your trusted partner in delving into your existing data, crafting sophisticated data warehouses, and developing robust data pipelines. Elevate your understanding with insightful data visualizations, meticulously created using cutting-edge solutions like Microsoft PowerBI. With our expertise, we don't just analyze and develop; we architect the foundation for informed decisions, ensuring your data becomes a strategic asset in steering your journey to success.`}
                            icon={<AllTheData />}
                        />
                        <GridItemPaper
                            title='DevOps and Process Automation'
                            description={`Elevate your operations with a resilient DevOps process designed to streamline time-to-market and amplify the pace of value delivery. Let our expertise unleash the unparalleled speed and reliability of automated builds, testing, and deployments, employing state-of-the-art continuous integration and continuous deployment techniques. Achieve consistency in deployments by harnessing the power of Infrastructure as Code techniques. Flourish in a dynamic landscape where speed, reliability, and innovation converge seamlessly.`}
                            icon={<ProductIteration />}
                        />
                    </Grid>
                </Box>
            </Container>
        </>
    );
}
