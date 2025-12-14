import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DataMovie from '../../data/DataMovie';

// function Trailer() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const movie = DataMovie.find((m) => m.movie_id.toString() === id);

//   if (!movie) {
//     return <div className="trailer-not-found">Phim không tồn tại</div>;
//   }

//   const isYouTube =
//     movie.trailer_url.includes("youtube.com") ||
//     movie.trailer_url.includes("youtu.be");

//   return (
//     <div className="trailer-page">
//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Quay lại
//       </button>
//       <h2>{movie.title_vi}</h2>

//       {isYouTube ? (
//         <div className="trailer-video youtube-video">
//           <iframe
//             width="100%"
//             height="500px"
//             src={movie.trailer_url.replace("watch?v=", "embed/")}
//             title={movie.title_vi}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       ) : (
//         <video controls autoPlay className="trailer-video">
//           <source src={movie.trailer_url} type="video/mp4" />
//           Trình duyệt của bạn không hỗ trợ video.
//         </video>
//       )}
//     </div>
//   );
// }
// export default Trail

function Trailer() {
  return (
    <div className="trailer-container">
      {DataMovie.map((item, index) => (
        <img src={item.trailer_url} key={index} alt="" />
      ))}
    </div>
  );
}
export default Trailer;
