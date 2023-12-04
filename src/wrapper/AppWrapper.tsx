import NavigationDots from "../components/NavigationDots"
import SocialMedia from "../components/SocialMedia"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"



const AppWrapp = (Component: () => JSX.Element, idName: string, classNames: string) => function HOC() {
    const { t } = useTranslation();
    const notMobile = window.innerWidth > 768;
    return (
        <div
            id={idName} className={`flex w-full min-h-[100dvh] ${classNames}`}
        >
            <SocialMedia />
            <div className='flex items-center justify-center flex-col gap-5 flex-1 px-6 md:px-10 lg:px-12 xl:px-16 py-4 md:py-6 xl:py-8'>
                <Component />
                <motion.div
                    className='hidden sm:flex flex-col items-end justify-end ml-auto'
                    whileInView={{ x: [notMobile ? 30 : 0, 0], opacity: [notMobile ? 0 : 1, 1] }}
                    transition={{ duration: notMobile ? 0.5 : 0 }}
                >
                    <p className='uppercase'>@{new Date().getFullYear()} {t('wrapper.name')}</p>
                    <p className='uppercase'>{t('wrapper.text')}</p>
                </motion.div>
            </div>
            <NavigationDots active={idName} />
        </div>
    )
}

export default AppWrapp