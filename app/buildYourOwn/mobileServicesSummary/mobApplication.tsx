'use client';
import { Button, Flex, Group, SimpleGrid, ThemeIcon, Title, createStyles } from '@mantine/core';
import { ArrowDown } from '@/app/assets/arrowDown';
import { ApplicationChip } from '@/app/assets/applicationChip';
import MobViewCard from './mobViewCard';
import { ApplicationData } from '../webServicesSummary/utils';
const useStyles = createStyles((theme) => ({}));
const MobApplication = () => {
    const { classes } = useStyles();
    return (
        <>
            <SimpleGrid cols={1} spacing="lg" style={{gap:'0'}}>
                {ApplicationData.map((item: any, index: any) => (
                    <MobViewCard card={item} key={index + 1 * 18} id={`application-${index}}`} />
                ))}
            </SimpleGrid>
        </>
    );
};
export default MobApplication;
