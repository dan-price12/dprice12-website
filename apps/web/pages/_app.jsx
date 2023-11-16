import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';
import '../ui/fonts/fonts.css';
import {Provider} from 'jotai';
import Layout from '../components/Layout';

export default function App({Component, pageProps}) {
    return (
        <Provider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
