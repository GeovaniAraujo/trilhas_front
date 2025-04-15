import React from 'react';
import styles from './Gallery.module.css';

const images = [
  '../public/S8 camera aviadada.png',
  '../public/S8 camera aviadada.png',
  '../public/S8 camera aviadada.png',
  '../public/S8 camera aviadada.png',
  '../public/S8 camera aviadada.png',
];

const Gallery: React.FC = () => {
  return (
    <div className={styles.gallery}>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Imagem ${index + 1}`} className={styles.image} />
      ))}
    </div>
  );
};

export default Gallery;