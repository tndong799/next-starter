'use client';
import { useState } from 'react';
import useDeviceResponsive from '../hooks/useDevice';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount] = useState(0);
    const { isMobile } = useDeviceResponsive();
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click </button>
            <div>{count}</div>
            <div>{isMobile ? 'Mobile' : 'Desktop'}</div>
            {children}
        </div>
    );
};
