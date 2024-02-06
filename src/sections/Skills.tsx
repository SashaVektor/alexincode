import { Tilt } from 'react-tilt'
import SkillCard from '../components/cards/SkillCard'
import { experiences, knowledges, skills } from '../constants'
import AppWrapp from '../wrapper/AppWrapper'
import MotionWrapp from '../wrapper/MotionWrapper'
import { motion } from 'framer-motion'
import { VerticalTimeline } from "react-vertical-timeline-component"
import ExperienceCard from '../components/cards/ExperienceCard'
import { useTranslation } from 'react-i18next'

const Skills = () => {
    const { t } = useTranslation()

    const notMobile = window.innerWidth > 768;

    return (
        <section className='flex flex-col items-center pt-16 lg:pt-24 gap-8 lg:gap-12'>
            <motion.h2
                className='text-3xl lg:text-4xl xl:text-5xl leading-[1.2] font-bold text-center text-gradient'
                initial={{ opacity: notMobile ? 0 : 1, scale: notMobile ? 0.2 : 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: notMobile ? 0.5 : 0 }}
            >
                {t("skills.title")}
            </motion.h2>
            <div className='flex flex-wrap items-center gap-5 lg:gap-10 justify-center'>
                {skills.map((skill, i) => (
                    <SkillCard
                        key={skill.title}
                        index={i}
                        skill={skill}
                    />
                ))}
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 place-items-center gap-5'>
                {knowledges.map((knowledge, i) => (
                    <Tilt key={knowledge.title}>
                        <motion.div
                            className='flex flex-col gap-1 items-center group cursor-pointer'
                            whileInView={{ y: [notMobile ? 30 : 0, 0], opacity: [notMobile ? 0 : 1, 1] }}
                            transition={{ duration: notMobile ? 0.3 : 0, delay: notMobile ? (i / 5) : 0 }}
                        >
                            <div className='w-16 h-16 min-w-[64px] rounded-full flex items-center justify-center bg-transparent border-2 border-textgray group-hover:border-gold transition duration-300'>
                                <img
                                    src={knowledge.image}
                                    alt={knowledge.title}
                                    className='w-1/2 h-1/2'
                                />
                            </div>
                            <p className='text-center text-white text-lg group-hover:text-gold transition duration-300'>
                                {knowledge.title}
                            </p>
                        </motion.div>
                    </Tilt>
                ))}
            </div>
            <div className='flex flex-col'>
                <VerticalTimeline animate={notMobile}>
                    {experiences.map((exp, i) => (
                        <ExperienceCard key={i} exp={exp} />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    )
}

export default AppWrapp(MotionWrapp(Skills, 'flex-1'), 'skills', '')
