import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, rem } from '@mantine/core';

import { useCasesTabs } from '../utils';
import { features } from './utils';

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

export function UseCases() {
    const { classes } = useStyles();

    const items = features.map((feature: any, index: any) => (
        <div key={feature.title} id={`casesblock-${index}`}>
            <ThemeIcon size={44} radius="md" variant="gradient" gradient={{ deg: 133, from: 'blue', to: 'cyan' }}>
                <feature.icon size={rem(26)} stroke={1.5} />
            </ThemeIcon>
        </div>
    ));

    return (
        <div className={classes.wrapper}>
            <Grid gutter={80}>
                <Col span={12} md={5}>
                    <Title className={classes.title} order={2}>
                        Trusted by
                    </Title>
                    <Title className={classes.title} order={2}>
                        Industry Leaders
                    </Title>
                    <Text c="dimmed">
                        Meet the forward-thinking businesses transforming their operations with intellicar.
                    </Text>
                </Col>
                <Col span={12} md={7}>
                    <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                        {items}
                    </SimpleGrid>
                </Col>
            </Grid>
            <Title>Usecases</Title>
            <Text>
                View the industries harnessing the power or our IOT solutions for enhanced efficiency and growth
            </Text>
            <ul>
                {useCasesTabs.map((tabs: any, index: any) => (
                    <div key={index + 1 * 11} id={`caseslist-${tabs.designId}}`}>
                        <li>{tabs.tabName}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
}
