import {useState} from 'react';
import {SubmitHandler} from 'react-hook-form';

export type ContactFormData = {
    name: string;
    company: string;
    email: string;
    message: string;
};

export default function useContactForm() {
    const [loading, setLoading] = useState(false);
    const [requestIsComplete, setRequestIsComplete] = useState(false);
    const [requestWasSuccessful, setRequestWasSuccessful] = useState(false);
    const contactEndpoint = '/api/contact';

    const handleContactFormSubmit: SubmitHandler<ContactFormData> = async (data) => {
        setLoading(true);

        const response = await fetch(contactEndpoint, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });

        setLoading(false);
        setRequestIsComplete(true);
        setRequestWasSuccessful(response.ok);
    };

    return {loading, requestIsComplete, requestWasSuccessful, handleContactFormSubmit};
}
