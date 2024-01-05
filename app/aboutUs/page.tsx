'use client';
import dynamic from 'next/dynamic';
import { useContext, useEffect } from 'react';
import GlobalData from '../context/context';
const HeroAboutUS = dynamic(() => import('./heroBlock'), {
    loading: () => <p>Loading...</p>,
});
const ImpactBlock = dynamic(() => import('./impactBlock'), {
    loading: () => <p>Loading...</p>,
});
const StoryBlock = dynamic(() => import('./storyBlock'), {
    loading: () => <p>Loading...</p>,
});
const TeamBlock = dynamic(() => import('./teamBlock'), {
    loading: () => <p>Loading...</p>,
});
const ValuesBlock = dynamic(() => import('./valuesBlock'), {
    loading: () => <p>Loading...</p>,
});

export default function AboutUs() {
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
        <main className="aboutUsPage">
            <section>
                <HeroAboutUS />
            </section>
            <section>
                <TeamBlock />
            </section>
            <section>
                <StoryBlock />
            </section>
            <section>
                <ValuesBlock />
            </section>
            <section>
                <ImpactBlock />
            </section>
        </main>
    );
}
