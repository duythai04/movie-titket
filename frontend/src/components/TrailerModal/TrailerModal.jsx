import React from 'react';
import './TrailerModal.scss';

function TrailerModal({ trailerUrl, onClose }) {
  if (!trailerUrl) return null;

  return (
    <div className="trailer-overlay" onClick={onClose}>
      <div className="trailer-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <iframe
          width="100%"
          height="100%"
          src={trailerUrl.replace('watch?v=', 'embed/')}
          title="Movie Trailer"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default TrailerModal;
