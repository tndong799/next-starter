'use client';
import React from 'react';
import useDeviceResponsive from '../hooks/useDevice';
import HeaderDesktop from './header';
import HeaderMobile from './header-mobile';

interface HeaderProps {
    isHeaderWaitlist?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHeaderWaitlist }) => {
    const { isMobile } = useDeviceResponsive();

    return !isMobile ? (
        <HeaderDesktop isHeaderWaitlist={isHeaderWaitlist} />
    ) : (
        <HeaderMobile isHeaderWaitlist={isHeaderWaitlist} />
    );
};

export default Header;
