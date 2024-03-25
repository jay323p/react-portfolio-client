import PropTypes from 'prop-types'
const RedGlossyBlurBadge = ({ text }) => {
    return (
        <p className="md:w-[150px] relative mb-4 inline-block overflow-hidden rounded-full border-[1px] border-[rgba(229,108,108,0.3)] bg-[rgba(229,108,108,0.1)] px-4 py-1 text-center font-medium text-red-500 text-[10px] tall:text-[12px] deskSm:text-[14px] xxl:text-[16px] backdrop-blur-sm after:absolute after:inset-0 boxSliderRed z-40" id="sourcecode-heading">{text}</p>
    )
}

RedGlossyBlurBadge.propTypes = {
    text: PropTypes.string,
}
export default RedGlossyBlurBadge