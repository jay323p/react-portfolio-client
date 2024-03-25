import PurpleGlossyBlurBadge from "../badges/PurpleGlossyBlurBadge"
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const AboutCard = ({ badgeTitle, cardTitle, align, description }) => {
    return (
        <div className='h-[40vh] w-[75vw] md:w-[60vw] lg:w-[58vw] xxl:w-[56vw] flex justify-center items-center z-10 montFont'>
            <div className="animated-border-box-glow"></div>
            <div className={`h-[40vh] w-[75vw] md:w-[65vw] lg:w-[60vw] xl:w-[50vw] xxl:w-[40vw] flex flex-col items-center absolute bg-black bg-opacity-10 rounded-[1rem] blur1 pt-[1rem] z-20 p-[2%] animated-border-box ${align === 'top' ? 'top-[13%]' : 'bottom-[3%]'}`}>
                <div className="h-[15%] w-full flex justify-center items-center">
                    <PurpleGlossyBlurBadge text={badgeTitle} />
                </div>
                <motion.div className='h-[15%] md:h-[28%] w-full flex justify-center items-center text-[18px] tall:text-[24px] deskSm:text-[24px] md:text-[32px] lg:text-[38px] text-bright text-center brightness-200'>
                    {cardTitle}
                </motion.div>
                <div className='flex-grow w-[90%] md:w-full flex items-center justify-center overflow-y-scroll'>
                    {description === 'whoAmI' ? <p className='w-full md:w-[90%] xl:w-[90%] text-bright brightness-75 text-[10px] tall:text-[11px] deskSm:text-[12px] md:text-[13px] lg:text-[14px] xxl:text-[15px] p-[2px]'> Hello world, I&apos;m <span className="text-bluePurple font-semibold">Jay Patel</span>. <br /> <br />As a <span className="text-bluePurple font-semibold">self -taught developer</span> with a <span className="text-bluePurple font-semibold">pre-med background</span>, my dual passions channel into crafting innovative solutions that <span className="text-bluePurple font-semibold">marry</span> my <span className="text-bluePurple font-semibold">understanding of Biology</span> with the <span className="text-bluePurple font-semibold">power of technology</span>. This unique trajectory allows me to nurture my <span className="text-bluePurple font-semibold">creative side</span> while still making <span className="text-bluePurple font-semibold">meaningful impacts</span>, steering away from medicine to help people through the <span className="text-bluePurple font-semibold">language of code</span>.</p> : <p className='w-full md:w-[90%] xl:w-[90%] text-bright brightness-75 text-[10px] tall:text-[11px] deskSm:text-[12px] md:text-[13px] lg:text-[14px] xxl:text-[15px] p-[2px]'>From childhood, I&apos;ve been <span className="text-bluePurple font-semibold">captivated by intricate challenges</span> like solving Rubik&apos;s cubes, each with a mere one correct permutation out of 43 quintillion possibilities — resembling the <span className="text-bluePurple font-semibold">vastness of space</span>. Undaunted, I confront these challenges head-on, <span className="text-bluePurple font-semibold">discovering</span> the secrets to their complexities through <span className="text-bluePurple font-semibold">exploration</span>. This journey, applicable to any academic field, reflects my deep love for <span className="text-bluePurple font-semibold">perpetual learning</span>. My passions ultimately converge on the <span className="text-bluePurple font-semibold">ceaseless exploration of the universe&apos;s profound lessons</span>.
                    </p>}
                </div>
            </div>
        </div>
    )
}

AboutCard.propTypes = {
    badgeTitle: PropTypes.string,
    cardTitle: PropTypes.string,
    align: PropTypes.string,
    description: PropTypes.string,
}

export default AboutCard