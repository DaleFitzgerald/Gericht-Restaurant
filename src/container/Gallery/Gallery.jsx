import React, { useRef } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {

    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  return (
    <div className="app__gallery flex__center" id="gallery">

      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos aperiam tempore dolorum quas recusandae nam tempora voluptate, quis perspiciatis.
        </p>
        <button type="button" className="custom__button">View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages && galleryImages.map(
            (image, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery__img-${index + 1}`}>
                <img src={image} alt="" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            )
          )}
        </div>
        <BsArrowLeftShort className="gallery__arrow-icon_left" onClick={() => scroll('left')} />
        <BsArrowRightShort className="gallery__arrow-icon_right" onClick={() => scroll('right')} />
      </div>
    </div>
  );
}

export default Gallery;
