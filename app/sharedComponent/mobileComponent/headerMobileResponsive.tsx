'use client';

import { links2 } from '@/app/utils';
import { createStyles, Header, Container, Group, rem, Burger, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IntelliCar } from '@/app/assets/intelliCar';
import { useContext } from 'react';
import GlobalData from '@/app/context/context';
import { IntelliCarBlack } from '@/app/assets/intellicarBlack';
const HEADER_HEIGHT = rem(60);
export const burgerBottomImg = ['./facebook_burger.svg', './twitter_burger.svg', './linkdin_burger.svg'];
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

export function HeaderMobileResponsive(props: any) {
    const { color }: any = useContext(GlobalData);
    const { classes } = useStyles();
        const router = useRouter();
    const [opened, { toggle }] = useDisclosure(false);
    const items = links2?.map((item: any,index:any) => {
        return (
            <li key={index + 1 * 33} 
            id={`headerresponsivemob-${index}}`}>
                <Link data-replace={item.label} href={item.link} replace >
                    <span onClick={toggle}> {item.label}</span>
                </Link>
            </li>
        );
    });
    return (
        <div className="Header header_mobile_view">
            <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} className="tech mainHeader">
                <Container className={`maininnerHeader ${classes.inner}`} fluid style={{ background: color }}>
                    <Group onClick={() => router.push('/')} className="intellicarlogo">
                        <IntelliCar fillColor={"#E62C4C"}/>
                    </Group>
                    <div className={opened ? 'drawerGroup active' : 'drawerGroup inActive'}>
                        <div onClick={() => router.push('/')} className='intli_logo_mb'>
                            {/* <div style={{margin:'20px'}} onClick={toggle}> <IntelliCarBlack /></div> */}
                            <div onClick={toggle}> <IntelliCar fillColor={"#000"}/></div>
                        </div>
                        <Group spacing={5}>
                            <ul>{items}</ul>
                        </Group>
                        <div className="bottom-img-burger">
                            {burgerBottomImg?.map((element: any, index: any) => (
                                <Image key={index + 1 * 34} 
                                id={`mobileimaage-${index}}`} src={element} alt="No Image" />
                            ))}
                        </div>
                    </div>
                    <Burger color={opened?"#000":"#fff"} opened={opened} onClick={toggle} />
                </Container>
            </Header>
            <div className="overlay"></div>
        </div>
    );
}
export default HeaderMobileResponsive;
