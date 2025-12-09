import React from 'react';
import './WaterBubble.scss';

function WaterBubble() {
  const dataWaterBubbles = [
    {
      img: 'https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/PICCONNEW/CNS035_COMBO_GAU.png?rand=1723084117',
      name: 'COMBO GẤU',
      title: '1 Coke 32oz + 1 Bắp 2 Ngăn 64OZ Phô Mai + Caramel',
      price: '120,000 VND',
    },
    {
      img: 'https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/PICCONNEW/CNS036_COMBO_CO_GAU.png?rand=1723084117',
      name: 'COMBO CÓ GẤU',
      title: '2 Coke 32oz + 1 Bắp 2 Ngăn 64OZ Phô Mai + Caramel',
      price: '150,000 VND',
    },
    {
      img: 'https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/PICCONNEW/CNS037_COMBO_NHA_GAU.png?rand=1723084117',
      name: 'COMBO NHÀ GẤU',
      title: '4 Coke 22oz + 2 Bắp 2 Ngăn 64OZ Phô Mai + Caramel',
      price: '250,000 VND',
    },
  ];

  return (
    <div className="waterbubble-container">
      {dataWaterBubbles.map((item, index) => (
        <div className="item" key={index}>
          <div className="img">
            <img src={item.img} alt={item.name} />
          </div>

          <div className="contents">
            <h3 className="name">{item.name}</h3>
            <p className="title">{item.title}</p>
            <span className="price">{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WaterBubble;
