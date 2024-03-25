import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Experiences from './pages/Experiences'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Skills from './pages/Skills'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SocialButtons from './components/buttons/SocialButtons'

const navModalLinks = ['Home', 'About', 'Experiences', 'Projects', 'Skills']

export const UserContext = React.createContext()
function App() {
    const [userSettings, setUserSettings] = useState({
        navOpen: false,
        sentContactEmail: false,
        showUserAlert: false,
        userAlert: ''
    })

    const scrollToView = (page) => {
        setUserSettings({ ...userSettings, navOpen: false })
        const navModal = document.getElementById('navScreenModal')
        const navModalWindowHeight = navModal.getBoundingClientRect().height
        const requestedPage = navModalWindowHeight * page
        setTimeout(() => {
            window.scrollTo({ top: requestedPage, behavior: 'smooth' })
        }, 700)
    }

    useEffect(() => {
        if (userSettings.navOpen) {
            const handleWindowResize = () => {
                if (window.innerWidth >= 768) {
                    setUserSettings({ ...userSettings, navOpen: false })
                }
            }
            window.addEventListener('resize', handleWindowResize)

            return () => {
                window.removeEventListener('resize', handleWindowResize);
            };
        }
    }, [userSettings])

    return (
        <UserContext.Provider value={{ userSettings, setUserSettings }}>
            {userSettings.navOpen ? <div id='navScreenModal' className="bg-black h-[100vh] max-w-[100vw] flex flex-col items-center overflow-hidden">
                <Navbar />
                <motion.div initial={{ y: -2000 }} animate={{ y: 0 }} transition={{ duration: 1 }} className="absolute flex flex-col items-center bottom-0 h-[90vh] w-full bg-black z-50">
                    {navModalLinks.map((navLink, i) => {
                        return <motion.div key={`${navLink}-modal-${i}`} className={`h-[10%] w-[90%] flex justify-start items-center montFont font-semibold text-[18px] px-[1rem] cursor-pointer text-[#fc7904] hover:bg-[#fc7904] hover:text-black halfBtmBorder z-50 ${i % 2 === 0 ? 'bg-black bg-opacity-10' : 'bg-black bg-opacity-40'}`} onClick={() => scrollToView(i)}>{navLink}</motion.div>
                    })}
                    <SocialButtons />
                </motion.div>
            </div> :
                <div className={`bg-black ${userSettings.navOpen ? 'h-[100vh]' : 'h-[600vh]'} max-w-[100vw] flex flex-col items-center overflow-hidden`}>
                    <Navbar />
                    <Hero />
                    <About />
                    <Experiences />
                    <Projects />
                    <Skills />
                    <ContactMe />
                </div>
            }
        </UserContext.Provider>
    )
}

export default App
