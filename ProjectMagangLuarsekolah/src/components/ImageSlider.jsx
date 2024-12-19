import { useEffect, useState } from 'react';
import image1 from '../assets/images/kegiatan/26 April 2024 - 5 - Tengah.jpeg';
import image2 from '../assets/images/kegiatan/Screen Shot 2024-03-04 at 10.06.39.png';
import image3 from '../assets/images/kegiatan/Screenshot (150).png';
import image4 from '../assets/images/kegiatan/Screenshot_24.png';

const images = [image1, image2, image3, image4];

const ImageSlider = () => {
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    // Membuat array dengan gambar yang diulang 3 kali untuk efek infinite scroll
    const repeatedImages = [...images, ...images, ...images];
    setCurrentImages(repeatedImages);
  }, []);

  return (
    <div className="image-slider">
      {currentImages.map((image, index) => (
        <img 
          key={index}
          src={image} 
          alt={`Kegiatan Luar Sekolah ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;