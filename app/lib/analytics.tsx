'use client';

import * as React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { GTMProvider, useGTMDispatch } from '@elgorditosalsero/react-gtm-hook';

const GTM_ID = 'GTM-5MM6CP4J';

export interface PageViewTrackerProps {
    children: React.ReactNode;
}

function PageViewTracker({
    children,
}: Readonly<PageViewTrackerProps>): React.JSX.Element {
    const dispatch = useGTMDispatch();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    React.useEffect(() => {
        dispatch({ event: 'page_view', page: pathname });
    }, [dispatch, pathname, searchParams]);

    return <React.Fragment>{children}</React.Fragment>;
}

export interface AnalyticsProps {
    children: React.ReactNode;
}

/**
 * This loads GTM and tracks the page views.
 *
 * If GTM ID is not configured, this will no track any event.
 */
export function Analytics({
    children,
}: Readonly<AnalyticsProps>): React.JSX.Element {
    if (!GTM_ID) {
        return <React.Fragment>{children}</React.Fragment>;
    }

    return (
        <GTMProvider state={{ id: GTM_ID }}>
            <React.Suspense>
                <PageViewTracker>{children}</PageViewTracker>
            </React.Suspense>
        </GTMProvider>
    );
}
