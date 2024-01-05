import { createStyles, Button, rem, Title, Text, TextInput, Modal } from '@mantine/core';
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
    hero: {
        // position: 'relative',
        // backgroundImage:
        //   'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
    },

    container: {
        height: rem(700),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: `calc(${theme.spacing.xl} * 6)`,
        zIndex: 1,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {
            // height: rem(500),
            paddingBottom: `calc(${theme.spacing.xl} * 3)`,
        },
    },

    title: {
        color: theme.white,
        fontSize: rem(60),
        fontWeight: 900,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(40),
            lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            lineHeight: 1.3,
        },
    },

    description: {
        color: theme.white,
        maxWidth: 600,

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
            fontSize: theme.fontSizes.sm,
        },
    },

    control: {
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,

        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
    },
}));

function HeroBlock() {
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
                <span className="home_text">
                    Get Driven by <span>Data</span>
                </span>
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
}

export default HeroBlock;
