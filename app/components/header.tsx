import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HeaderDesktop = ({ isHeaderWaitlist = false }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                if (window.scrollY < lastScrollY) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    function scrollToTarget() {
        const targetSection = document.getElementById('target-section');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <header
            className={`fixed top-0 left-0 w-full bg-porcelain h-[70px] z-50 flex items-center transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="px-[90px] container mx-auto flex justify-between items-center h-full">
                <div className="font-normal text-base space-x-8 flex items-center text-Woodsmokeapprox hover:text-gray-400">
                    <Link href="/">
                        <img
                            src="/assets/icons/logo_header.svg"
                            alt="Logo"
                            className="inline-block"
                        />
                    </Link>
                </div>
                <nav className="space-x-4 flex items-center">
                    {isHeaderWaitlist ? (
                        <button
                            onClick={scrollToTarget}
                            className=" font-medium leading-[26px] bg-OutrageousOrange text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                        >
                            <img
                                src="/assets/icons/gift.svg"
                                className="w-5 h-5 inline-block"
                                alt="union"
                            />
                            <span>See Benefit</span>
                        </button>
                    ) : (
                        <Link target="_blank" href="/test">
                            <button className="font-medium leading-[26px] bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center space-x-2">
                                <div className="w-5 h-5">
                                    <img
                                        src="/assets/icons/union.svg"
                                        className="w-5 h-5 inline-block"
                                        alt="union"
                                    />
                                </div>
                                <span>Join Waitlist</span>
                            </button>
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default HeaderDesktop;
