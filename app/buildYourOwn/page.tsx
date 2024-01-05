'use client';
import dynamic from 'next/dynamic';
import MobileIndustryProceed from './mobilebuildYourOwnComponent/mobileIndustryProceed';
import { useContext, useEffect } from 'react';
import GlobalData from '../context/context';
import SubModal from './webBuildYourOwnComponent/subModal';
const IndustryProceed = dynamic(() => import('./webBuildYourOwnComponent/industryProceed'), {
    loading: () => <p>Loading...</p>,
});

export default function Home() {
    const { color, setColor, servicessFlag, flag }: any = useContext(GlobalData);
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
        <main className="industryProceedPage">
            <div className="pageIndustry">
                <IndustryProceed />
                <MobileIndustryProceed />
            </div>
            <div
                className={
                    flag
                        ? `activeSub subModalBox ${servicessFlag ? 'slidetoleftT' : 'slidetorightT'}`
                        : `deactiveSub subModalBox ${servicessFlag ? 'slidetoleft' : 'slidetoright'}`
                }
            >
                <SubModal />
            </div>
        </main>
    );
}
