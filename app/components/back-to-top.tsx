'use client';
import React, { useEffect } from 'react';
import useDeviceResponsive from '../hooks/useDevice';

const BacktoTop = () => {
    const { isMobile } = useDeviceResponsive();

    useEffect(() => {
        const handleScroll = () => {
            const button = document.getElementById('button_scroll');
            if (window.scrollY > 100) {
                button?.classList.remove('hidden');
            } else {
                button?.classList.add('hidden');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return !isMobile ? (
        <button
            id="button_scroll"
            className="fixed hidden bottom-[80px] right-[24px] cursor-pointer"
            onClick={scrollToTop}
        >
            <img src="/assets/icons/back_to_top.svg" alt="Back to top" />
        </button>
    ) : (
        <button
            id="button_scroll"
            className="fixed hidden button_scroll bottom-[16px] right-[16px] cursor-pointer"
            onClick={scrollToTop}
        >
            <img src="/assets/icons/back_to_top_mobile.svg" alt="Back to top" />
        </button>
    );
};

export default BacktoTop;
