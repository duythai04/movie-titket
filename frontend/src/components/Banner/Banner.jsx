import React from 'react';
import Slider from 'react-slick';
import './Banner.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const dataBanner = [
    {
      img: 'https://www.elle.vn/app/uploads/2025/07/29/683885/Avatar-Lua-Va-Tro-Tan-Cuoc-chien-tan-khoc-nhat-loat-phim.jpg',
    },
    {
      img: 'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/t/c/tctk_thumb1stlook_16x9.jpg',
    },
    {
      img: 'https://i.ytimg.com/vi/PSTSeDekyOg/maxresdefault.jpg',
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
