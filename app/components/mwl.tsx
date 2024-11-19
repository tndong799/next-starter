'use client';
import React from 'react';
import useDeviceResponsive from '../hooks/useDevice';
import MadeWithLoveDesktop from './made-with-love';
import MadeWithLoveMobile from './made-with-love-mobile';

const MadeWithLove = () => {
    const { isMobile } = useDeviceResponsive();

    return !isMobile ? <MadeWithLoveDesktop /> : <MadeWithLoveMobile />;
};

export default MadeWithLove;
