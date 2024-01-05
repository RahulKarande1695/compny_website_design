'use client';
import { Flex, Group, SimpleGrid, ThemeIcon, Title, createStyles } from '@mantine/core';
import { CloudChip } from '@/app/assets/cloudChip';
import MobBannerCard from './mobBannerCard';
import { CloudData } from '../webServicesSummary/utils';
const useStyles = createStyles((theme) => ({}));
const MobCloud = () => {
    const { classes } = useStyles();
    return (
        <div className='MobBannerCard'>
          
            <SimpleGrid cols={1} spacing="lg">
                {CloudData.map((item: any, index: any) => (
                    <MobBannerCard card={item} key={index + 1 * 19} id={`cloud-${index}}`}/>
                ))}
            </SimpleGrid>
        </div>
    );
};
export default MobCloud;
