import { useAppDispatch } from "../store/hooks"
import { setIsContactModalOpen } from "../store/slices/modalSlice";
import AppWrapp from "../wrapper/AppWrapper"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const Home = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation()

    const language = localStorage.getItem("i18nextLng")

    return (
        <section className="flex-1 flex items-center justify-center pt-12 lg:pt-24">
            <div className="flex flex-col items-center gap-24 xl:gap-32">
                <motion.div
                    className="flex flex-col items-center gap-1 sm:gap-3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3}}
                >
                    <h1 className={`${language === "en" ? "text-[44px]" : "text-[38px]"} sm:text-[42px] lg:text-5xl xl:text-6xl font-bold text-center leading-[1.1]`}>
                        {t('home.firstTitle')}
                    </h1>
                    <h2 className={`${language === "en" ? "text-5xl" : "text-[42px]"} leading-[1] sm:text-5xl lg:text-6xl xl:text-7xl text-gradient text-center`}>
                        {t('home.secondTitle')}
                    </h2>
                </motion.div>
                <div className="flex flex-col gap-5 lg:gap-7 xl:gap-10 items-center">
                    <motion.p
                        className="font-medium text-xl lg:text-2xl xl:text-3xl max-w-[350px] sm:max-w-lg lg:max-w-xl text-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        {t('home.mainText')}
                    </motion.p>
                    <motion.button
                        className="block bg-blue py-3 px-5 border-2 border-blue rounded-lg text-white hover:bg-transparent transition duration-300"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        onClick={() => dispatch(setIsContactModalOpen())}
                    >
                        {t('home.buttonText')}
                    </motion.button>
                </div>
            </div>
        </section>
    )
}

export default AppWrapp(Home, 'home', '') 
