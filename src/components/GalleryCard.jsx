import React from 'react'

const GalleryCard = ({ colour, model, image }) => {
  return (
    <div className='gallery-card'>
      <div className='img-container'>
        <img src={image} alt="Phone" />
      </div>
      <div>
        <h4>{model}</h4>
        <button>View</button>
      </div>
    </div>
  )
}

export default GalleryCard