import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, rem } from '@mantine/core';
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

const features = [
    {
        icon: IconReceiptOff,
        title: 'Free and open source',
        description: 'All packages are published under MIT license, you can use Mantine in any project',
    },
    {
        icon: IconFileCode,
        title: 'TypeScript based',
        description: 'Build type safe applications, all components and hooks export types',
    },
    {
        icon: IconCircleDotted,
        title: 'No annoying focus ring',
        description: 'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
    },
    {
        icon: IconFlame,
        title: 'Flexible',
        description: 'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
    },
];

function Challenges() {
    const { classes } = useStyles();
    const [flag, setFlag] = useState(false);
    const items = features.map((feature: any, index: any) => (
        <div key={index + 1 * 12} id={`challenges-${index}}`}>
            <ThemeIcon size={44} radius="md" variant="gradient" gradient={{ deg: 133, from: 'blue', to: 'cyan' }}>
                <feature.icon size={rem(26)} stroke={1.5} />
            </ThemeIcon>
        </div>
    ));

    return (
        <div className={classes.wrapper}>
            <Grid gutter={80}>
                <Col span={12} md={5}>
                    <Title>Challenges</Title>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corporis, autem assumenda rem
                        possimus perspiciatis sint veritatis vero id! Voluptatum sunt vel temporibus sequi minus? Aut,
                        voluptatem fuga. Eos, neque?
                    </Text>
                    <SimpleGrid cols={3} spacing="sm">
                        <div onMouseEnter={() => setFlag(true)} onMouseLeave={() => setFlag(false)}>
                            <ThemeIcon radius="xl" size="xl">
                                <IconPhoto />
                            </ThemeIcon>
                            <label>Challenge</label>
                        </div>
                        <div>
                            <ThemeIcon radius="xl" size="xl">
                                <IconPhoto />
                            </ThemeIcon>
                            <label>Challenge</label>
                        </div>
                        <div>
                            <ThemeIcon radius="xl" size="xl">
                                <IconPhoto />
                            </ThemeIcon>
                            <label>Challenge</label>
                        </div>
                        <div>
                            <ThemeIcon radius="xl" size="xl">
                                <IconPhoto />
                            </ThemeIcon>
                            <label>Challenge</label>
                        </div>
                        <div>
                            <ThemeIcon radius="xl" size="xl">
                                <IconPhoto />
                            </ThemeIcon>
                            <label>Challenge</label>
                        </div>
                    </SimpleGrid>
                </Col>
                {flag && (
                    <Col span={12} md={7}>
                        <Title>challenge1</Title>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique neque culpa soluta
                            nobis, commodi facilis fuga alias, cupiditate rerum totam eligendi laboriosam. Nemo sequi
                            nobis ad non eius sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
                            alias cum! Soluta quod, neque laudantium maxime iusto similique omnis repellat cumque magnam
                            beatae minus repellendus! Tempore adipisci ea dicta consectetur.
                        </Text>
                    </Col>
                )}
                <Col span={12} md={7}>
                    <Title>Challenges</Title>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corporis, autem assumenda rem
                        possimus perspiciatis sint veritatis vero id! Voluptatum sunt vel temporibus sequi minus? Aut,
                        voluptatem fuga. Eos, neque?
                    </Text>
                </Col>
                <Col span={12} md={7}>
                    <Title>Challenges</Title>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corporis, autem assumenda rem
                        possimus perspiciatis sint veritatis vero id! Voluptatum sunt vel temporibus sequi minus? Aut,
                        voluptatem fuga. Eos, neque?
                    </Text>
                </Col>
                <Col span={12} md={7}>
                    <Title>Challenges</Title>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corporis, autem assumenda rem
                        possimus perspiciatis sint veritatis vero id! Voluptatum sunt vel temporibus sequi minus? Aut,
                        voluptatem fuga. Eos, neque?
                    </Text>
                </Col>
            </Grid>
        </div>
    );
}
export default Challenges;
