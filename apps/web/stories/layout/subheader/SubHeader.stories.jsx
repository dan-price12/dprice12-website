import React from 'react';
import {SubHeader} from '../../../ui/page-elements/subheader/SubHeader';

const Template = (args) => <SubHeader {...args} />;

export const SubHeaderTemplate = Template.bind({
    headerText: 'Services',
    headerSubText: 'We provide many services'
});

SubHeaderTemplate.storyName = 'SubHeader';

SubHeaderTemplate.args = {
    headerText: 'Services',
    headerSubText: 'We provide many services'
};

export default {
    title: 'Components/Layout/SubHeader',
    component: SubHeader,
    argTypes: {
        headerText: 'Services',
        headerSubText: 'We provide many services'
    }
};
