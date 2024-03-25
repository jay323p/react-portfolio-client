import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PurpleGlossyBlurBadge from "../components/badges/PurpleGlossyBlurBadge"
import ThreeDButton from "../components/buttons/ThreeDButton"
import IPhone from '../components/devices/IPhone'
import MacBook from '../components/devices/Macbook'
import { myProjects } from "../data/objects";

const Projects = () => {
    const [lgScreen, setLgScreen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [project, setProject] = useState(myProjects['pdfInventory'])
    const { title, intro, moreInfo, techs, webLink, githubLink, phoneImg, laptopImg } = project

    const changeProject = (newProject) => {
        setIsLoading(true)
        setProject(newProject)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    const openLinkInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer")
    }

    useEffect(() => {
        const updateWindowWidth = () => {
            const newWidth = window.innerWidth;
            if (newWidth >= 1000) {
                setLgScreen(true)
            } else {
                setLgScreen(false)
            }
        };

        window.addEventListener("resize", updateWindowWidth);
        return () => window.removeEventListener("resize", updateWindowWidth)
    }, []);

    return (
        <div className='min-h-[100vh] w-[100vw] flex flex-col items-center relative'>
            <div className='h-[14%] md:h-[14%] w-full flex items-end justify-center playFont z-50 tall:translate-y-16 deskSm:translate-y-14 xxl:translate-y-24'>
                <h2 className='text-[30px] md:text-[36px] text-bluePurple font-semibold'>MY PROJECTS</h2>
            </div>
            <div className={`h-[70%] md:h-[66%] lg:h-[75%] w-full flex justify-evenly items-center bg-black md:px-[2%] lg:px-[4%] ${lgScreen ? "xxl:translate-x-[8%]" : "xxl:translate-x-0"} xxl:translate-y-10 relative`}>
                {!lgScreen ? <IPhone isLoading={isLoading} screenImg={phoneImg} />
                    :
                    <MacBook isLoading={isLoading} screenImg={laptopImg} />
                }
                <div className='h-full w-[50%] lg:w-[50%] flex flex-col justify-center gap-1 montFont font-semibold pr-[3%]'>
                    <div className="w-[75%] flex items-center">
                        <PurpleGlossyBlurBadge text={title} />
                    </div>
                    <p className='xl:w-[80%] text-[9px] pr-[1%] md:text-[12px] lg:text-[14px]'>{intro} <br /> <br /> {moreInfo} </p>
                    <h2 className='text-bluePurple text-[16px] md:text-[22px]'>Made With</h2>
                    <div className='flex gap-4 items-center'>
                        {techs?.map((tech, i) => {
                            return <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: i }} key={`tech-${i}`} src={tech} alt="" className='h-[20px] md:h-[30px] w-[20px] md:w-[30px]' />

                        })}
                    </div>
                    <div className='h-[10%] w-full flex justify-between xxl:justify-start xxl:gap-[10%] items-center pr-[10%]'>
                        <button className='w-[80px] md:w-[100px] md:h-[30px] text-center text-[12px] md:text-[14px]  text-red-400 border-[1px] border-red-400 rounded-full cursor-pointer hover:bg-red-400 hover:text-black' onClick={() => openLinkInNewTab(webLink)}>Website</button>
                        <button className='w-[80px] md:w-[100px] md:h-[30px] text-center text-[12px] md:text-[14px]  text-blue-400 border-[1px] border-blue-400 rounded-full cursor-pointer hover:bg-blue-400 hover:text-black' onClick={() => openLinkInNewTab(githubLink)}>Github</button>
                        <button className={`hidden thousandWidth:flex justify-center items-center w-[80px] md:w-[100px] md:h-[30px] text-center text-[12px] md:text-[14px] text-blue-400 border-[1px] border-bluePurple rounded-full cursor-pointer hover:bg-bluePurple hover:text-black'`} onClick={() => setLgScreen((p) => !p)}>{!lgScreen ? "Mac" : "Phone"}</button>
                    </div>
                </div>
            </div>
            <div className='h-[20%] lg:h-[15%] w-full flex justify-evenly items-center -translate-y-[4rem] md:translate-y-[-2rem]'>
                <ThreeDButton label={'PDF Inventory'} btnFxn={() => changeProject(myProjects['pdfInventory'])} />
                <ThreeDButton label={'Gamble Rehab'} btnFxn={() => changeProject(myProjects['gambleRehab'])} />
                <ThreeDButton label={'Chat App'} btnFxn={() => changeProject(myProjects['chatApp'])} />
                <ThreeDButton label={'Auto-Detail'} btnFxn={() => changeProject(myProjects['autoDetail'])} />
            </div>
        </div>
    )
}

export default Projects