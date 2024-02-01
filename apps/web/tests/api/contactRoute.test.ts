import {Client} from '@microsoft/microsoft-graph-client';
import {Response, Headers, Request} from 'whatwg-fetch';
import {POST} from '../../app/api/contact/route';

global.Response = Response;
global.Headers = Headers;
global.Request = Request;

describe('/api/contact', () => {
    const OLD_ENV = process.env;

    const name = 'Test Name';
    const company = 'Test Company';
    const email = 'test@test.com';
    const message = 'Test Message';

    const sourceEmailId = 'sourceEmailId';
    const destinationEmail = 'destinationEmail';

    let postSpy: jest.Mock;
    const apiSpy = jest.fn().mockImplementation(() => {
        return {
            post: postSpy
        };
    });
    const clientSpy = jest.fn().mockImplementation(() => {
        return {
            api: apiSpy
        };
    });
    const graphClientSpy = jest.spyOn(Client, 'initWithMiddleware').mockImplementation(clientSpy);

    const mockRequest = {
        json: () => {
            return {
                name,
                company,
                email,
                message
            };
        }
    } as unknown as Request;

    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();

        process.env = {...OLD_ENV};
        process.env.TENANT_ID = 'tenantId';
        process.env.CLIENT_ID = 'clientId';
        process.env.CLIENT_SECRET = 'clientSecret';
        process.env.DESTINATION_EMAIL = destinationEmail;
        process.env.SOURCE_EMAIL_ID = sourceEmailId;
    });

    afterAll(() => {
        process.env = OLD_ENV;
    });

    it('sends request to graph api', async () => {
        postSpy = jest.fn().mockImplementation(() => {
            return {ok: true};
        });

        const response = await POST(mockRequest);

        expect(response.status).toBe(200);
        expect(graphClientSpy).toHaveBeenCalled();
        expect(apiSpy).toHaveBeenCalledWith(`/users/${sourceEmailId}/sendMail`);
        expect(postSpy).toHaveBeenCalledWith({
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
        });
    });

    it('sanitizes strings', async () => {
        postSpy = jest.fn().mockImplementation(() => {
            return {ok: true};
        });

        const unsafeMockRequest = {
            json: () => {
                return {
                    name: `!#$%^&*()[]{}${name}!#$%^&*()[]{}`,
                    company: `!#$%^&*()[]{}${company}!#$%^&*()[]{}`,
                    email: `!#$%^&*()[]{}${email}!#$%^&*()[]{}`,
                    message: `!#$%^&*()[]{}${message}!#$%^&*()[]{}`
                };
            }
        } as unknown as Request;

        const response = await POST(unsafeMockRequest);

        expect(response.status).toBe(200);
        expect(postSpy).toHaveBeenCalledWith({
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
        });
    });

    it('returns 502 if post to graph api does not return ok', async () => {
        postSpy = jest.fn().mockImplementation(() => {
            return {ok: false};
        });

        const response = await POST(mockRequest);

        expect(response.status).toBe(502);
    });

    it('returns 500 if post to graph api throws error', async () => {
        postSpy = jest.fn().mockImplementation(() => {
            throw new Error();
        });

        const response = await POST(mockRequest);

        expect(response.status).toBe(500);
    });
});
