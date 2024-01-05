'use client';
import { Button, Modal } from '@mantine/core';
import { useRef, useState } from 'react';
import { carouselSlideInfo } from '@/app/utils';
import ModalFirstBlock from '../subComponents/ModalFirstBlock';
import { RightIcon } from '@/app/assets/RightIcon';
import { ContactBuzz } from '@/app/assets/contactBuzz';
import Lottie from 'lottie-react';
import AnimationData from '../../animation/ball.json';
interface typesOfProps {
    nameOfBlock: string;
}
export default function ModalComponent(props: typesOfProps) {
    const { nameOfBlock } = props;
    const lottieRef: any = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [closeIndictor, setCloseIndictor] = useState(0);
    const [flag, setFlage] = useState(false);
    const closeAction = () => {
        // setFlage(true);
        // setIsPlaying(false);
        // if (carouselSlideInfo.length > closeIndictor) {
        //     setFlage(true);
        // } else {
        //     setFlage(false);
        //     setCloseIndictor(0);
        // }
        setFlage(false);
        setIsPlaying(false);
        setCloseIndictor(0);
    };
    const handleClick = () => {
        console.log('here');
        if (isPlaying) {
            setIsPlaying(false);
            lottieRef.current.stop();
        } else {
            setIsPlaying(true);
            lottieRef.current.play();
        }
    };
    return (
        <div className="ModalinnerContainer">
            {nameOfBlock === 'firstBlock' && (
                <Button onClick={() => setFlage(true)}>
                    <Lottie
                        lottieRef={lottieRef}
                        animationData={AnimationData}
                        loop={true}
                        autoplay={isPlaying}
                        className="connentbutt1"
                        onMouseEnter={handleClick}
                        onMouseLeave={handleClick}
                        onClick={() => setFlage(true)}
                    />
                </Button>
            )}
            <Modal opened={flag} size="100%" onClose={() => closeAction()} className="modalbox">
                {nameOfBlock === 'firstBlock' && (
                    <ModalFirstBlock closeIndictor={closeIndictor} setCloseIndictor={setCloseIndictor} />
                )}
            </Modal>
        </div>
    );
}
