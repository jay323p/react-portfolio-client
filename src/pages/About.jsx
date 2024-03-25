import stars from '../assets/stars.png'
import AboutCard from "../components/cards/AboutCard"

const About = () => {
    return (
        <div id='about' className='min-h-[100vh] w-full flex flex-col items-center relative interFont overflow-y-hidden'>
            {/* STATIC STARS */}
            <div id='stars' className={`min-h-[100vh] w-full flex justify-center items-center `} style={{ background: `url(${stars}) center center / cover`, height: '100%', backgroundAttachment: 'fixed' }}></div>
            {/* INFO CARDS */}
            <AboutCard badgeTitle={'WHO AM I'} cardTitle={'Full-Stack Web Developer'} align={'top'} description={'whoAmI'} />
            <AboutCard badgeTitle={'MY PASSIONS'} cardTitle={'Tackling Complexities'} align={'bottom'} description={'myPassions'} />
            {/* ANIMATED STARS */}
            <section className='section'>
                <span className='span'></span>
                <span className='span'></span>
                <span className='span'></span>
                <span className='span'></span>
                <span className='span'></span>
                <span className='span'></span>
                <span className='span'></span>
            </section>
        </div>
    )
}

export default About