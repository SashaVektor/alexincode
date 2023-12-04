import { motion } from 'framer-motion'

const MotionWrapp = (Component: () => JSX.Element, classNames: string) => function HOC() {
    const notMobile = window.innerWidth > 768;
    return (
        <motion.div
            whileInView={{ y: [notMobile ? 100 : 0, notMobile ? 50 : 0, 0], opacity: [notMobile ? 0 : 1, notMobile ? 0 : 1, 1] }}
            transition={{ duration: notMobile ? 0.5 : 0 }}
            className={`${classNames} flex items-center justify-center`}
        >
            <Component />
        </motion.div>
    )
}

export default MotionWrapp