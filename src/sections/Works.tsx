import { useTranslation } from 'react-i18next'
import ProjectCard from '../components/cards/ProjectCard'
import { projects } from '../constants'
import AppWrapp from '../wrapper/AppWrapper'
import MotionWrapp from '../wrapper/MotionWrapper'
import { motion } from "framer-motion"

const Works = () => {
    const { t } = useTranslation()
    const notMobile = window.innerWidth > 768;

    return (
        <section className='flex flex-col items-center gap-6 lg:gap-10 pt-16 lg:pt-24'>
            <div className='flex flex-col items-center text-center max-w-5xl gap-1 lg:gap-3'>
                <motion.h5
                    className='text-xl lg:text-2xl font-bold text-gradient uppercase tracking-widest'
                    initial={{ opacity: notMobile ? 0 : 1, scale: notMobile ? 0 : 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: notMobile ? 0.5 : 0 }}
                >
                    {t("works.firstTitle")}
                </motion.h5>
                <motion.p
                    className='text-lg lg:text-xl text-white leading-[1.3]'
                    initial={{ opacity: notMobile ? 0 : 1, scale: notMobile ? 0.5 : 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: notMobile ? 0.5 : 0, delay: notMobile ? 0.5 : 0 }}
                >
                    {t("works.secondTitle")}
                </motion.p>
            </div>
            <div className='flex justify-center gap-5 lg:gap-10 flex-wrap'>
                {projects.map((project, i) => (
                    <ProjectCard
                        key={project.name}
                        project={project}
                        index={i}
                    />
                ))}
            </div>
        </section>
    )
}

export default AppWrapp(MotionWrapp(Works, 'flex-1'), 'works', '')