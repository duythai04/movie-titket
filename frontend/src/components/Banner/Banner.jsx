import React from 'react';
import Slider from 'react-slick';
import './Banner.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const dataBanner = [
    {
      img: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019497.png&w=2048&q=75',
    },
    {
      img: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019485.jpg&w=2048&q=75',
    },
    {
      img: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019423.jpg&w=2048&q=75',
    },
    {
      img: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019421.jpg&w=2048&q=75',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,  
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <section className="banner-container">
      <Slider {...settings}>
        {dataBanner.map((item, index) => (
          <div className="item-banner" key={index}>
            <img src={item.img} alt={`banner-${index}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
