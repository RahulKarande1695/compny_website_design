'use client';
import { Flex, Group, SimpleGrid, ThemeIcon, Title, createStyles } from '@mantine/core';
import ViewCard from './viewCard';
import BannerCard from './bannerCard';
import { CloudData } from './utils';
import { CloudChip } from '@/app/assets/cloudChip';
const useStyles = createStyles((theme) => ({}));
const Cloud = () => {
    const { classes } = useStyles();
    return (
        <div className='cloudContainer'>
            <Group  position='center' className='hardwareTitle'>
                <CloudChip />
                <Title>Cloud</Title>
            </Group>
            <SimpleGrid cols={2} spacing="lg" className='simpleGridBox'>
                {CloudData.map((item: any, index: any) => (
                    <BannerCard  card={item} key={index + 1 * 28} 
                    id={`cloudweb-${index}}`}/>
                ))}
            </SimpleGrid>
        </div>
    );
};
export default Cloud;
