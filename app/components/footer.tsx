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

const socialLinks = [
    {
        href: EXTERNAL_LINK.X,
        src: '/assets/icons/twiter_icon.svg',
        alt: 'Twitter',
    },
    {
        href: EXTERNAL_LINK.FACEBOOK,
        src: '/assets/icons/fb_icon.svg',
        alt: 'Facebook',
    },
    {
        href: EXTERNAL_LINK.INSTAGRAM,
        src: '/assets/icons/i_icon.svg',
        alt: 'Instagram',
    },
    {
        href: EXTERNAL_LINK.LINKEDIN,
        src: '/assets/icons/in_icon.svg',
        alt: 'LinkedIn',
    },
    {
        href: EXTERNAL_LINK.YOUTUBE,
        src: '/assets/icons/youtube_icon.svg',
        alt: 'YouTube',
    },
];

const FooterPromerDesktop = () => {
    return (
        <footer className="px-[120px] mt-[100px] h-[380px]">
            <div className="flex justify-between items-end">
                <img
                    src="/assets/icons/logo_header.svg"
                    alt="Logo"
                    className="w-[309px]"
                />
                <div className="flex space-x-[16px]">
                    {socialLinks.map(({ href, src, alt }) => (
                        <Link key={alt} target="_blank" href={href}>
                            <img src={src} alt={alt} />
                        </Link>
                    ))}
                </div>
            </div>

            <hr className="my-[32px] border-t text-[#DCDFE4]" />

            <div className="flex">
                <section className="w-1/2 space-y-4">
                    <h3 className="text-base font-bold text-Woodsmokeapprox">
                        About Promer
                    </h3>
                    <p className="text-textContent text-[14px] leading-[22px]  max-w-[480px]">
                        Transform Your E-commerce Workspace with AI
                        Breakthroughs.
                        <br />
                        AI trained for e-commerce—Promer simplifies content,
                        marketing, and sales everywhere, delivering exceptional
                        results with less effort.
                    </p>
                    <p className="text-Woodsmokeapprox text-[14px] leading-[24px]">
                        <Link href={ROUTERS.PRIVACY}>Privacy</Link> •{' '}
                        <Link href={ROUTERS.TERMS_OF_SERVICE}>
                            Terms of Service
                        </Link>{' '}
                        • © Copyright
                    </p>
                </section>

                <div className="w-1/2 flex invisible">
                    <FooterColumn
                        title="Features"
                        items={['A.I Content', 'AI Image', 'AI Second Brain']}
                    />
                    <FooterColumn
                        title="Pricing"
                        items={['Free Trial', 'Standard', 'Premium']}
                    />
                    <FooterColumn
                        title="About Us"
                        items={['Our Story', 'Product Hunt', 'Community']}
                    />
                </div>
            </div>
        </footer>
    );
};

const FooterColumn = ({ title, items }: { title: string; items: string[] }) => (
    <div className="flex-1 space-y-4">
        <h3 className="text-base font-bold text-Woodsmokeapprox">{title}</h3>
        <ul className="text-sm text-Woodsmokeapprox space-y-4">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
);

export default FooterPromerDesktop;
