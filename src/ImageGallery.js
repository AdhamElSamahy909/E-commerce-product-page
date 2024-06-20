import { useState } from "react";

const imagesIndexes = Array.from({ length: 4 }, (_, i) => i);

function ImageGallery({
  onShowLightBox,
  // onIncrementIndex,
  // onDecrementIndex,
  // setIndex,
  // index,
}) {
  const [index, setIndex] = useState(0);

  function handleIncrementIndex() {
    setIndex((i) => (i === 3 ? 0 : i + 1));
  }

  function handleDecrementIndex() {
    setIndex((i) => (i === 0 ? 3 : i - 1));
  }

  return (
    <div className="gallery">
      <img
        src={`images/image-product-${index + 1}.jpg`}
        alt={`product ${index + 1}`}
        className="gallery__image"
        onClick={onShowLightBox}
      />
      <button
        className="gallery__btn gallery__btn--prev"
        onClick={handleIncrementIndex}
      >
        <img src="images/icon-previous.svg" alt="prev button" />
      </button>
      <button
        className="gallery__btn gallery__btn--next"
        onClick={handleDecrementIndex}
      >
        <img src="images/icon-next.svg" alt="next button" />
      </button>

      <div className="gallery__carousel">
        {imagesIndexes.map((imageIndex) => (
          <div
            className={`gallery__carouselImg  ${
              index === imageIndex ? "gallery__carouselImg--active" : ""
            }`}
            key={imageIndex}
          >
            <img
              key={imageIndex}
              src={`images/image-product-${imageIndex + 1}-thumbnail.jpg`}
              alt={`product ${imageIndex + 1} thumbnail`}
              className={`gallery__thumbnail ${
                index === imageIndex ? "gallery__thumbnail--active" : ""
              }`}
              onClick={() => setIndex(imageIndex)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
