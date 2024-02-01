import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {Footer} from './Footer';

describe('Footer', () => {
    it('displays all footer text and pages with hrefs', async () => {
        const footerText = 'footerText';
        const pages = [
            {name: 'testName1', page: 'testPage1'},
            {name: 'testName2', page: 'testPage2'}
        ];

        render(<Footer footerText={footerText} pages={pages} />);

        screen.getByText(footerText);
        screen.getByText(`| ${pages[0].name}`);
        screen.getByText(`| ${pages[1].name}`);

        const links = screen.getAllByRole('link') as HTMLAnchorElement[];

        expect(links[0].href).toEqual(`http://localhost/${pages[0].page}`);
        expect(links[1].href).toEqual(`http://localhost/${pages[1].page}`);
    });
});
