'use client';
import { Button, Flex, Group, SimpleGrid, ThemeIcon, Title, createStyles } from '@mantine/core';
import ViewCard from './viewCard';
import BannerCard from './bannerCard';
import { ApplicationData } from './utils';
import { ArrowDown } from '@/app/assets/arrowDown';
import { ApplicationChip } from '@/app/assets/applicationChip';
const useStyles = createStyles((theme) => ({}));
const Application = () => {
    const { classes } = useStyles();
    return (
        <div className="applicationBoxInner">
            <Group position="center" className="applicationGroup hardwareTitle">
                <ApplicationChip />
                <Title>Application</Title>
            </Group>
            <SimpleGrid cols={2} spacing="sm" className="applSimpleGrid simpleGridBox">
                {ApplicationData.map((item: any, index: any) => (
                    <ViewCard card={item} className="gridViewCard" key={index} />
                ))}
            </SimpleGrid>
            {/* <div style={{display:'flex' , justifyContent:'center', marginTop:'7vw'}}>
                <ArrowDown />
            </div> */}
        </div>
    );
};
export default Application;
