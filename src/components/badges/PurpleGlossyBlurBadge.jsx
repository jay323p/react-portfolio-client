import PropTypes from 'prop-types'
const PurpleGlossyBlurBadge = ({ text, width }) => {
    return (
        <p className={`${width !== undefined ? width : 'w-auto'} text-center relative mb-4 inline-block overflow-hidden rounded-full border-[1px] border-[rgba(105,25,255,0.3)] bg-[rgba(105,25,255,0.1)] px-4 py-1 font-medium text-bluePurple text-[12px] tall:text-[14px] md:text-[16px] xxl:text-[20px] backdrop-blur-sm after:absolute after:inset-0 boxSlider z-40`} id="sourcecode-heading">{text}</p>
    )
}

PurpleGlossyBlurBadge.propTypes = {
    text: PropTypes.string,
    width: PropTypes.string,
}
export default PurpleGlossyBlurBadge