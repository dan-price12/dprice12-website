import React from 'react';
import '@testing-library/jest-dom';
import {act, fireEvent, render, screen} from '@testing-library/react';
import {ThemeMode} from '../../enum/ThemeMode';
import {Header} from './Header';

describe('Header', () => {
    it('displays all header text and pages with hrefs', async () => {
        const headerText = 'headerText';
        const abbreviatedHeaderText = 'abbreviatedHeaderText';
        const homePage = {name: 'homePageName', page: 'homePagePage'};
        const pages = [
            {name: 'testName1', page: 'testPage1'},
            {name: 'testName2', page: 'testPage2'}
        ];
        const themeMode = ThemeMode.Dark;
        const onThemeModeClickMock = jest.fn().mockImplementation(() => {});

        render(
            <Header
                headerText={headerText}
                abbreviatedHeaderText={abbreviatedHeaderText}
                homePage={homePage}
                pages={pages}
                themeMode={themeMode}
                onThemeModeClick={onThemeModeClickMock}
            />
        );

        screen.getByText(headerText);
        screen.getByText(abbreviatedHeaderText);

        const linkHeaderText = screen.getByRole('link', {name: headerText}) as HTMLAnchorElement;
        const linkAbbreviatedHeaderText = screen.getByRole('link', {name: abbreviatedHeaderText}) as HTMLAnchorElement;

        expect(linkHeaderText.href).toEqual(`http://localhost/${homePage.page}`);
        expect(linkAbbreviatedHeaderText.href).toEqual(`http://localhost/${homePage.page}`);

        // should be a third one for the logo
        const links = screen.getAllByRole('link') as HTMLAnchorElement[];
        expect(links.filter((link) => link.href === `http://localhost/${homePage.page}`).length).toEqual(3);

        // should be 2 to account for screen sizes
        // jest doesn't render css properly for materialui so cannot test visibility
        expect(screen.getAllByText(pages[0].name).length).toEqual(2);
        expect(screen.getAllByText(pages[1].name).length).toEqual(2);

        // next.js uses the same link element reference in multiple places
        const linkPage1 = screen.getByRole('link', {name: pages[0].name}) as HTMLAnchorElement;
        const linkPage2 = screen.getByRole('link', {name: pages[1].name}) as HTMLAnchorElement;

        expect(linkPage1.href).toEqual(`http://localhost/${pages[0].page}`);
        expect(linkPage2.href).toEqual(`http://localhost/${pages[1].page}`);

        screen.getByLabelText('main menu');
        screen.getByLabelText('Light mode');
    });

    it('clicking theme button calls callback', async () => {
        const headerText = 'headerText';
        const abbreviatedHeaderText = 'abbreviatedHeaderText';
        const homePage = {name: 'homePageName', page: 'homePagePage'};
        const pages = [
            {name: 'testName1', page: 'testPage1'},
            {name: 'testName2', page: 'testPage2'}
        ];
        const themeMode = ThemeMode.Dark;
        const onThemeModeClickMock = jest.fn().mockImplementation(() => {});

        render(
            <Header
                headerText={headerText}
                abbreviatedHeaderText={abbreviatedHeaderText}
                homePage={homePage}
                pages={pages}
                themeMode={themeMode}
                onThemeModeClick={onThemeModeClickMock}
            />
        );

        expect(onThemeModeClickMock).not.toHaveBeenCalled();

        await act(() => {
            const lightMode = screen.getByLabelText('Light mode');
            fireEvent.click(lightMode);
        });

        expect(onThemeModeClickMock).toHaveBeenCalled();
    });
});
