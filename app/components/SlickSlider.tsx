import React, { Children } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SlickSlider(props: any) {
    const settings = {
        centerMode: true,
        infinite: true,

        centerPadding: props?.type == 'imageCard' ? '53px' : '33px',

        slidesToShow: 1,
        speed: 500,
        dots: false,
        arrows: false,
        swipe: true,
        responsive: [
            {
                breakpoint: 708, // Adjust this breakpoint as needed for mobile view
                settings: {
                    centerMode: true, // Disable center mode for larger screens
                },
            },
        ],
    };

    return (
        <div className="card-slider-container ">
            <Slider {...settings}>{props.children}</Slider>
        </div>
    );
}
