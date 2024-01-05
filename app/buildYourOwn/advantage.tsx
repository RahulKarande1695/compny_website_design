import { createStyles, Container, Title, Text, Center, Image, SimpleGrid } from '@mantine/core';
import { AdvantagLock } from '../assets/advantageLock';
import { AdvantageShieldLock } from '../assets/advantageShieldLock2';
import { AdvantageGear } from '../assets/advantageGear3';
import { AdvantageTiltArrow } from '../assets/advantageTiltArrow';
import { intellicarAdvantage } from './utils';
import SlickSlider from '../components/SlickSlider';

const useStyles = createStyles((theme) => ({}));

export function Advantage() {
    const { classes } = useStyles();

    return (
        <div className="advantageContainer">
            <Container className="advantageSubContainer">
                <div>
                    <Center>
                        <Title className="advantageTitle">
                            Experience the <b>Intellicar Advantage</b>
                        </Title>
                    </Center>
                    <Center>
                        <Text className="advantageText">
                            With our Unparalleled Privacy, Security, and Safety, you bring a safe and reliable
                            competitive advantage to your business
                        </Text>
                    </Center>
                </div>
                <div className="slick_mobile">
                    <SlickSlider>
                        {intellicarAdvantage.map((item, index) => (
                            <div key={item.id} id={item.id} className="advantageGridItem card">
                                {index === 0 ? (
                                    <AdvantagLock />
                                ) : index === 1 ? (
                                    <AdvantageShieldLock />
                                ) : index === 2 ? (
                                    <AdvantageGear />
                                ) : (
                                    <AdvantageTiltArrow />
                                )}
                                <Title className="advantageGridTitle">{item.title}</Title>
                                <Text className="advantageGridText">{item.text}</Text>
                            </div>
                        ))}
                    </SlickSlider>
                </div>

                <SimpleGrid
                    cols={4}
                    spacing="lg"
                    breakpoints={[
                        { maxWidth: '62rem', cols: 3, spacing: 'md' },
                        { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                        { maxWidth: '36rem', cols: 1, spacing: 'sm' },
                    ]}
                    className="advantageGrid"
                >
                    {intellicarAdvantage.map((item: any, index: any) => (
                        <div key={item.id + 1 * 6} id={`advantageslide-${index}`} className="advantageGridItem">
                            {index === 0 ? (
                                <AdvantagLock />
                            ) : index === 1 ? (
                                <AdvantageShieldLock />
                            ) : index === 2 ? (
                                <AdvantageGear />
                            ) : (
                                <AdvantageTiltArrow />
                            )}
                            <Title className="advantageGridTitle">{item.title}</Title>
                            <Text className="advantageGridText">{item.text}</Text>
                        </div>
                    ))}
                </SimpleGrid>
            </Container>
        </div>
    );
}
export default Advantage;
