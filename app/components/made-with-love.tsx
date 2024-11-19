import React, { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const ROUTERS = {
    HOME: '/',
    OURSTORY: '/ourstory',
    WAITLIST: '/waitlist',
    FEATURE: '/feature',
    PRICING: '/pricing',
    TERMS_OF_SERVICE: '/terms-of-service',
    PRIVACY: '/privacy-policy',
};

const MadeWithLoveDesktop = () => {
    const pathname = usePathname();

    const isWaitListFooter = useMemo(
        () => [ROUTERS.TERMS_OF_SERVICE, ROUTERS.PRIVACY].includes(pathname),
        [pathname]
    );

    return (
        <div
            className={`rounded-2xl h-[480px] bg-cover bg-center mx-[84px] mb-[84px] pl-[140px] pr-[178px] flex items-center ${
                isWaitListFooter ? 'justify-end' : 'justify-start'
            }`}
            style={{
                backgroundImage: isWaitListFooter
                    ? "url('/assets/images/waitlist-footer-desktop.jpg')"
                    : "url('/assets/images/made_with_love.webp')",
            }}
        >
            <div>
                <div className="font-serif text-[56px] leading-[64px] text-white">
                    Made with love by <br />
                    Promer team
                </div>
                <p className="font-medium text-white text-[20px] mt-[16px] leading-[24px]">
                    From VietNam
                </p>
                {isWaitListFooter && (
                    <Link href={ROUTERS.WAITLIST}>
                        <button className="flex items-center justify-center mt-10 bg-black text-white px-8 transition-colors py-4 rounded-lg hover:bg-gray-800">
                            <span className="text-[18px] leading-[26px]">
                                Join Waitlist
                            </span>
                            <img
                                className="ml-2"
                                src="/assets/icons/arrow-left.svg"
                                alt="Arrow Left Icon"
                            />
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default MadeWithLoveDesktop;
