'use client';

import { links2 } from '@/app/utils';
import { createStyles, Header, Container, Group, rem } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Overlay } from '@mantine/core';
import { useContext } from 'react';
import GlobalData from '@/app/context/context';
import { IntelliCar } from '@/app/assets/intelliCar';
const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '7rem',
        paddingRight: '7rem',
    },
    link: {
        display: 'inline-block',
        overflow: 'hidden',
        position: 'relative',
        top: '10px',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(8)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        transform: 'translateY(-20px)',
        color: 'transparent',
        fontSize: '0.8rem',
        fontWeight: 500,
        transition: 'transform 0.4s ease',
        fontFamily: 'Lato,sans-serif',

        '&:hover': {
            // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
        '&:before': {
            position: 'absolute',
            width: '100%',
            left: ' 0',
            top: '23px',
            padding: '11px 4%',
            content: 'attr(data-replace)',
            height: ' 100%',
            color: theme.colorScheme === 'dark' ? theme.white : '#D4540C',
            // backgroundColor: theme.white,
            transition: 'transform 0.4s ease',
            transform: 'translateY(0px)',
        },
        '&:after': {
            position: 'absolute',
            width: '100%',
            top: '-1px',
            left: '0',
            padding: ' 6px 4%',
            content: 'attr(data-replace)',
            height: ' 100%',
            color: theme.colorScheme === 'dark' ? theme.white : '#fff',
            // backgroundColor: theme.white,
            transition: 'transform 0.4s ease',
            transform: 'translateY(10px)',
        },
        '&:hover::after': {
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            transform: 'translateY(-20px)',
            // backgroundColor: theme.white,
        },
        '&:hover::before': {
            transform: 'translateY(-20px)',
        },
    },
}));

export function HeaderWebResponsive(props: any) {
    const { classes } = useStyles();
    const { contextFlag, setContextFlag, color }: any = useContext(GlobalData);
    const router = useRouter();
    const items = links2?.map((item: any, index: any) => {
        return (
            <li key={index + 1 * 37} id={`webheader-${index}}`}>
                <Link data-replace={item.label} href={item.link} replace className="pseudo-text-effect">
                    <span> {item.label}</span>
                </Link>
            </li>
        );
    });

    return (
        <div className="Header header_web_view">
            <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} className="tech mainHeader">
                <Container className={`maininnerHeader ${classes.inner}`} fluid style={{ background: color }}>
                    <Group onClick={() => router.push('/')} className="intellicarlogo">
                    <IntelliCar fillColor={"#E62C4C"}/>
                    </Group>
                    <nav>
                        {contextFlag === true ? (
                            <></>
                        ) : (
                            <Group spacing={5}>
                                <ul>{items}</ul>
                            </Group>
                        )}
                    </nav>
                </Container>
            </Header>
            <div className="overlay"></div>
        </div>
    );
}
export default HeaderWebResponsive;
