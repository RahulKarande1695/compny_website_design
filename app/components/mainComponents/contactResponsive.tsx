'use client';
import { createStyles, Button, Text, TextInput, Title } from '@mantine/core';
import { useState } from 'react';
const allDone = [
    { id: 1, name: 'Contact' },
    { id: 2, name: 'Requirements' },
    { id: 3, name: 'Contract' },
    { id: 4, name: 'Commisions' },
];
const useStyles = createStyles((theme) => ({
    title: {
        fontFamily: 'bai_jamjuree',
    },
}));

function ContactResponsive(props: any) {
    const { setMobileClose } = props;
    const { classes } = useStyles();
    const [flag, setFlag] = useState(false);

    return (
        <div className="contactResponsive">
            {flag ? (
                <div className="formallDone">
                    {/* <Title>All Done!</Title> */}

                    <Text className="rightgridText">Sit back and relax while we take care of the rest</Text>

                    <ul>
                        {allDone?.map((list: any, index: any) => (
                            <li
                                className={index === 0 ? 'act' : list?.name}
                                key={index + 1 * 29}
                                id={`contactresponsive-${index}}`}
                            >
                                <small>{index === 0 ? <img src="checkmark.png" /> : list?.id}</small>

                                <span>{list?.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="popupForm">
                    <div className="popupFormtopText">
                        <Title className={classes.title}>Lets Work Together!</Title>

                        <Text fw={700} fz="lg" className="leftgridText">
                            We just need a few details to get in touch with you and figure out the best way forward.
                        </Text>
                    </div>

                    <div className="popupFormtTextInput">
                        <TextInput placeholder="Name" />
                        <TextInput placeholder="Email" />
                        <TextInput placeholder="Phone number" />
                    </div>

                    <div className="popupFormtBottom">
                        <Button
                            onClick={() => {
                                setFlag(true);
                                setMobileClose(true);
                            }}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default ContactResponsive;
