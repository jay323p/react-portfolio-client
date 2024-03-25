import PropTypes from 'prop-types'
const BlueGlossyBlurBadge = ({ text }) => {
    return (
        <p className="md:w-[150px] relative mb-4 inline-block overflow-hidden rounded-full border-[1px] border-[#3b82f64c] bg-[#3b82f619] px-4 py-1 text-center font-medium text-blue-500 text-[10px] tall:text-[12px] deskSm:text-[14px] xxl:text-[16px] backdrop-blur-sm after:absolute after:inset-0 boxSliderBlue z-40" id="sourcecode-heading">{text}</p>
    )
}

BlueGlossyBlurBadge.propTypes = {
    text: PropTypes.string,
}
export default BlueGlossyBlurBadge