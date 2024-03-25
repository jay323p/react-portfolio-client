import PropTypes from 'prop-types'
import PurpleGlossyBlurBadge from "../badges/PurpleGlossyBlurBadge"
import { motion } from "framer-motion"

const ExperienceCard = ({ badgeTitle, description, technologies, similarExperiences, date, employer }) => {
    return (
        <motion.div className='h-[30%] w-[75%] flex flex-col items-center text-white bg-coal pt-[2%] px-[2%] rounded-lg' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3, delay: 0.5 }}>
            <div className='smBottomBorder flex justify-evenly items-center'>
                <PurpleGlossyBlurBadge text={badgeTitle} />
                <div className='h-full w-[70%] flex flex-col translate-x-3'>
                    <h3 className='text-[11px] md:text-[14px] lg:text-[18px] text-bluePurple font-semibold'>{employer}</h3>
                    <h3 className='text-[10px] md:text-[12px]'>{date}</h3>
                </div>
            </div>
            <div className='h-[60%] w-full flex flex-col justify-center items-center'>
                <p className='h-[80%] text-[9px] md:text-[11px] lg:text-[13px] xxl:text-[15px] montFont overflow-y-scroll mb-[1rem] tall:mb-[8px] deskSm:mb-0'>{description}</p>
                <div className='h-[20%] w-full flex justify-evenly items-end text-[12px]'>
                    {similarExperiences.length > 0 ? similarExperiences.map((exp, i) => {
                        return <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3, delay: i }} className=' text-[8px] tall:text-[10px] md:text-[13px] text-bluePurple font-semibold montFont' key={exp}>{exp}</motion.h4>
                    }) : technologies.length > 0 ?
                        technologies.map((tech, i) => {
                            return <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3, delay: i }} src={tech} key={i} className='h-[26px] md:h-[30px] w-[26px] md:w-[30px] object-cover' alt="" />
                        })
                        : ''}
                </div>
            </div>
        </motion.div>
    )
}

ExperienceCard.propTypes = {
    badgeTitle: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.array,
    similarExperiences: PropTypes.array,
    date: PropTypes.string,
    employer: PropTypes.string,
}

export default ExperienceCard