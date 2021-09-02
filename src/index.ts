export function createMailtolHref(
    options?: {
        emails?: string[]
        subject?: string
        body?: string
        cc?: string[]
        bcc?: string[]
    }
): string {
    const emails = options?.emails ?? []
    const cc = options?.cc ? 'cc=' + options.cc.join(',') : ''
    const bcc = options?.bcc ? 'bcc=' + options.bcc.join(',') : ''
    const subject = options?.subject
        ? 'subject=' + encodeURIComponent(options?.subject)
        : ''
    const body = options?.body ? 'body=' + encodeURIComponent(options.body) : ''
    const query = [cc, bcc, subject, body].filter((v) => v).join('&')


    return `mailto:${emails.join(',')}?${query}`
}