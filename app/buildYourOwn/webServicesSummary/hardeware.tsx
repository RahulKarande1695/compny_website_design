'use client';
import { Button, Flex, Group, SimpleGrid, ThemeIcon, Title, createStyles } from '@mantine/core';
import ViewCard from './viewCard';
import BannerCard from './bannerCard';
import { HardwareData } from './utils';
import { ArrowDown } from '@/app/assets/arrowDown';
import { HardWareChip } from '@/app/assets/hardwareChip';
const useStyles = createStyles((theme) => ({}));
const Hardware = () => {
    const { classes } = useStyles();
    return (
        <>
        <div className='contener'></div>
            <Group position='center' className='hardwareTitle'>
                    <HardWareChip />
                <Title>Hardware</Title>
            </Group>
            <div className='simpleGridBox'>
            <SimpleGrid
                cols={2}                
                spacing="lg"
                style={{padding:'0 0vw 0 1vw'}}
                breakpoints={[
                    { maxWidth: '62rem', cols: 3, spacing: 'md' },
                    { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                    { maxWidth: '36rem', cols: 1, spacing: 'sm' },
                ]}
            >
                {HardwareData.map((item: any, index: any) => (
                    <ViewCard card={item} key={index + 1 * 28} 
                    id={`hardwareweb-${index}}`}/>
                ))}
            </SimpleGrid>
            </div>
            {/* <div style={{display:'flex' , justifyContent:'center', marginTop:'7vw' ,color:'#cdcccc'}}>
                <ArrowDown />
            </div> */}
        </>
    );
};
export default Hardware;
