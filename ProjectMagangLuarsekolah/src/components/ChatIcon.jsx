import React from 'react';
import originalImage from '../assets/images/icons/cs_4.png';
import hoverImage from '../assets/images/cs_7.png';

const ChatIcon = () => {
  const handleMouseOver = (e) => {
    e.target.src = hoverImage;
  };

  const handleMouseOut = (e) => {
    e.target.src = originalImage;
  };

  return (
    <img
      src={originalImage}
      alt="Chat Icon"
      id="chatIcon"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
};

export default ChatIcon; 