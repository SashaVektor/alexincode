import { FC } from 'react'
import { motion } from "framer-motion"
import { Tilt } from 'react-tilt'
import { useTranslation } from 'react-i18next'

interface SkillCardProps {
    skill: {
        title: string,
        icon: React.ReactNode
    },
    index: number
}

const SkillCard: FC<SkillCardProps> = ({ index, skill }) => {
    const { t } = useTranslation()
    const notMobile = window.innerWidth > 768;

    return (
        <Tilt className="w-[140px] sm:w-[200px] md:w-[250px]">
            <motion.div
                className="w-full green-pink-gradient p-[1px] rounded-2xl shadow-card"
                whileInView={{ y: [notMobile ? 50 : 0, 0], opacity: [notMobile ? 0 : 1, 1] }}
                transition={{ duration: notMobile ? 0.5 : 0, delay: notMobile ? (index / 3) : 0 }}
            >
                <div className="bg-[#151030] rounded-2xl py-3 lg:py-5 px-5 lg:px-12 min-h-[150px] sm:min-h-[200px] lg:min-h-[280px] flex flex-col justify-evenly items-center">
                    {skill.icon}
                    <h3 className='text-lg sm:text-xl font-bold text-center'>
                        {t(skill.title)}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

export default SkillCard