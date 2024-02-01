import React from 'react';
import '@testing-library/jest-dom';
import {act, fireEvent, render, screen} from '@testing-library/react';
import {fetch} from 'whatwg-fetch';
import ContactForm from './ContactForm';

global.fetch = fetch;

describe('ContactForm', () => {
    it('displays all fields', async () => {
        render(<ContactForm hostname='test.com' />);

        screen.getByLabelText('Name *');
        screen.getByLabelText('Company');
        screen.getByLabelText('Email *');
        screen.getByLabelText('Message *');
        screen.getByRole('button', {name: /submit/i});
    });

    it('displays required fields if missing', async () => {
        render(<ContactForm hostname='test.com' />);

        const submitButton = screen.getByRole('button', {name: /submit/i});
        fireEvent.click(submitButton);

        await screen.findByText('Name is required');
        await screen.findByText('Email is required');
        await screen.findByText('Message is required');
    });

    it('displays error if email is not an email', async () => {
        render(<ContactForm hostname='test.com' />);

        const submitButton = screen.getByRole('button', {name: /submit/i});
        fireEvent.click(submitButton);

        const nameTextbox = screen.getByLabelText('Name *');
        const companyTextbox = screen.getByLabelText('Company');
        const emailTextbox = screen.getByLabelText('Email *');
        const messageTextbox = screen.getByLabelText('Message *');

        await act(() => {
            fireEvent.change(nameTextbox, {target: {value: 'Test Name'}});
            fireEvent.change(companyTextbox, {target: {value: 'Test Company'}});
            fireEvent.change(emailTextbox, {target: {value: 'test!test.com'}});
            fireEvent.change(messageTextbox, {target: {value: 'Test Message'}});
        });

        await screen.findByText('Invalid email address');
    });

    it('sends correct data to endpoint', async () => {
        const spy = jest
            .spyOn(global, 'fetch')
            .mockImplementation(jest.fn(() => Promise.resolve({ok: true, json: () => Promise.resolve({})})) as jest.Mock);

        render(<ContactForm hostname='test.com' />);

        const name = 'Test Name';
        const company = 'Test Company';
        const email = 'test@test.com';
        const message = 'Test Message';

        const nameTextbox = screen.getByLabelText('Name *');
        const companyTextbox = screen.getByLabelText('Company');
        const emailTextbox = screen.getByLabelText('Email *');
        const messageTextbox = screen.getByLabelText('Message *');
        const submitButton = screen.getByRole('button', {name: /submit/i});

        await act(() => {
            fireEvent.change(nameTextbox, {target: {value: name}});
            fireEvent.change(companyTextbox, {target: {value: company}});
            fireEvent.change(emailTextbox, {target: {value: email}});
            fireEvent.change(messageTextbox, {target: {value: message}});

            fireEvent.click(submitButton);
        });

        expect(spy).toHaveBeenCalledWith('/api/contact', {
            body: `{"name":"${name}","company":"${company}","email":"${email}","message":"${message}"}`,
            headers: {'Content-Type': 'application/json'},
            method: 'POST'
        });
    });

    it('displays loading icon', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(
            jest.fn(async () => {
                await new Promise((r) => setTimeout(r, 500));
            }) as jest.Mock
        );

        render(<ContactForm hostname='test.com' />);

        const nameTextbox = screen.getByLabelText('Name *');
        const companyTextbox = screen.getByLabelText('Company');
        const emailTextbox = screen.getByLabelText('Email *');
        const messageTextbox = screen.getByLabelText('Message *');
        const submitButton = screen.getByRole('button', {name: /submit/i});

        expect(screen.queryByLabelText('loading')).toBeNull();

        await act(() => {
            fireEvent.change(nameTextbox, {target: {value: 'Test Name'}});
            fireEvent.change(companyTextbox, {target: {value: 'Test Company'}});
            fireEvent.change(emailTextbox, {target: {value: 'test@test.com'}});
            fireEvent.change(messageTextbox, {target: {value: 'Test Message'}});

            fireEvent.click(submitButton);
        });

        await screen.findByLabelText('loading');
    });

    it('displays success when request is successful', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(
            jest.fn(() => Promise.resolve({ok: true, json: () => Promise.resolve({})})) as jest.Mock
        );

        render(<ContactForm hostname='test.com' />);

        const nameTextbox = screen.getByLabelText('Name *');
        const companyTextbox = screen.getByLabelText('Company');
        const emailTextbox = screen.getByLabelText('Email *');
        const messageTextbox = screen.getByLabelText('Message *');
        const submitButton = screen.getByRole('button', {name: /submit/i});

        await act(() => {
            fireEvent.change(nameTextbox, {target: {value: 'Test Name'}});
            fireEvent.change(companyTextbox, {target: {value: 'Test Company'}});
            fireEvent.change(emailTextbox, {target: {value: 'test@test.com'}});
            fireEvent.change(messageTextbox, {target: {value: 'Test Message'}});

            fireEvent.click(submitButton);
        });

        await screen.findByText('Your contact information was successfully received — we will reach out to you shortly.');
    });

    it('displays error when request is not successful', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(
            jest.fn(() => Promise.resolve({ok: false, json: () => Promise.resolve({})})) as jest.Mock
        );

        const hostname = 'test.com';

        render(<ContactForm hostname={hostname} />);

        const nameTextbox = screen.getByLabelText('Name *');
        const companyTextbox = screen.getByLabelText('Company');
        const emailTextbox = screen.getByLabelText('Email *');
        const messageTextbox = screen.getByLabelText('Message *');
        const submitButton = screen.getByRole('button', {name: /submit/i});

        await act(() => {
            fireEvent.change(nameTextbox, {target: {value: 'Test Name'}});
            fireEvent.change(companyTextbox, {target: {value: 'Test Company'}});
            fireEvent.change(emailTextbox, {target: {value: 'test@test.com'}});
            fireEvent.change(messageTextbox, {target: {value: 'Test Message'}});

            fireEvent.click(submitButton);
        });

        await screen.findByText(/There was an error processing your contact information — please try again or email us directly at /);
        screen.getByText(`info@${hostname}`);
    });
});
