import { createMailtolHref } from '../index';

describe('Create a mailto href string based on various input', () => {

    test('basic example', () => {
        expect(createMailtolHref({
            emails: ['person@test.com']
        })).toBe('mailto:person@test.com?');
    });

    test('should include CC', () => {
        expect(createMailtolHref({
            emails: ['person@test.com'],
            cc: ['cc1@test.com', 'cc2@test.com']
        })).toBe('mailto:person@test.com?cc=cc1@test.com,cc2@test.com');
    });

    test('Should prepopulate only bcc and subject', () => {
        expect(createMailtolHref({
            bcc: ['bcc1@test.com', 'bcc2@test.com'],
            subject: 'Testing'
        })).toBe('mailto:?bcc=bcc1@test.com,bcc2@test.com&subject=Testing');
    });


})

