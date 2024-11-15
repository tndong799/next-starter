import * as Sentry from '@sentry/nextjs';

Sentry.init({
    dsn: 'https://54e8faa826ee03613a7774b6e2f5550c@o4508303490744320.ingest.us.sentry.io/4508303493103616',

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for tracing.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,

    // ...

    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get attached to your source maps
});
