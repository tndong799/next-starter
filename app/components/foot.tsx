'use client';
import React from 'react';
import useDeviceResponsive from '../hooks/useDevice';
import FooterPromerDesktop from './footer';
import FooterPromerMobile from './footer-mobile';

const FooterPromer = () => {
    const { isMobile } = useDeviceResponsive();

    return !isMobile ? <FooterPromerDesktop /> : <FooterPromerMobile />;
};

export default FooterPromer;
