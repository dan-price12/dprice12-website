'use client';

import React from 'react';
import {Alert, AlertTitle, Button, CircularProgress, TextField} from '@mui/material';
import {useForm} from 'react-hook-form';
import useContactForm, {ContactFormData} from './useContactForm';

type ContactFormProps = {
    hostname: string;
};

export default function ContactForm(props: ContactFormProps) {
    const {hostname} = props;

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<ContactFormData>();

    const {loading, requestIsComplete, requestWasSuccessful, handleContactFormSubmit} = useContactForm();

    const showSuccessAlert = requestIsComplete && requestWasSuccessful;
    const showErrorAlert = requestIsComplete && !requestWasSuccessful;

    const SuccessAlert = () => {
        return (
            <Alert severity='success' sx={{mt: 2}} data-cy='alert-contact-success'>
                <AlertTitle>Success</AlertTitle>
                {`Your contact information was successfully received — we will reach out to you shortly.`}
            </Alert>
        );
    };

    const ErrorAlert = () => {
        return (
            <Alert severity='error' sx={{mt: 2}} data-cy='alert-contact-error'>
                <AlertTitle>Error</AlertTitle>
                {`There was an error processing your contact information — please try again or email us directly at `}
                <a href={`mailto:info@${hostname}`} style={{color: 'inherit'}}>
                    {`info@${hostname}`}
                </a>
                {`.`}
            </Alert>
        );
    };

    return (
        <>
            <form onSubmit={handleSubmit(handleContactFormSubmit)}>
                <TextField
                    fullWidth
                    margin='normal'
                    label='Name *'
                    {...register('name', {required: 'Name is required'})}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    data-cy='input-text-contact-name'
                />
                <TextField fullWidth margin='normal' label='Company' {...register('company', {})} data-cy='input-text-contact-company' />
                <TextField
                    fullWidth
                    margin='normal'
                    label='Email *'
                    type='email'
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address'
                        }
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    data-cy='input-text-contact-email'
                />
                <TextField
                    fullWidth
                    margin='normal'
                    label='Message *'
                    multiline
                    rows={4}
                    {...register('message', {required: 'Message is required'})}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    data-cy='input-text-contact-message'
                />
                <Button type='submit' variant='contained' color='primary' disabled={loading} fullWidth data-cy='button-contact-submit'>
                    {loading ? <CircularProgress aria-label='loading' size={24} data-cy='icon-contact-loading' /> : 'Submit'}
                </Button>
            </form>
            {showSuccessAlert && <SuccessAlert />}
            {showErrorAlert && <ErrorAlert />}
        </>
    );
}
