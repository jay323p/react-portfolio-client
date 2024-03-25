import { useContext } from "react"
import { UserContext } from "../App"

// import { AiOutlineMenu } from "react-icons/ai"
const navLinks = ['Home', "About", "Experiences", "Projects", 'Skills']

const Navbar = () => {
    const { userSettings, setUserSettings } = useContext(UserContext)
    const { navOpen } = userSettings

    const scrollToView = (page) => {
        // user wants contact me page while in nav modal handling
        if (page === 5 && navOpen) {
            console.log('in hereeeeeeeeeeeeeeee')
            setUserSettings({ ...userSettings, navOpen: false })
            const navModal = document.getElementById('navScreenModal')
            const navModalWindowHeight = navModal.getBoundingClientRect().height
            const requestedPage = navModalWindowHeight * page
            setTimeout(() => {
                window.scrollTo({ top: requestedPage, behavior: 'smooth' })
            }, 700)
        } else {
            // non nav modal handling
            const hero = document.getElementById('hero')
            const heroWindowHeight = hero.getBoundingClientRect().height
            const requestedPage = heroWindowHeight * page
            window.scrollTo({ top: requestedPage, behavior: 'smooth' })
        }
    }

    const handleCheckBoxChange = () => {
        setUserSettings({ ...userSettings, navOpen: !navOpen })
    }

    return (
        <>
            <div className='fixed h-[10vh] w-[100%] deskSm:w-[90%] md:w-full flex justify-center items-center p-[3%] zfix blur1'>
                <nav className='relative w-[90%] h-[7vh] border-0.5 navBorder rounded-[2rem] flex items-center px-[3%]'>
                    <input type="checkbox" id="checkbox" checked={userSettings.navOpen} onChange={() => handleCheckBoxChange()} />
                    <label htmlFor="checkbox" className="toggle z-50 md:hidden">
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>
                    <div className='hidden md:flex text-bright h-full w-[40%] items-center interFont'>
                        <ul className='w-full flex items-center gap-[5%] xl:gap-[7%] md:text-[8px] lg:text-[12px] z-50'>
                            {navLinks.map((link, i) => {
                                return <li key={`${link}-${i}`}><h3 className="navLinkTag  cursor-pointer" onClick={() => scrollToView(i)}>{link}</h3></li>
                            })}
                        </ul>
                    </div>
                    <div className='h-full w-full -translate-x-4 md:translate-x-0 flex justify-center items-center text-gray-300 absolute playFont font-light text-[16px] deskSm:text-[18px] md:text-[20px] tracking-widest navTitle'>
                        <span className='font-bold text-bright cursor-pointer navTitleSpan' onClick={() => scrollToView(0)}>JAY&nbsp;</span> <span className='cursor-pointer navTitleSpanInner' onClick={() => scrollToView(0)}>PATEL</span>
                    </div>
                    <div className='h-full w-[30%] md:w-[30%] flex justify-end items-center text-gray-300 playFont font-light text-[20px] absolute right-3 md:right-5'>
                        <button className='h-[70%] w-[70%] md:w-[40%] rounded-[1rem] md:rounded-[2rem] navBtn text-[12px]' onClick={() => scrollToView(5)}>Contact Me</button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar