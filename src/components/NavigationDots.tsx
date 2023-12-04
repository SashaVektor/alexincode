import { FC } from 'react'
import { headerLinks } from '../constants'
import { motion } from "framer-motion"

interface NavigationDotsProps {
    active: string
}

const NavigationDots: FC<NavigationDotsProps> = ({ active }) => {
    const notMobile = window.innerWidth > 768;

    return <div className='hidden sm:flex items-center justify-center p-5'>
        <motion.div
            className='flex flex-col items-center justify-center'
            whileInView={{ x: [notMobile ? 20 : 0, 0], opacity: [notMobile ? 0 : 1, 1] }}
            transition={{ duration: notMobile ? 0.5 : 0 }}
        >
            {headerLinks.map((item, i) => (
                <a
                    href={`#${item}`.replace("header.", "")}
                    key={item + i}
                    className={`${active === item .replace("header.", "") ? "bg-blue" : "bg-white"} w-3 h-3 rounded-full m-2 hover:bg-blue transition`}

                />
            ))}
        </motion.div>
    </div>
}

export default NavigationDots
