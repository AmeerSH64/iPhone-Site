import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const duoRef = useRef();
    const gridRef = useRef(null);
    const proRef = useRef(null);
    const firstRef = useRef(null);
    const airRef = useRef(null);
    const seventeenRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.duo-home', {
            opacity: 0, y: -50,
        }, {
            opacity: 1, y: 0, duration: 1.5, ease: 'power2.inOut',
        })
        gsap.fromTo('.duo-home-text h1', { opacity: 0, y: -50, }, { opacity: 1, y: 0, ease: 'power1.inOut', delay: 0.25 })
        gsap.fromTo('.duo-home-text p', { opacity: 0, y: -50, }, { opacity: 1, y: 0, ease: 'power1.inOut', delay: 0.5 })
        const parts = [gridRef.current, duoRef.current, proRef.current, firstRef.current, airRef.current, seventeenRef.current];
        parts.forEach((ref, index) => {
            gsap.fromTo(ref, { opacity: 0, y: -50, }, {
                opacity: 1, y: 0, ease: 'power1.inOut', duration: 1, delay: 0.3 * (index + 1),
                scrollTrigger: { trigger: ref, start: 'top 85%', once: true }
            })
        });
        
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
            <div className='grid grid-cols-2 gap-4 items-center' ref={gridRef}>
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
                <div className='home-grid-box'>
                    <video src="/videos/17-reveal.mov" className="rounded-2xl" autoPlay playsInline muted />
                    <div className="text-black">
                        <p>Magichromatic.</p>
                    </div>
                </div>
                <div className='home-grid-box'>
                    <video src="/videos/air-reveal.mov" className="rounded-2xl" autoPlay playsInline muted />
                    <div>
                        <p className="text-black">Discover the thinnest iPhone.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home