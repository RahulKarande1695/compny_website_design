'use client';
import { ArrowTr } from '@/app/assets/arrowTr';
import { Card, Group, Image, Text, ThemeIcon, createStyles } from '@mantine/core';
import { fontFamily } from 'html2canvas/dist/types/css/property-descriptors/font-family';
const useStyles = createStyles((theme) => ({}));
const MobViewCard = (props:any) => {
    const {card} = props
    const { classes } = useStyles();
    return (
        <Card style={{padding:'20px 20px 0 20px',backgroundColor:'#151515'}}>
            <Card.Section>
                <div style={{backgroundColor:'#393939', display:'flex', justifyContent:'center' ,borderRadius:'20px' , margin:'20px auto' , width:'90%'}}>
                    <img src={card.cardImage} alt="no image" className='HardwareCardImg'width={313} height={205} style={{objectFit:'contain', width:'70%'}} />
                </div>
            </Card.Section>

            <Card.Section style={{width:'100%' , margin:'10px auto'}}>
                <Group position="apart">
                    <Text fz="lg" fw={500} style={{color:'#ccc', fontSize:'16px', fontFamily:'Lato'}}>
                     {card.title}
                    </Text>
                        <ArrowTr />
                </Group>
                <Text fz="sm" mt="xs" className='SummaryCardText'  >
                   {card.text}
                </Text>
            </Card.Section>
        </Card>
    );
};
export default MobViewCard;
