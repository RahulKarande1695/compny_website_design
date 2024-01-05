import { createStyles, Overlay, Container, Title, Button, Text, rem, Center, SimpleGrid, Image } from '@mantine/core';
import { Clientele } from '../assets/clientele';
import { marqueeData } from './utils';

const useStyles = createStyles((theme) => ({}));

function Trust() {
    const { classes } = useStyles();

    return (
        <div className="trustedBox">
            <Container size={2000}>
                <Center>
                    <Title className="trustBoxTitle">
                        Trusted by<b> Industry Leaders</b>
                    </Title>
                </Center>
                <Center>
                    <Text className="trustedBoxText">
                        {' '}
                        Meet the forward-thinking businesses transforming their operations with Intellicar.
                    </Text>
                </Center>
                <div className="marquee">
                    <div className="marquee-content">
                        {marqueeData.map((marqueItem: any, indexOfItem: any) => (
                            <div className="marquee-item" key={indexOfItem + 1 * 13} id={`trust-${indexOfItem}}`}>
                                <Image src={marqueItem} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default Trust;
