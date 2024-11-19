import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
export const ROUTERS = {
    HOME: '/',
    OURSTORY: '/ourstory',
    WAITLIST: '/waitlist',
    FEATURE: '/feature',
    PRICING: '/pricing',
    TERMS_OF_SERVICE: '/terms-of-service',
    PRIVACY: '/privacy-policy',
};
const MadeWithLoveMobile = () => {
    const pathname = usePathname();
    const waitListFooter = [ROUTERS.TERMS_OF_SERVICE, ROUTERS.PRIVACY];
    return (
        <div
            className=" bg-cover bg-center pl-[24px] pt-[317px] mt-[48px] pb-[48px] rounded-t-lg  justify-center items-center"
            style={{
                backgroundImage: waitListFooter.includes(pathname)
                    ? "url('/assets/images/waitlist-footer-mobile.jpg')"
                    : "url('/assets/images/made_with_love_mobile.png')",
            }}
        >
            <div className="mt-[104px]  justify-center">
                <div className="font-serif text-[26px] leading-[32px] text-white">
                    Made with love by <br />
                    Promer team
                </div>
                <p className="text-white font-medium  text-[16px] mt-[8px] leading-[24px] ">
                    From VietNam
                </p>
                {waitListFooter.includes(pathname) && (
                    <Link href={ROUTERS.WAITLIST}>
                        <button className="flex items-center justify-center mt-10 bg-black text-black px-4 py-1 rounded-lg hover:bg-gray-800">
                            <span className="text-[16px] text-white font-medium leading-[26px]">
                                Join Waitlist
                            </span>
                            <img
                                className="ml-2 "
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
export default MadeWithLoveMobile;
