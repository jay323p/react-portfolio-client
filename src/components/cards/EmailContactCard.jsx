import { contactInfo } from '../../data/arrays.jsx'
import jay from '../../assets/jay.png'

const EmailContactCard = () => {
    return (
        <>
            <div className="h-[354px] w-[236px] bg-[#6718f980] bg-opacity-50 rounded-lg"></div>
            <div className="h-[354px] w-[236px] flex flex-col items-center justify-start bg-bluePurple absolute translate-x-2 -translate-y-2 insetShadow px-[4%] py-[3%] gap-[1%] rounded-lg">
                {contactInfo.map((info) => {
                    return (
                        <div className="h-[14%] w-full flex justify-between items-center text-dark montFont font-semibold" key={info.id}>
                            {info.icon}
                            <h4 className="text-[14px]">
                                {info.label}
                            </h4>
                        </div>
                    )
                })}
                <div className="w-full flex-grow flex justify-center items-center bg-matteBlack bg-opacity-10 overflow-hidden rounded-lg">
                    <img src={jay} className="h-full w-full object-contain scale-110" alt="" />
                </div>
            </div>
        </>
    )
}

export default EmailContactCard