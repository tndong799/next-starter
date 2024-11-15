import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { Analytics } from './lib/analytics';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <Analytics>{children}</Analytics>
            </body>
        </html>
    );
}
