import {ClientSecretCredential} from '@azure/identity';
import {Client} from '@microsoft/microsoft-graph-client';
import {TokenCredentialAuthenticationProvider} from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';
import {ContactFormData} from '../../../components/ContactForm/useContactForm';

function sanitizeString(input: string) {
    input = input.replace(/[^a-z0-9áéíóúñü@ \.,_-]/gim, '');
    return input.trim();
}

export async function POST(request: Request) {
    const requestBody: ContactFormData = await request.json();

    const name = sanitizeString(requestBody.name);
    const company = sanitizeString(requestBody.company ?? '');
    const email = sanitizeString(requestBody.email);
    const message = sanitizeString(requestBody.message);

    const tenantId = process.env.TENANT_ID ?? '';
    const clientId = process.env.CLIENT_ID ?? '';
    const clientSecret = process.env.CLIENT_SECRET ?? '';
    const destinationEmail = process.env.DESTINATION_EMAIL ?? '';
    const sourceEmailId = process.env.SOURCE_EMAIL_ID ?? '';

    const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);

    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
        scopes: ['https://graph.microsoft.com/.default']
    });

    const graphClient = Client.initWithMiddleware({
        authProvider: authProvider
    });

    const sendMail = {
        message: {
            subject: `New Contact Form Submission - ${name}`,
            body: {
                contentType: 'Text',
                content: `New Contact Request:
Name: ${name}
Company: ${company}
Email: ${email}
Message: ${message}`
            },
            toRecipients: [
                {
                    emailAddress: {
                        address: destinationEmail
                    }
                }
            ]
        },
        saveToSentItems: 'false'
    };

    await graphClient.api(`/users/${sourceEmailId}/sendMail`).post(sendMail);

    return new Response(null, {status: 200});
}
