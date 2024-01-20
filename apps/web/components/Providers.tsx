'use client';

import {Provider} from 'jotai';
import Layout from './Layout';

type ProvidersProps = {children: React.ReactNode};

export function Providers(props: ProvidersProps) {
    const {children} = props;

    return (
        <Provider>
            <Layout>{children}</Layout>
        </Provider>
    );
}
