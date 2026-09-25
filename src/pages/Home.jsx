import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const duoRef = useRef();

    useGSAP(() => {
        gsap.fromTo('duo-home', {
            opacity: 0, y: 50,
        }, {
            opacity: 1, y: 0, ease: 'power1.inOut',
        })
    }, []);
  return (
    <section className='home'>
        <div className='flex-center flex-col ml-10 mr-10'>
            <div className='duo-home' ref={duoRef}>
                <video src="/videos/duo-open.mov" className='rounded-2xl' autoPlay muted playsInline />
                <div className='duo-home-text'>
                    <h1 className='text-7xl font-bold'>iPhone Duo</h1>
                    <p className='text-3xl'>Hello, hello.</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4 items-center'>
                <div className='home-grid-box'>
                    <img src="/images/18pro-promo.jpg" alt="iPhone 18 Pro" />
                    <div>
                        <p>Pro, further.</p>
                    </div>
                </div>
                <div className='home-grid-box'>
                    <img src="/images/iphone-1st-promo.jpg" alt="iPhone Promo" />
                    <div>
                        <p>Discover the first iPhone.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home