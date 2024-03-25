import { MatrixRainingLetters } from "react-mdr/dist/index.cjs"
import { motion } from 'framer-motion'
import PurpleGlossyBlurBadge from "../components/badges/PurpleGlossyBlurBadge"

const Hero = () => {

    const scrollToView = (page) => {
        const hero = document.getElementById('hero')
        const heroWindowHeight = hero.getBoundingClientRect().height
        const requestedPage = heroWindowHeight * page
        window.scrollTo({ top: requestedPage, behavior: 'smooth' })
    }
    const openLinkInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer")
    }
    return (
        <div id="hero" className='min-h-[100vh] w-full flex items-center justify-center radialFaded relative'>
            <MatrixRainingLetters custom_class="m-0 p-0 w-[90vw] h-[90vw] lg:w-[60vw] lg:h-[60vw] rounded-full brightness-200 radialFaded" />
            <div className='h-[50vh] w-[70vh] absolute flex flex-col items-center p-[4%]'>
                <div className="h-[10%] w-full flex justify-center items-center">
                    <PurpleGlossyBlurBadge text={'SOURCE CODE'} />
                </div>
                <motion.h1 initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2, delay: 2 }} className='text-bright text-[36px] tall:text-[48px] lg:text-[52px] font-semibold'>Into The Matrix</motion.h1>
                <motion.p initial={{ x: -3000 }} animate={{ x: 0 }} transition={{ duration: 1.5, delay: 2.5 }} className='w-[70%] md:w-full text-lightGray brightness-150 text-center text-[10px] deskSm:text-[12px] md:text-[14px] xl:text-[15px]'>Where <span className='text-bright'>words</span> turn into <span className='text-bright'>logic</span>; where computers <span className='text-bright'>digest</span> that logic and turn it into something <span className='text-bright'>beautiful</span>. <span className='text-bright'>useful</span>, and <span className='text-bright'>powerfull</span>! You can choose whatever <span className='text-bright'>pill</span> to swallow, in the end, the <span className='text-bright'>outcome will be the same!</span> </motion.p>
                <div className='h-[40%] w-full flex justify-center items-center xl:items-end gap-[10%]'>
                    <motion.button initial={{ x: -3000, y: 0 }} animate={{ x: 0, y: 0 }} transition={{ duration: 2, delay: 3 }} className='pillBtnRed h-[40px] w-[140px] interFont' onClick={() => openLinkInNewTab('https://github.com/jay323p')}>
                        <span className='pillSpanRed'>Red Pill</span>
                    </motion.button>
                    <motion.button initial={{ x: 3000, y: 0 }} animate={{ x: 0, y: 0 }} transition={{ duration: 2, delay: 3 }} className='pillBtnBlue h-[40px] w-[140px] interFont' onClick={() => scrollToView(3)}>
                        <span className='pillSpanBlue'>Blue Pill</span>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default Hero