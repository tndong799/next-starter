'use client';
import { useState } from 'react';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click </button>
            <div>{count}</div>
            {children}
        </div>
    );
};
