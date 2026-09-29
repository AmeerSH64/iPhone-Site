import GalleryCard from "../components/GalleryCard"
import { models } from "../constants"

const Gallery = () => {
  return (
    <section className='gallery'>
      <div>
        <div>
          <div>
            <h1>See each iPhone, at a glance.</h1>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {models.map(({ name, image }) => (
            <GalleryCard model={name} image={image} />
          ))}
          
        </div>
      </div>
    </section>
  )
}

export default Gallery