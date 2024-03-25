import PropTypes from 'prop-types'

const ThreeDButton = ({ label, btnFxn }) => {
    return (
        <button type="button" className="btn z-50 interFont max-w-[4em] tall:max-w-[5em] md:min-w-[8em]" onClick={() => btnFxn()}>
            <div className="btn-top text-[10px] md:text-[12px]">{label}</div>
            <div className="btn-bottom"></div>
            <div className="btn-base"></div>
        </button>
    )
}

ThreeDButton.propTypes = {
    label: PropTypes.string,
    btnFxn: PropTypes.func
}
export default ThreeDButton