'use client';
import { Title, Text, Image } from '@mantine/core';
import { teamItem } from '../utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';

export default function TeamBlockMobile() {
    return (
        <div className="aboutUsGrid team_block_mobile">
            <Title className="gridTitle">Meet our Team</Title>
            <Text className="gridText">Pull up a chair and meet the faces behind Intellicar</Text>
            <Swiper
                // rewind={true}
                navigation={true}
              
                keyboard={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <div className="aboutUsinnerGrid">
                    <div className="innerGridleft">
                        {
                            <div style={{ display: 'flex' }}>
                                {teamItem?.map((value: any, index: any) => (
                                    <SwiperSlide key={index + 1 * 3} id={`teamslide-${index}`}>
                                        <Image maw={174} mx="auto" src={value.img} alt="Random image" />
                                        <Title order={4} className="innerGridname">
                                            {value.name}
                                        </Title>
                                        <Text className="innerGridText">{value.position}</Text>
                                        <div className="bottomLine"></div>
                                        <div className='meetTeamText'>{value.text}</div>
                                    </SwiperSlide>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </Swiper>
        </div>
    );
}
