import React, { useEffect, useState } from 'react';
import './WaterBubble.scss';
import axiosClient from '../../api/axiosClient';

function WaterBubble() {
  const [combos, setCombos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCombos = async () => {
      try {
        const res = await axiosClient.get('/api/combos');
        setCombos(res.data);
      } catch (err) {
        console.log('lỗi load combo', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCombos();
  }, []);

  if (loading) {
    return <div className="waterbubble-container">Đang tải combo...</div>;
  }

  return (
    <div className="waterbubble-container">
      {combos.map((item, index) => (
        <div className="item" key={index}>
          <div className="img">
            <img src={item.image_url} alt={item.name} />
          </div>

          <div className="contents">
            <h3 className="name">{item.name}</h3>
            <p className="title">{item.description}</p>
            <span className="price">{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WaterBubble;
