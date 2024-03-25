import BlueGlossyBlurBadge from "../components/badges/BlueGlossyBlurBadge"
import PurpleGlossyBlurBadge from "../components/badges/PurpleGlossyBlurBadge"
import RedGlossyBlurBadge from "../components/badges/RedGlossyBlurBadge"
import { frontendSkills, backendSkills } from '../data/arrays'

const Skills = () => {
    return (
        <div className="min-h-[100vh] w-[100vw] flex flex-col items-center gap-[2rem] relative px-[8px] md:px-[2rem] lg:px-[10%]">
            <span id="redBlur" className="h-1/3 w-1/5 red_gradient absolute right-[-10%] md:right-[-20%] bottom-0 md:bottom-0 z-[1]"></span>
            <span id="blueBlur" className="h-1/2 w-1/5 blue_gradient absolute left-[-10%] md:left-[-20%] top-[10%] md:top-[10%] z-[1]"></span>
            <div className='h-[15%] md:h-[25%] w-full flex items-center md:items-end justify-center playFont z-50 translate-y-10 md:-translate-y-4'>
                <h2 className='text-[30px] md:text-[36px] text-bluePurple font-semibold'>MY SKILLS</h2>
            </div>
            <div className="h-[40%] lg:h-[36%] w-full xxl:w-[90%] flex flex-col px-[2rem] xxl:px-[4rem] translate-y-4">
                <div className="h-[20%] w-full flex items-center">
                    <PurpleGlossyBlurBadge text={'FRONTEND'} width={"w-[150px] md:w-[190px]"} />
                </div>
                <div className="h-[80%] lg:h-[70%] w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xxl:grid-cols-6 py-[2rem] lg:py-[1rem]">
                    {frontendSkills.map((skill) => {
                        return <div className="" key={skill.label}>
                            <RedGlossyBlurBadge key={skill.label} text={skill.label} />
                        </div>
                    })}
                </div>
            </div>
            <div className="h-[40%] lg:h-[36%] w-full xxl:w-[90%]  flex flex-col px-[2rem] xxl:px-[4rem] translate-y-4">
                <div className="h-[20%] w-full flex items-center">
                    <PurpleGlossyBlurBadge text={'BACKEND'} width={"w-[150px] md:w-[190px]"} />
                </div>
                <div className="h-[80%] lg:h-[70%] w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xxl:grid-cols-6 py-[2rem] lg:py-[1rem]">
                    {backendSkills.map((skill) => {
                        return <div className="" key={skill.label}>
                            <BlueGlossyBlurBadge key={skill.label} text={skill.label} />
                        </div>
                    })}
                </div>
            </div>


        </div>
    )
}

export default Skills