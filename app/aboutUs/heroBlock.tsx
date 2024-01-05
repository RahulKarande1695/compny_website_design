import { createStyles, Overlay, Container, Title, Button, Text, rem, Modal } from '@mantine/core';
import { RightIcon } from '../assets/RightIcon';
import ModalComponent from '../components/mainComponents/modalComponent';
import { useState } from 'react';
import { ContactHero } from '../assets/contactHero';
import ContactResponsive from '../components/mainComponents/contactResponsive';
const allDone = [
    { id: 1, name: 'Contact' },
    { id: 2, name: 'Requirements' },
    { id: 3, name: 'Contract' },
    { id: 4, name: 'Commisions' },
];

export const carouselSlideInfo = [
    { id: 0, question: 'What would you like us to call you?', placeHolder: 'Type your name here', value: '' },
    { id: 1, question: 'Where would you like us to email you?', placeHolder: 'Type your email here', value: '' },
    { id: 2, question: 'How do we reach you on your phone?', placeHolder: 'Type your number here', value: '' },
];
const useStyles = createStyles((theme) => ({
    control: {
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,

        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
    },
}));
export const HeroAboutUS = () => {
    const { classes } = useStyles();
    const [flag, setFlage] = useState(false);
    const [show, setShow] = useState(true);
    const [closeIndictor, setCloseIndictor] = useState(0);
    const [mobileClose, setMobileClose] = useState(false);
    const closeAction = () => {
        // if (carouselSlideInfo.length > closeIndictor) {
        //     setFlage(true);
        // } else {
        //     setFlage(false);

        //     setCloseIndictor(0);
        // }

        // if (mobileClose) {
        //     setFlage(false);
        // }
        setFlage(false);
        setShow(true);
        setCloseIndictor(0);
    };
    return (
        <>
            <div className="heroAboutus">
                <Text className="heroMissionTitle">Our Mission</Text>
                <Title className="heroAboutusTitle">Drive the world using good quality, high efficiency data.</Title>
                <Text className="heroAboutusText">
                    are committed to shaping a world through our innovation to achieve smarter, safer, and more
                    sustainable future
                </Text>
            </div>
            <div className="ModalComponentContainer">
                <div className="contact_web_view">
                    <ModalComponent nameOfBlock={'firstBlock'} />
                </div>
                <div className="contact_mobile_view">
                    {show && (
                        <Button
                            onClick={() => {
                                setShow(false);
                                setFlage(true);
                                setMobileClose(false);
                            }}
                        >
                            <ContactHero />
                        </Button>
                    )}
                    <Modal opened={flag} size="80%" onClose={closeAction} className="modalbox">
                        {flag ? <ContactResponsive setMobileClose={setMobileClose} /> : <></>}
                    </Modal>
                </div>
            </div>
        </>
    );
};
export default HeroAboutUS;
