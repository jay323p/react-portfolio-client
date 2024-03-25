import { socialsInfo } from '../../data/arrays.jsx'
import { MdNavigateNext } from "react-icons/md";


const SocialsContactCard = () => {
    const openLinkInNewTab = (url) => {
        if (url === '#') return
        window.open(url, "_blank", "noreferrer")
    }
    return (
        <>
            <div className="h-[354px] w-[236px] bg-[#6718f980] bg-opacity-50 rounded-lg"></div>
            <div className="h-[354px] w-[236px] flex flex-col items-center justify-start bg-bluePurple absolute translate-x-2 -translate-y-2 insetShadow px-[4%] py-[3%] rounded-lg">
                <div className="h-[12%] w-full flex items-center text-dark montFont insetShadow rounded-lg">
                    <h3 className='h-auto w-full text-center montFont font-semibold text-[18px]'>Socials</h3>
                </div>
                {socialsInfo.map((info) => {
                    return (
                        <div className="h-[12%] w-full flex justify-between items-center text-dark montFont font-semibold" key={info.id}>
                            <div className={`h-[30px] w-[30px] flex justify-center items-center`}>
                                {info.icon}
                            </div>
                            <h3 className={`text-[14px] flex items-center ${info.urlLink !== '#' ? 'cursor-pointer' : 'cursor-auto'} ${info.urlLink !== '#' ? 'underline' : null}`} onClick={() => openLinkInNewTab(info.urlLink)}>{info.urlLink !== '#' && <MdNavigateNext />}{info.label}</h3>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default SocialsContactCard