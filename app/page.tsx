'use client';
import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';
import GlobalData from './context/context';
const HeroBlock = dynamic(() => import('./buildYourOwn/hero'), {
    loading: () => <p>Loading...</p>,
});
const Trust = dynamic(() => import('./buildYourOwn/trust'), {
    loading: () => <p>Loading...</p>,
});
const Cases = dynamic(() => import('./buildYourOwn/cases'), {
    loading: () => <p>Loading...</p>,
});
const AboutScale = dynamic(() => import('./buildYourOwn/aboutScale'), {
    loading: () => <p>Loading...</p>,
});
const Advantage = dynamic(() => import('./buildYourOwn/advantage'), {
    loading: () => <p>Loading...</p>,
});
const LatestNews = dynamic(() => import('./buildYourOwn/latestNews'), {
    loading: () => <p>Loading...</p>,
});
export default function Home() {
    // const [color, setColor] = useState('transparent');
    const { color, setColor }: any = useContext(GlobalData);
    const listenScrollEvent = (e: any) => {
        if (window.scrollY > 200) {
            setColor('black');
        } else {
            setColor('transparent');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <main className="homePage">
            <div className="banner_text"></div>
            <section>
                <HeroBlock />
            </section>
            <section>
                <Trust />
            </section>
            <section>
                <Cases />
            </section>
            <section>
                <AboutScale />
            </section>
            <section>
                <Advantage />
            </section>
            <section>
                <LatestNews />
            </section>
        </main>
    );
}
