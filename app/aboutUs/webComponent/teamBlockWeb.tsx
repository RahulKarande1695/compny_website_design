'use client';
import { createStyles, Title, Text, Image } from '@mantine/core';
import { useState } from 'react';
import { teamItem } from '../utils';
import CarouselTeam from '../customComponent/carouselTeam';
import 'swiper/css';
import 'swiper/css/pagination';
const useStyles = createStyles((theme) => ({
    control: {
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,

        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
    },
}));
export const TeamBlockWeb = () => {
    const { classes } = useStyles();
    const [value, setValue] = useState(teamItem[0]);
    return (
        <div className="aboutUsGrid team_block_web">
            <Title className="gridTitle">Meet our Team</Title>
            <Text className="gridText">Pull up a chair and meet the faces behind Intellicar</Text>
            <div className="aboutUsinnerGrid">
                <div className="innerGridleft">
                    <Image  maw={273} mx="auto" src={value.img} alt="Random image" />
                    <Title order={4} className="innerGridname">
                        {value.name}
                    </Title>
                    <Text className="innerGridText">{value.position}</Text>
                    <div className="bottomLine"></div>
                </div>
                <div className="innerGridright1">
                    <CarouselTeam setValue={setValue} />{' '}
                </div>
            </div>
        </div>
    );
};
export default TeamBlockWeb;
