import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
const IPhone = ({ screenImg, isLoading }) => {
    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='h-full w-[40%] !scale-50  deskSm:!scale-[0.75] md:!scale-100'>
            <div className="outside-border" style={{ background: `url(${!isLoading && screenImg}) center center / contain`, backgroundRepeat: 'no-repeat' }}>
                {isLoading && <div className="loader">Loading
                    <span></span>
                </div>}
                <div className="silencer"></div>
                <div className="volume-up"></div>
                <div className="volume-down"></div>
                <div className="button-on"></div>
                <div className="inside-border">
                    <div className="camera">
                        <div className="camera-dot">
                            <div className="camera-dot-2"></div>
                            <div className="camera-dot-3"></div>
                        </div>
                        <div className="camera-speaker">
                        </div>
                    </div>
                    <div className="bottom-line"></div>
                </div>
            </div>
        </motion.section>
    )
}

IPhone.propTypes = {
    screenImg: PropTypes.any,
    isLoading: PropTypes.bool,
}
export default IPhone