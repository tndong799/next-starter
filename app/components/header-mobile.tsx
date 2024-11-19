import Link from 'next/link';
import React, { useState } from 'react';
interface FullScreenDialogProps {
    isOpen: boolean;
    onClose: () => void;
    isHeaderWaitlist: boolean;
}
interface FeatureItemProps {
    title: string;
    href: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, href }) => (
    <Link href={href} className="flex justify-between items-center">
        <span className="text-[26px] leading-[34px]">{title}</span>
        <img src="/assets/icons/caret-right.svg" alt="caret" />
    </Link>
);

const FullScreenDialog: React.FC<FullScreenDialogProps> = ({
    isOpen,
    onClose,
    isHeaderWaitlist,
}) => {
    const currentPath = window.location.pathname;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
                className="bg-white w-full h-full min-h-[500px] p-4 relative flex flex-col"
                style={{
                    backgroundImage: "url('/assets/images/bg_menu_mobile.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <button onClick={onClose} className="absolute top-2 right-2">
                    <img
                        src="/assets/icons/trail_action_close.svg"
                        alt="Đóng"
                        className="h-[2rem] cursor-pointer"
                    />
                </button>
                <div className="mt-[88px] space-y-[32px]">
                    {currentPath === '/' || (
                        <FeatureItem title="Homepage" href="/" />
                    )}
                    {currentPath === '/test' || (
                        <FeatureItem title="Our Story" href="/test" />
                    )}
                </div>

                <div className="mt-auto">
                    <div id="button" className="w-full flex flex-col space-y-4">
                        {isHeaderWaitlist || (
                            <button className="bg-white text-black w-full px-4 py-2 rounded-lg hover:bg-gray-800 text-[14px] leading-[26px]">
                                Login
                            </button>
                        )}

                        <button className="bg-black text-white w-full px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center justify-center space-x-2 text-[14px] leading-[26px]">
                            <div className="flex items-center justify-center w-5 h-5">
                                <img
                                    src="/assets/icons/union.svg"
                                    className="w-[24px] h-[24px]"
                                    alt="Join Waitlist"
                                />
                            </div>
                            <span>Join Waitlist</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HeaderMobile = ({ isHeaderWaitlist = false }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const currentPath = window.location.pathname;

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };
    const scrollToTarget = () => {
        const targetSection = document.getElementById('target-section');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <header className="py-2 px-[16px]">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <img
                            src="/assets/icons/logo_header.svg"
                            alt="Logo"
                            className="inline-block h-[2rem]"
                        />
                    </div>

                    {currentPath === '/test' ? (
                        <button onClick={scrollToTarget}>
                            <img
                                src="/assets/icons/gift_mobile.svg"
                                alt="gift"
                            />
                        </button>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <Link href="/test" passHref>
                                <button className=" h-[2rem] bg-black text-white px-[10px] py-2 rounded-[8px] hover:bg-gray-800 flex items-center space-x-2 text-[14px] leading-[26px]">
                                    <div className="flex items-center justify-center w-5 h-5">
                                        <img
                                            src="/assets/icons/union.svg"
                                            className="w-[24px] h-[24px]"
                                            alt="Join Waitlist"
                                        />
                                    </div>
                                    <span>Join Waitlist</span>
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </header>

            <FullScreenDialog
                isHeaderWaitlist={isHeaderWaitlist}
                isOpen={isDialogOpen}
                onClose={handleCloseDialog}
            />
        </>
    );
};

export default HeaderMobile;
