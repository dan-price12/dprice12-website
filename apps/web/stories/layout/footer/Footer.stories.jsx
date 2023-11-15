import React from 'react';
import {Footer} from '../../../ui/layout/footer/Footer';

const Template = (args) => <Footer {...args} />;

export const FooterTemplate = Template.bind({
    footerText: '© 2023 Salient Technology Consulting LLC | All rights reserved.',
    pages: [
        {page: 'privacy-policy', name: 'Privacy Policy'},
        {page: 'sitemap', name: 'Sitemap'}
    ]
});

FooterTemplate.storyName = 'Footer';

FooterTemplate.args = {
    footerText: '© 2023 Salient Technology Consulting LLC | All rights reserved.',
    pages: [
        {page: 'privacy-policy', name: 'Privacy Policy'},
        {page: 'sitemap', name: 'Sitemap'}
    ]
};

export default {
    title: 'Components/Layout/Footer',
    component: Footer,
    argTypes: {
        footerText: '© 2023 Salient Technology Consulting LLC | All rights reserved.',
        pages: [
            {page: 'privacy-policy', name: 'Privacy Policy'},
            {page: 'sitemap', name: 'Sitemap'}
        ]
    }
};
