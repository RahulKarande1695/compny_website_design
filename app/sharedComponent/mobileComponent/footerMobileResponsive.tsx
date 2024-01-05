'use client';
import { IntelliCar } from '@/app/assets/intelliCar';
import { createStyles, Text, Container, ActionIcon, Group, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    footer: {
        backgroundColor: '#282C2F',
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        // borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    },

    logo: {
        display: 'flex',
        gap: '10px',
    },

    description: {
        marginTop: rem(5),

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
            textAlign: 'center',
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        // borderBottom: '1px solid #5C606A',
        paddingBottom: '2%',
        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: '20px',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    wrapper: {
        // width: rem(200),
        marginLeft: rem(50),
        marginRight: rem(40),
        marginBottom:rem(20)
    },

    link: {
        display: 'block',
        color: '#B8BCC7',
        // fontSize: theme.fontSizes.sm,
        paddingTop: rem(3),
        paddingBottom: rem(3),
        lineHeight: rem(24),
        fontSize: rem(18),
        fontWeight: 300,

        '&:hover': {
            textDecoration: 'underline',
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 500,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: `calc(${theme.spacing.xs} / 2)`,
        color: 'var(--grey-200, #E9EDF9)',
    },

    afterFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    social: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
        },
    },

    bottomfooter: {
        // backgroundColor: '#191A1D',
        paddingTop: `calc(${theme.spacing.sm} * 2)`,
        paddingBottom: `calc(${theme.spacing.sm} * 2)`,
    },
}));

export function FooterMobileResponsive(props: any) {
    const { classes } = useStyles();
    const { data } = props;
    const groups = data?.map((group: any) => {
        const links = group.links.map((link: any, index: any) => (
            <Text<'a'>
            key={index + 1 * 32} 
            id={`footermobile-${index}}`}
                className={`${classes.link}  footerText`}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={`titleWrapper ${classes.wrapper}`} key={group.title}>
                <Text className={`groupTitle ${classes.title} `}>{group.title}</Text>
                {links}
            </div>
        );
    });
    return (
        <div className="footermain footer_mobile_view">
            <footer className="active">
                <Container className={`footerinnermain ${classes.inner}`}>
                    <div>
                        <Group className="footerSvg">
                        <IntelliCar fillColor={"#E62C4C"}/>
                        </Group>
                    </div>
                    <div>{groups}</div>
                </Container>
            </footer>
            <div className="footerDivider"></div>
            <footer className={`bottomfooter ${classes.bottomfooter}`} onClick={() => console.log('called')}>
                <Container className={`afterFooterContainer ${classes.afterFooter}`}>
                    <Group spacing={0} className={`socialGroupbox ${classes.social}`} position="right" noWrap>
                        <ActionIcon size="lg">
                            <img src="./facebook.svg" />
                        </ActionIcon>
                        <ActionIcon size="lg">
                            <img src="./twitter.svg" />
                        </ActionIcon>
                        <ActionIcon size="lg">
                            <img src="./linkedin.svg" />
                        </ActionIcon>
                    </Group>
                    <Text color="dimmed" size="sm" className="copyrightText">
                        © {new Date().getFullYear()} B.U.Z.Z. All rights reserved.
                    </Text>
                </Container>
            </footer>
        </div>
    );
}
export default FooterMobileResponsive;
