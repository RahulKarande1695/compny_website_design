'use client';
import { createStyles, Text, Title } from '@mantine/core';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel } from 'swiper/modules';
import SlickSlider from '@/app/components/SlickSlider';
const useStyles = createStyles((theme) => ({}));
const dataOfValues = [
    {
        id: '1',
        title: 'Always Curious',
        text: 'We are about the people who use our products. We listen, we understand, and then we make things that solve real problem. We’re not just here to sell you something. We’re here to make your life easier. And we believe that when we put people first, success naturally follows.',
    },
    {
        id: '2',
        title: 'Customer-First',
        text: 'We are about the people who use our products. We listen, we understand, and then we make things that solve real problem. We’re not just here to sell you something. We’re here to make your life easier. And we believe that when we put people first, success naturally follows.',
    },
    {
        id: '3',
        title: 'Data  with Principles',
        text: 'We are about the people who use our products. We listen, we understand, and then we make things that solve real problem. We’re not just here to sell you something. We’re here to make your life easier. And we believe that when we put people first, success naturally follows.',
    },
    {
        id: '4',
        title: 'Always Curious',
        text: 'We are about the people who use our products. We listen, we understand, and then we make things that solve real problem. We’re not just here to sell you something. We’re here to make your life easier. And we believe that when we put people first, success naturally follows.',
    },
    {
        id: '5',
        title: 'Customer-First',
        text: 'We are about the people who use our products. We listen, we understand, and then we make things that solve real problem. We’re not just here to sell you something. We’re here to make your life easier. And we believe that when we put people first, success naturally follows.',
    },
    {
        id: '6',
        title: 'Data  with Principles',
        text: 'We are about the people who use our products. We listen, we understand, and then we make things that solve real problem. We’re not just here to sell you something. We’re here to make your life easier. And we believe that when we put people first, success naturally follows.',
    },
];
export const ValuesBlockMobile = () => {
    const { classes } = useStyles();
    const [number, setNumber] = useState(1);
    return (
        <div className="ourCoreValues values_block_mobile">
            <Title>Our Core Values</Title>
            {/* <Swiper slidesPerView={1} spaceBetween={30}  loop={true} mousewheel={true} modules={[Mousewheel]} >
                {dataOfValues.map((item) => (
                    <SwiperSlide className='mySwiper'>
                        <Title>{item.title}</Title>
                        <Text className="coreValuesText">{item.text}</Text>
                    </SwiperSlide>
                ))}
            </Swiper> */}
            <SlickSlider>
                {dataOfValues.map((item, i) => (
                    // <SwiperSlide className="mySwiper">
                    <div className="mySwiper" key={i}>
                        <Title>{item.title}</Title>
                        <Text className="coreValuesText">{item.text}</Text>
                    </div>
                    // </SwiperSlide>
                ))}
            </SlickSlider>
        </div>
    );
};
export default ValuesBlockMobile;
