import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, rem, Center } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import { IconPhoto } from '@tabler/icons-react';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
    wrapper: {
        padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: rem(36),
        fontWeight: 900,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
}));

export function AboutScale() {
    const { classes } = useStyles();

    return (
        <div className="aboutScale">
            <div className={`aboutSubScale ${classes.wrapper}`}>
                <Center>
                    <Title className="aboutScaleTitle">
                        Unleash the <b> Power of Data</b>{' '}
                    </Title>
                </Center>
                <Center>
                    <Text className="aboutScaleText">Transforming industries on a global scale</Text>
                </Center>
                <SimpleGrid
                    cols={4}
                    spacing="lg"
                    breakpoints={[
                        { maxWidth: '62rem', cols: 4, spacing: 'md' },

                        { maxWidth: '36rem', cols: 2, spacing: 'sm' },
                    ]}
                    className="aboutScaleGrid"
                >
                    <div>
                        <Title className="aboutScaleTitle">
                            <span>100K+</span>
                        </Title>
                        <Text className="aboutScaleText">INSTALLATION</Text>
                    </div>
                    <div>
                        <Title className="aboutScaleTitle">
                            <span>100K+</span>
                        </Title>
                        <Text className="aboutScaleText">CUSTOMERS</Text>
                    </div>
                    <div>
                        <Title className="aboutScaleTitle">
                            <span>200+</span>
                        </Title>
                        <Text className="aboutScaleText">TYPES OF VEHICLES</Text>
                    </div>
                    <div>
                        <Title className="aboutScaleTitle">
                            <span>100+</span>
                        </Title>
                        <Text className="aboutScaleText">CITIES</Text>
                    </div>
                </SimpleGrid>
            </div>
        </div>
    );
}
export default AboutScale;
