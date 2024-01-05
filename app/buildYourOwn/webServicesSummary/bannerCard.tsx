'use client';
import { CloudRefer } from '@/app/assets/cloudRefer';
import { ThemeIcon, Title, createStyles, Text, Stack } from '@mantine/core';
const useStyles = createStyles((theme) => ({}));
const BannerCard = (props:any) => {
    const {card} = props
    const { classes } = useStyles();
    return (
        <div className='cloudsubContainer'>
            <Stack
                // h={100}
                spacing={1}
                
            >
              <CloudRefer />
                <Title className='cloudCardTitle'>{card.title}</Title>
                <Text  className='cloudCardText'>{card.text}</Text>
            </Stack>
        </div>
    );
};
export default BannerCard;
