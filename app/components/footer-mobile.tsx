import Link from 'next/link';
import React from 'react';
const ROUTERS = {
    HOME: '/',
    OURSTORY: '/ourstory',
    WAITLIST: '/waitlist',
    FEATURE: '/feature',
    PRICING: '/pricing',
    TERMS_OF_SERVICE: '/terms-of-service',
    PRIVACY: '/privacy-policy',
};
const EXTERNAL_LINK = {
    X: 'https://x.com/PromerAI',
    FACEBOOK: 'https://www.facebook.com/PromerAIOfficial',
    INSTAGRAM: 'https://www.instagram.com/promeraiofficial',
    LINKEDIN: 'https://www.linkedin.com/company/promeraiofficial',
    YOUTUBE: 'https://www.youtube.com/@PromerAIOfficial',
};
const LogoSection = () => (
    <div className="justify-between">
        <img
            src="/assets/icons/logo_header.svg"
            alt="Logo"
            className="h-[64px] inline-block"
        />
        <div className="mt-[16px] text-[16px] leading-[24px] font-bold">
            About Promer
        </div>
        <p className="mt-[8px] text-[14px] leading-[22px] text-textContent">
            Transform Your E-commerce Workspace with AI Breakthroughs.
            <br /> AI trained for e-commerce—Promer simplifies content,
            marketing, and sales everywhere, delivering exceptional results with
            less effort.
        </p>
    </div>
);

const SocialIcons = () => (
    <div className="flex space-x-2 mt-4">
        {[
            {
                src: '/assets/icons/twiter_icon.svg',
                alt: 'Twitter',
                link: EXTERNAL_LINK.X,
            },
            {
                src: '/assets/icons/fb_icon.svg',
                alt: 'Facebook',
                link: EXTERNAL_LINK.FACEBOOK,
            },
            {
                src: '/assets/icons/i_icon.svg',
                alt: 'Instagram',
                link: EXTERNAL_LINK.INSTAGRAM,
            },
            {
                src: '/assets/icons/in_icon.svg',
                alt: 'LinkedIn',
                link: EXTERNAL_LINK.LINKEDIN,
            },
            {
                src: '/assets/icons/youtube_icon.svg',
                alt: 'YouTube',
                link: EXTERNAL_LINK.YOUTUBE,
            },
        ].map((item) => (
            <Link key={item.src} target="_blank" href={item.link}>
                <span>
                    <img src={item.src} className="w-8" alt={item.alt} />
                </span>
            </Link>
        ))}
    </div>
);

const FooterPromerMobile = () => {
    return (
        <footer className="px-[16px] mt-[48px]">
            <LogoSection />
            <SocialIcons />
            <p className="text-Woodsmokeapprox text-[14px] leading-[24px] mt-[24px]">
                <Link href={ROUTERS.PRIVACY}>Privacy</Link> •{' '}
                <Link href={ROUTERS.TERMS_OF_SERVICE}>Terms of Service</Link> •
                © Copyright
            </p>
        </footer>
    );
};

export default FooterPromerMobile;
