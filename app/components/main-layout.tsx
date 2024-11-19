'use client';
import { useState } from 'react';
import useDeviceResponsive from '../hooks/useDevice';
import HeaderDesktop from './header';
import HeaderMobile from './header-mobile';
import BacktoTop from './back-to-top';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount] = useState(0);
    const { isMobile } = useDeviceResponsive();
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click </button>
            <div>{count}</div>
            import HeaderMobile from './header-mobile';
            <div>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</div>
            {children}
            <BacktoTop />
        </div>
    );
};
