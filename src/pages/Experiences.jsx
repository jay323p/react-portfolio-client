import { motion } from "framer-motion"
import { experiences } from "../data/arrays"
import ExperienceCard from "../components/cards/ExperienceCard"

const Experiences = () => {
    return (
        <div id="experienceSection" className='min-h-[100vh] w-[100vw] flex flex-col items-center justify-evenly playFont relative'>
            <div className='h-[10%] w-full flex items-center justify-center'>
                <h2 className='text-[30px] md:text-[36px] text-bluePurple font-semibold'>MY EXPERIENCES</h2>
            </div>
            <div className='h-[90%] w-full xxl:w-[80%] flex flex-col items-center justify-evenly relative'>
                <div className='h-full w-[1px] bg-slate-400 absolute left-7'></div>
                <motion.div className='h-[16px] w-[16px] rounded-full bg-bluePurple absolute left-[1.30rem] top-[15%]' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }} ></motion.div>
                <motion.div className='h-[16px] w-[16px] rounded-full bg-bluePurple absolute left-[1.30rem] top-[50%]' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }} ></motion.div>
                <motion.div className='h-[16px] w-[16px] rounded-full bg-bluePurple absolute left-[1.30rem] top-[82%]' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }} ></motion.div>
                {experiences.map((experience) => {
                    return <ExperienceCard key={experience.badgeTitle} badgeTitle={experience.badgeTitle} description={experience.description} technologies={experience.technologies} date={experience.date} employer={experience.company_name} similarExperiences={experience.similarExperiences} />
                })}
            </div>
        </div>
    )
}

export default Experiences