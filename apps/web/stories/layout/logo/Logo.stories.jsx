import React from 'react';
import {Logo, LogoSize} from '../../../ui/layout/logo/Logo';

const Template = (args) => <Logo {...args} />;

export const LogoTemplate = Template.bind({
    size: LogoSize.Icon
});

LogoTemplate.storyName = 'Logo';

LogoTemplate.args = {
    size: LogoSize.Icon
};

export default {
    title: 'Components/Layout/Logo',
    component: Logo,
    argTypes: {
        size: LogoSize.Icon
    }
};
