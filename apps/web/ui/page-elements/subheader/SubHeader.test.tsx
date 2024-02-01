import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {SubHeader} from './SubHeader';

describe('SubHeader', () => {
    it('displays all subheader text', async () => {
        const headerText = 'headerText';
        const headerSubText = 'headerSubText';

        render(<SubHeader headerText={headerText} headerSubText={headerSubText} />);

        screen.getByText(headerText);
        screen.getByText(headerSubText);
    });
});
