'use client';

import { paragraphs, teamItem } from '../utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';

const CarouselTeam = (props: any) => {
    const { setValue } = props;
    return (
        <Swiper
            direction={'horizontal'}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
                clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            onSlideChange={(swiper) => setValue(teamItem[swiper.activeIndex])}
            className="mySwiper"
        >
            <div style={{ display: 'flex' }}>
                {paragraphs?.map((item: any, index: any) => (
                    <SwiperSlide key={index + 1 * 2} id={`slide-${index}`}>
                        <div style={{width:'95%'}}>{item}</div>
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
    );
};
export default CarouselTeam;
