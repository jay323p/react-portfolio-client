import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
const MacBook = ({ screenImg, isLoading }) => {
    return (
        <motion.div initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }} className="laptop z-[50]">
            <div className="screen">
                <div className="lcd">
                    {!isLoading ?
                        <img src={screenImg} className={`h-full aspect-auto`} />
                        : <div className="loader">Loading
                            <span></span>
                        </div>}
                </div>
                <div className="glass_frame"></div>
                <div className="screen_reflection"></div>
            </div>
            <div className="keyboard top"></div>
            <div className="keyboard bottom"></div>
        </motion.div>
    )
}

MacBook.propTypes = {
    screenImg: PropTypes.any,
    isLoading: PropTypes.bool
}
export default MacBook