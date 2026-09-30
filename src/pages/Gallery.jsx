import GalleryCard from "../components/GalleryCard"
import { models } from "../constants"

const Gallery = () => {
  return (
    <section className='gallery'>
      <div>
        <div>
          <div className="mb-8">
            <h1>See each iPhone, at a glance.</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {models.map(({ name, image }) => (
            <GalleryCard model={name} image={image} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery