'use client';
import { Button, Flex, Group, SimpleGrid, ThemeIcon, Title, createStyles } from '@mantine/core';
import { ArrowDown } from '@/app/assets/arrowDown';
import { HardWareChip } from '@/app/assets/hardwareChip';
import MobViewCard from './mobViewCard';
import { HardwareDataMobile } from '../webServicesSummary/utils';
const useStyles = createStyles((theme) => ({}));
const MobHardware = () => {
    const { classes } = useStyles();
    return (
        <>
           
            <SimpleGrid
                cols={1}
                spacing="lg"
                breakpoints={[
                    { maxWidth: '62rem', cols: 3, spacing: 'md' },
                    { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                    { maxWidth: '36rem', cols: 1, spacing: 'sm' },
                ]}
            >
                {HardwareDataMobile.map((item: any, index: any) => (
                    <MobViewCard card={item} key={index + 1 * 20} id={`hardware-${index}}`}/>
                ))}
            </SimpleGrid>
           
        </>
    );
};
export default MobHardware;
