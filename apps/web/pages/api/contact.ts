import {ContactFormData} from '../../components/ContactForm/useContactForm';
import type {NextApiRequest, NextApiResponse} from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const requestBody: ContactFormData = req.body;
    console.log(requestBody);

    res.status(200).json({});
}
