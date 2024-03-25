import { useEffect, useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import EmailContactCard from "../components/cards/EmailContactCard";
import SocialsContactCard from "../components/cards/SocialsContactCard";
import DownloadResumeCard from "../components/cards/DownloadResumeCard";
import { sendContactEmail } from '../services/contactService';

const footerLinks = ['About', 'Experiences', 'Projects', 'Skills']
const formInitialState = {
    name: '',
    email: '',
    message: '',
}
const ContactMe = () => {
    const [sideInfo, setSideInfo] = useState('Contact')
    const [isLoading, setIsLoading] = useState(false)
    const [userForm, setUserForm] = useState(formInitialState)
    const { name, email, message } = userForm

    const handleFormChange = (e) => {
        setUserForm({ ...userForm, [e.target.name]: e.target.value })
    }

    const sendEmail = async (e) => {
        console.log(userForm)
        e.preventDefault()
        if (!name || name === '' || !email || email === '' || !message || message === '') {
            return alert('Please provide all fields')
        }

        setIsLoading(true)
        await sendContactEmail(userForm)
    }

    const scrollToPage = (page) => {
        const hero = document.getElementById('hero')
        const heroWindowHeight = hero.getBoundingClientRect().height
        const pageFix = page + 1
        const requestedPage = heroWindowHeight * pageFix
        window.scrollTo({ top: requestedPage, behavior: 'smooth' })
    }

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        }
    }, [isLoading])

    return (
        <div className="min-h-[100vh] w-full flex justify-center items-center brightness-105 relative z-0" >
            {isLoading && <>
                <div className="h-full w-full flex justify-center items-center">
                    <div className="h-[50%] w-[50%] flex flex-col justify-center items-center rounded-[1rem] bg-dark">
                        <div className="loader">Sending
                            <span></span>
                        </div></div> </div></>}
            {
                !isLoading && <>
                    <div className="animated-border-box-glow"></div>
                    <div className="mb-[4rem] tall:mb-0 max-h-[70%] lg:max-h-[60%] w-[80%] flex rounded-[1rem] animated-border-box">
                        <div className='max-h-full lg:w-2/3 w-full flex px-[4%] py-[1%]'>
                            <div className='hidden lg:flex flex-col items-start justify-center gap-[6%] h-full w-1/3'>
                                <div className={`h-[40px] w-[40px] border-bluePurple border-[1px] rounded-full flex justify-center items-center cursor-pointer hover:bg-bluePurple ${sideInfo === 'Contact' ? "bg-bluePurple brightness-110" : ""}`} onClick={() => setSideInfo('Contact')}>
                                    <AiOutlineMail className='text-[20px]' />
                                </div>
                                <div className={`h-[40px] w-[40px] border-bluePurple border-[1px] rounded-full flex justify-center items-center cursor-pointer hover:bg-bluePurple ${sideInfo === 'Socials' ? "bg-bluePurple brightness-110" : ""}`} onClick={() => setSideInfo('Socials')}>
                                    <IoShareSocialSharp className='text-[20px]' />

                                </div>
                                <div className={`h-[40px] w-[40px] border-bluePurple border-[1px] rounded-full flex justify-center items-center cursor-pointer hover:bg-bluePurple ${sideInfo === 'Resume' ? "bg-bluePurple brightness-110" : ""}`} onClick={() => setSideInfo('Resume')}><IoIosInformationCircleOutline className='text-[23px]' />

                                </div>
                            </div>
                            <div className='h-full lg:w-2/3 w-full flex flex-col items-center py-[1rem] xxl:py-[0px] montFont'>
                                <h2 className='lg:h-[15%] lg:w-full text-[24px] lg:text-[32px] lg:text-left text-center'>Let&apos;s <span className='font-semibold text-bluePurple'>Connect</span></h2>
                                <p className='text-[14px] xxl:text-[16px] lg:text-left text-center'>Interested in learning more about me or diving further into my <span className='font-semibold text-bluePurple'>matrix</span>? Please submit the form below and I will get back to you soon!</p>
                                <div className='h-full w-full flex justify-center md:justify-start py-[1rem]'>
                                    <form className='flex flex-col items-center gap-[10px]' onSubmit={sendEmail}>
                                        <div className='flex flex-col items-center max-w-[90%] deskSm:max-w-[100%]'>
                                            <label htmlFor="name" className='text-slate-400' >Your Name</label>
                                            <input type="text" name='name' value={name} onChange={(e) => handleFormChange(e)} className='w-[250px] deskSm:w-[300px] h-[30px] deskSm:h-[40px] outline-none px-[10px] bg-[#2d2f30] text-white rounded-[1rem] text-[14px] xxl:text-[16px]' />
                                        </div>
                                        <div className='flex flex-col items-center max-w-[90%] deskSm:max-w-[100%]'>
                                            <label htmlFor="email" className='text-slate-400' >Your Email</label>
                                            <input type="text" name='email' value={email} onChange={(e) => handleFormChange(e)} className='w-[250px] deskSm:w-[300px] h-[30px] deskSm:h-[40px] outline-none px-[10px] bg-[#2d2f30] text-white rounded-[1rem] text-[14px] xxl:text-[16px]' />
                                        </div>
                                        <div className='flex flex-col items-center max-w-[90%] deskSm:max-w-[100%]'>
                                            <label htmlFor="message" className='text-slate-400' >Your Message</label>
                                            <textarea className='w-[250px] deskSm:w-[300px] h-[100px] outline-none bg-[#2d2f30] text-white rounded-[1rem] text-[14px] xxl:text-[16px] px-[10px] py-[5px]' name='message' value={message} onChange={(e) => handleFormChange(e)} id="" cols="30" rows="10"></textarea>
                                        </div>
                                        <div className='flex justify-start items-center'>
                                            <button type='submit' value="Send" className='h-[30px] w-[100px] border-bluePurple border-[1px] hover:bg-bluePurple rounded-lg'>Send</button>
                                            <h1 className='text-white'>{process.env.REACT_APP_EMAILJS_PUBLIC_KEY}</h1>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                        <div className='hidden max-h-full lg:w-1/3 lg:flex justify-center items-center relative'>
                            {sideInfo === 'Contact' ? <EmailContactCard /> : sideInfo === 'Socials' ? <SocialsContactCard /> : sideInfo === 'Resume' ? <DownloadResumeCard /> : null}

                        </div>
                    </div>
                </>
            }
            <div className='absolute h-[15%] xxl:h-[12%] w-full  bottom-0 flex flex-col z-50'>
                <div className='h-1/2 w-full relative flex justify-center items-center gap-[10%] montFont border-t-[1px] border-bluePurple border-opacity-30 border-b-[1px] radialFadedFullTransparent text-[10px] md:text-[14px] lg:text-[16px]'>
                    {footerLinks.map((link, i) => {
                        return <h3 key={`footer-${link}-${i}`} className='cursor-pointer text-bluePurple hover:scale-110 transition-all ease-in-out duration-150' onClick={() => scrollToPage(i)}>{link}</h3>
                    })}
                </div>
                <div className="h-1/2 w-full flex justify-center items-center text-[12px] md:text-[14px] lg:text-[16px]">
                    <span className='font-bold text-bright cursor-pointer' >JAY&nbsp;</span> <span className='cursor-pointer ' >PATEL </span>
                    <span className='ml-[8px]'>&copy;</span>
                    <span className='ml-[8px] text-bluePurple'>2024</span>
                </div>
            </div>
        </div >
    )
}

export default ContactMe