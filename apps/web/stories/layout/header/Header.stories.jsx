import React from 'react';
import {Header} from '../../../ui/layout/header/Header';

const Template = (args) => <Header {...args} />;

export const HeaderTemplate = Template.bind({
    headerText: 'Salient Technology Consulting',
    abbreviatedHeaderText: 'STC',
    pages: [
        {page: 'services', name: 'Services'},
        {page: 'about', name: 'About'},
        {page: 'contact', name: 'Contact'}
    ]
});

HeaderTemplate.storyName = 'Header';

HeaderTemplate.args = {
    headerText: 'Salient Technology Consulting',
    abbreviatedHeaderText: 'STC',
    pages: [
        {page: 'services', name: 'Services'},
        {page: 'about', name: 'About'},
        {page: 'contact', name: 'Contact'}
    ]
};

export default {
    title: 'Components/Layout/Header',
    component: Header,
    argTypes: {
        headerText: 'Salient Technology Consulting',
        abbreviatedHeaderText: 'STC',
        pages: [
            {page: 'services', name: 'Services'},
            {page: 'about', name: 'About'},
            {page: 'contact', name: 'Contact'}
        ]
    }
};
