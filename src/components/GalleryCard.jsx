import React from 'react'

const GalleryCard = ({ colour, model, image }) => {
  return (
    <div>
        <img src={image.src} alt="Phone" />
        <div>
            <h4>{model}</h4>
        </div>
    </div>
  )
}

export default GalleryCard