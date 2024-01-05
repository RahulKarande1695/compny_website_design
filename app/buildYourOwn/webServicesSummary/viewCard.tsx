'use client';
import { ArrowTr } from '@/app/assets/arrowTr';
import { Card, Group, Image, Text, ThemeIcon, createStyles } from '@mantine/core';
const useStyles = createStyles((theme) => ({}));
const ViewCard = (props: any) => {
    const { card } = props;
    const { classes } = useStyles();
    return (
        <Card className="applicationCard" key={props.key}>
            <Card.Section className="cardSectionHardware">
                <div className="hardwareImg">
                    <Image src={card.cardImage} alt="no image" height={80} className="cardImageHardware" />
                </div>
            </Card.Section>
            <Card.Section className="hardwareTextWrapper">
                <Group position="apart" spacing={10}>
                    <Text size={14} c={'#CCC'} className="groupTitle">
                        {card.title}
                    </Text>
                    <ArrowTr />
                </Group>
                <Text c={'#CDCDCD'} size={10} style={{ marginTop: '10px' }}>
                    {card.text}
                </Text>
            </Card.Section>
        </Card>
    );
};
export default ViewCard;
