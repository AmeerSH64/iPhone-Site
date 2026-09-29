import { useGSAP } from '@gsap/react'
import { IconPlusFilled } from '@tabler/icons-react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const yearRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.year', { scale: 1 }, { scale: 10, scrollTrigger: {
      trigger: yearRef.current, scrub: true, start: 'top center', end: 'bottom center',
    } })
  }, []);

  return (
    <section id="timeline" className='timeline'>
      <div className="iPhone-2G">
        <div className='promo'>
          <div className='year'>
            <h1>2007</h1>
          </div>
          <div className='phone all-in-one'>
            <img src="/images/icons/iOS/phone.jpg" className='icon' alt="Phone Icon" />
            <div className='text'>
              <h3>Phone</h3>
              <p>Revolutionary Phone</p>
            </div>
          </div>
          <div>
            <IconPlusFilled className='text-black w-15 h-15' />
          </div>
          <div className='iPod all-in-one'>
            <img src="/images/icons/iOS/iPod.png" className='icon' alt="iPod Icon" />
            <div className="text">
              <h3>iPod</h3>
              <p>Widescreen iPod</p>
            </div>
          </div>
          <div>
            <IconPlusFilled className='text-black w-15 h-15' />
          </div>
          <div className="internet all-in-one">
            <img src="/images/icons/iOS/internet-icon.png" className='icon' alt="Internet Icon" />
            <div className="text">
              <h3>Internet</h3>
              <p>Breakthrough Internet Device</p>
            </div>
          </div>
          <div className='reveal'>
            <img src="/images/full/iPhone-2G.png" alt="iPhone" />
            <h2 className='text-black text-4xl text-center'>Say hello to iPhone.</h2>
          </div>
        </div>
      </div>
      <div className="iPhone-3G"></div>
    </section>
  )
}

export default Timeline