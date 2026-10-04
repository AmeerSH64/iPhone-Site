import { useState } from "react"
import GalleryCard from "../components/GalleryCard"
import { models } from "../constants"
import { IconXFilled } from "@tabler/icons-react";

const Gallery = () => {
  const [chosenModel, setChosenModel] = useState(null);
  const [selectedColour, setSelectedColour] = useState(null);

  const handleButtonPress = (model) => {
    setChosenModel(model);
    setSelectedColour(model.colours[0]?.name ?? null);
  }

  const handleClose = () => {
    setChosenModel(null);
    setSelectedColour(null);
  }

  return (
    <section className='gallery'>
      <div>
        <div>
          <div className="mb-8">
            <h1>See each iPhone, at a glance.</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {models.map((model, index) => (
            <GalleryCard key={index} model={model.name} image={model.image} onClick={() => handleButtonPress(model)} />
          ))}
        </div>
      </div>

      {chosenModel && (
        <div className="phone-display">
          {chosenModel.colours.map((colour, index) => (
            <div key={`${chosenModel.name}-${colour.name}-${index}`} className="phone-colours">
              <button onClick={handleClose} aria-label="Close colour options"><IconXFilled className="w-5 h-5" /></button>
              <div className="img-container">
                <img src={selectedColour.src ?? chosenModel.colours.src} alt={colour.name} />
              </div>
              <div className="options">
                <input
                  type="radio"
                  name={`colour-${chosenModel.name}`}
                  value={colour.name}
                  id={`colour-${chosenModel.name}-${index}`}
                  checked={selectedColour === colour}
                  onChange={() => setSelectedColour(colour)}
                />
                <label htmlFor={`colour-${chosenModel.name}-${index}`}>{colour.name}</label>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Gallery