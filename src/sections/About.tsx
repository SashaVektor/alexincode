import AppWrapp from '../wrapper/AppWrapper'
import MotionWrapp from '../wrapper/MotionWrapper'
import me from "../assets/alex.png"
import cv from "../assets/CV_Alex.pdf"
import { motion } from "framer-motion"
import { useAppDispatch } from '../store/hooks'
import { setIsContactModalOpen } from '../store/slices/modalSlice'
import { useTranslation } from "react-i18next"

const About = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation()

    const notMobile = window.innerWidth > 768;

    return (
        <section className='pt-10 md:pt-12 lg:pt-24'>
            <div className='flex flex-col-reverse md:flex-row gap-0 md:gap-10 lg:gap-20'>
                <div className='max-w-xl lg:max-w-2xl'>
                    <div className='flex flex-col mb-5 lg:mb-9'>
                        <motion.h2
                            className='text-3xl lg:text-5xl xl:text-7xl leading-[1.2] text-gradient font-bold'
                            whileInView={{ x: [notMobile ? -100 : 0, 0], opacity: [notMobile ? 0 : 1, 1] }}
                            transition={{ duration: notMobile ? 0.5 : 0 }}
                        >
                            {t('about.firstTitle')}
                        </motion.h2>
                        <motion.h2
                            className={`text-3xl lg:text-5xl xl:text-7xl font-bold`}
                            whileInView={{ x: [notMobile ? -100 : 0, 0], opacity: [notMobile ? 0 : 1, 1] }}
                            transition={{ duration: notMobile ? 0.5 : 0, delay: notMobile ? 0.3 : 0 }}
                        >
                            {t('about.secondTitle')}
                        </motion.h2>
                    </div>
                    <motion.p
                        className='text-textgray text-sm sm:text-base lg:text-lg xl:text-xl mb-5 lg:mb-10'
                        whileInView={{ x: [notMobile ? -100 : 0, 0], opacity: [notMobile ? 0 : 1, 1] }}
                        transition={{ duration: notMobile ? 0.5 : 0, delay: notMobile ? 0.6 : 0 }}
                    >
                        {t('about.mainText')}
                    </motion.p>
                </div>
                <motion.div
                    className='mx-auto md:mx-0 min-w-[150px] w-[150px] md:min-w-[200px] lg:min-w-[250px] md:w-[300px] h-[300px] lg:h-[350px] xl:h-[450px]'
                    initial={{ opacity: notMobile ? 0 : 1, scale: notMobile ? 0.2 : 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: notMobile ? 0.5 : 0, delay: notMobile ? 0.3 : 0 }}
                >
                    <img
                        src={me}
                        alt="alex veklych"
                        className='w-full h-full object-contain'
                    />
                </motion.div>
            </div>
            <motion.div
                className='flex items-center gap-5 lg:gap-8 md:-mt-4 lg:-mt-8 xl:-mt-16'
                whileInView={{ x: [notMobile ? -100 : 0, 0], opacity: [notMobile ? 0 : 1, 1] }}
                transition={{ duration: notMobile ? 0.5 : 0, delay: notMobile ? 1 : 0}}
            >
                <button
                    onClick={() => dispatch(setIsContactModalOpen())}
                    className='bg-blue border-2 border-blue px-5 py-2 rounded-lg text-white hover:bg-transparent transition duration-300'
                >
                    {t('about.button1Text')}
                </button>
                <a
                    href={cv}
                    download
                    className='bg-transparent text-textgray px-5 py-2 rounded-lg border-2 border-textgray hover:bg-white hover:text-black hover:border-white transition duration-300'>
                    {t('about.button2Text')}
                </a>
            </motion.div>
        </section>
    )
}

export default AppWrapp(MotionWrapp(About, 'flex-1'), 'about', '')
