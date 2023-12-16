import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';
import '../ui/fonts/fonts.css';
import {Provider} from 'jotai';
import Script from 'next/script';
import Layout from '../components/Layout';

export default function App({Component, pageProps}) {
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
            <Provider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </>
    );
}
