import React from 'react'

const GalleryCard = ({ colour, model, image, onClick }) => {
  return (
    <div className='gallery-card'>
      <div className='img-container'>
        <img src={image} alt="Phone" />
      </div>
      <div>
        <h4>{model}</h4>
        <button onClick={onClick}>View</button>
      </div>
    </div>
  )
}

export default GalleryCard