'use client';
import { CloudRefer } from '@/app/assets/cloudRefer';
import { ThemeIcon, Title, createStyles, Text, Stack } from '@mantine/core';
const useStyles = createStyles((theme) => ({}));
const MobBannerCard = (props:any) => {
    const {card} = props
    const { classes } = useStyles();
    return (
        <div className='cloudCard'>
            <Stack
                h={300}
                style={{width:'90%', margin:'10px auto', height:'auto'}}
            >
                <CloudRefer />
                <Title style={{fontSize:'16px' , color:'#CDCDCD'}}>{card.title}</Title>
                <Text  className='cloudCardText'>{card.text}</Text>
            </Stack>
        </div>
    );
};
export default MobBannerCard;
