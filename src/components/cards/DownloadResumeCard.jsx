import { Link } from 'react-router-dom'

const DownloadResumeCard = () => {
    return (
        <>
            <div className="h-[354px] w-[236px] bg-[#6718f980] bg-opacity-50 rounded-lg"></div>
            <div className="h-[354px] w-[236px] flex flex-col items-center justify-start gap-[5%] bg-bluePurple absolute translate-x-2 -translate-y-2 insetShadow px-[4%] py-[3%] rounded-lg">
                <div className="h-[12%] w-full flex items-center text-dark montFont insetShadow rounded-lg">
                    <h3 className='h-auto w-full text-center montFont font-semibold text-[18px]'>More Info</h3>
                </div>
                <div className="h-[50%] w-full p-[2%]">
                    <p className="h-full w-full montFont text-[13px] text-center text-black">Thank you for visiting my portfolio site! <br /> <br />I would love any and all feedback as well as employment considerations - please do check out my resume if interested below!</p>
                </div>
                <div className="flex-grow w-full flex justify-center items-center">
                    <Link to="/assets/inventoryInitialSetup.pdf" target="_blank" className='h-[30px] w-[200px] flex items-center justify-center font-semibold montFont border-black border-[1px] hover:bg-black hover:text-bluePurple text-black rounded-[10px] insetShadowPurple'>View Resume</Link>

                </div>
            </div>
        </>
    )
}

export default DownloadResumeCard