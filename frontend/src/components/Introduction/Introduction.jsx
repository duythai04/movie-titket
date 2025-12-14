import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import "./Introduction.scss";

function Introduction() {
  return (
    <div className="intro-container">
      <div className="intro-left">
        <img src={img1} alt="Intro visual 1" className="intro-img-left" />
      </div>

      <div className="intro-right">
        <div className="intro-image">
          <img src={img2} alt="Intro visual 2" className="intro-img-right" />
        </div>

        <div className="intro-content">
          <h3>Trình chiếu phim</h3>
          <h1>Khuyến mãi</h1>

          <div className="discount">
            <div className="discount-description">
              <p>
                Chỉ cần xuất trình thẻ sinh viên, bạn sẽ được giảm giá vé cực
                hấp dẫn, áp dụng cho hầu hết các suất chiếu trong ngày. Thỏa sức
                xem phim yêu thích, tiết kiệm chi phí và còn nhận thêm nhiều ưu
                đãi combo bắp nước. Nhanh tay rủ hội bạn đến rạp để săn deal
                ngay hôm nay!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
