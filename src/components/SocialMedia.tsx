import { motion } from "framer-motion"
import { socialLinks } from "../constants"
import SocialCard from "./cards/SocialCard"

const SocialMedia = () => {
    const notMobile = window.innerWidth > 768;

    return (
        <motion.div
            className='hidden sm:flex flex-col gap-4 justify-end items-end p-4'
            whileInView={{ x: [notMobile ? -50 : 0, 0], opacity: [notMobile ? 0 : 1, 1] }}
            transition={{ duration: notMobile ? 0.5 : 0 }}
        >
            {socialLinks.map((link) => (
                <SocialCard icon={link.icon} link={link.link} key={link.link} />
            ))}
        </motion.div>
    )
}

export default SocialMedia
