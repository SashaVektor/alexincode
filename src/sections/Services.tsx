import { useTranslation } from 'react-i18next'
import { services } from '../constants'
import AppWrapp from '../wrapper/AppWrapper'
import MotionWrapp from '../wrapper/MotionWrapper'
import { motion } from "framer-motion"

const Services = () => {
    const { t } = useTranslation()

    const notMobile = window.innerWidth > 768;

    return (
        <section className='flex flex-col items-center gap-6 md:gap-12 lg:gap-16 xl:gap-24 pt-16 lg:pt-24'>
            <div className='flex flex-col items-center text-center max-w-3xl gap-1 lg:gap-3'>
                <motion.h4
                    className='text-xl lg:text-2xl font-bold text-gradient uppercase tracking-widest'
                    initial={{ opacity: notMobile ? 0 : 1, scale: notMobile ? 0 : 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: notMobile ? 0.5 : 1 }}
                >
                    {t("services.firstTitle")}
                </motion.h4>
                <motion.p
                    className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.2]'
                    initial={{ opacity: notMobile ? 0 : 1, scale: notMobile ? 0.5 : 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: notMobile ? 0.5 : 0, delay: notMobile ? 0.5 : 0 }}
                >
                    {t("services.secondTitle")}
                </motion.p>
            </div>
            <div className='flex flex-wrap gap-6 md:gap-10 lg:gap-12 max-w-5xl'>
                {services.map((service) => (
                    <div key={service.title} className='flex flex-col gap-3 xl:gap-5'>
                        <motion.h4
                            className='text-xl lg:text-2xl font-bold'
                            initial={{ opacity: notMobile ? 0 : 1, scale: notMobile ? 0 : 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: notMobile ? 0.5 : 0, delay: notMobile ? 0.8 : 0 }}
                        >
                            {t(service.title)}
                        </motion.h4>
                        <motion.p
                            className='text-textgray leading-[1.3]'
                            initial={{ opacity: notMobile ? 0 : 1, scale: notMobile ? 0 : 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: notMobile ? 0.5 : 0, delay: notMobile ? 1.1 : 0 }}
                        >
                            {t(service.text)}
                        </motion.p>
                        <ul className='flex flex-col gap-2'>
                            {service.points.map((point) => (
                                <motion.li
                                    key={point}
                                    className='text-white font-bold flex gap-2 text-sm'
                                    initial={{ opacity: notMobile ? 0 : 1, scale: notMobile ? 0 : 1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: notMobile ? 0.5 : 0, delay: notMobile ? 1.4 : 0 }}
                                >
                                    <span className='w-1.5 h-1.5 min-w-[6px] bg-white rounded-full mt-[6px]' />
                                    <p>{t(point)}</p>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default AppWrapp(MotionWrapp(Services, 'flex-1'), 'services', '')