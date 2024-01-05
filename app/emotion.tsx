'use client';
import dynamic from 'next/dynamic';

// Client Components:
const HeaderResponsive = dynamic(() => import('./sharedComponent/header'), {
    loading: () => <p>Loading...</p>,
});
const FooterResponsive = dynamic(() => import('./sharedComponent/footer'), {
    loading: () => <p>Loading...</p>,
});
import { CacheProvider } from '@emotion/react';
import { useEmotionCache } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';
import { theme } from './common';
import { data } from './utils';
import GlobalDataProvider from './context/context';
import { useState } from 'react';
export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
    const cache = useEmotionCache();
    cache.compat = true;
    const [color, setColor] = useState('transparent');
    const [contextFlag, setContextFlag] = useState<boolean>(false);
    const [serviceSuccesFlag, setserviceSuccesFlag] = useState<boolean>(false);
    const [checkBoxData, setCheckBoxData] = useState<any>([]);
    const [flag, setFlag] = useState(false);
    const [servicessFlag, setServicessFlag] = useState(false);
    useServerInsertedHTML(() => (
        <style
            data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
            dangerouslySetInnerHTML={{
                __html: Object.values(cache.inserted).join(' '),
            }}
        />
    ));

    return (
        <CacheProvider value={cache}>
            <GlobalDataProvider.Provider
                value={{
                    contextFlag: contextFlag,
                    setContextFlag: setContextFlag,
                    serviceSuccesFlag: serviceSuccesFlag,
                    setserviceSuccesFlag: setserviceSuccesFlag,
                    checkBoxData:checkBoxData, setCheckBoxData:setCheckBoxData,
                    flag:flag, setFlag:setFlag,
                    servicessFlag:servicessFlag, setServicessFlag:setServicessFlag,
                    color,
                    setColor,
                }}
            >
                <HeaderResponsive />
                {children}
                <FooterResponsive data={data} />
            </GlobalDataProvider.Provider>
        </CacheProvider>
    );
}
