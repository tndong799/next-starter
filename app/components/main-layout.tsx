import BacktoTop from './back-to-top';
import MadeWithLove from './mwl';
import Header from './head';
import FooterPromer from './foot';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            import HeaderMobile from './header-mobile';
            <Header />
            {children}
            <BacktoTop />
            <MadeWithLove />
            <FooterPromer />
        </div>
    );
};
