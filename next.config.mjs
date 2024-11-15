import { withSentryConfig } from '@sentry/nextjs';
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
/** @type {import('next').NextConfig} */

const nextConfig = {};
if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
}
export default withSentryConfig(nextConfig, {
    org: 'ngocdong',
    project: 'javascript-nextjs',

    // An auth token is required for uploading source maps.
    authToken:
        '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',

    silent: false,
});
