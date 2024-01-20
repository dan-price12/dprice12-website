import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';
import '../ui/fonts/fonts.css';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import Script from 'next/script';
import {Providers} from '../components/Providers';

type RootLayoutProps = {children: React.ReactNode};

export default function RootLayout(props: RootLayoutProps) {
    const {children} = props;

    return (
        <>
            <Script async src='https://www.googletagmanager.com/gtag/js?id=G-TTZRL1TPST' strategy='afterInteractive' />
            <Script async id='google-analytics' strategy='afterInteractive'>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-TTZRL1TPST');
                `}
            </Script>
            <html lang='en'>
                <body>
                    <Providers>
                        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
                    </Providers>
                </body>
            </html>
        </>
    );
}
