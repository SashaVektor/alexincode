import logo from "../assets/logoalex.png"
import { headerLinks } from "../constants"
import { motion } from "framer-motion"
import { RxHamburgerMenu } from "react-icons/rx";
import { MdAddIcCall } from "react-icons/md";
import { setIsContactModalOpen, setIsMobileMenuModalOpen } from "../store/slices/modalSlice";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { usePopup } from "../utils/popupUtils";
import { useAppDispatch } from "../store/hooks";
import { useTranslation } from "react-i18next"

const Header = () => {
    const dispatch = useAppDispatch();
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const { i18n, t } = useTranslation()

    const { popupRef } = usePopup(isVisible, setIsVisible);

    const changeLanguage = (ln: "en" | "ua") => {
        setIsVisible(false)
        i18n.changeLanguage(ln)

    }


    const language = localStorage.getItem("i18nextLng")

    return (
        <motion.header
            className="fixed top-0 w-full bg-black h-16 border-b border-white/25 z-40"
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <button
                            className="block lg:hidden"
                            onClick={() => dispatch(setIsMobileMenuModalOpen())}
                        >
                            <RxHamburgerMenu size={28} className="text-white hover:text-textgray transition" />
                        </button>
                        <div className="block w-[150px] h-[40px] cursor-pointer">
                            <img
                                src={logo}
                                alt="logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    <nav className="xl:mr-16 hidden lg:block">
                        <ul className="flex items-center gap-10">
                            {headerLinks.map((link, i) => (
                                <a key={i} href={`#${link}`.replace("header.", "")}>
                                    <p className="text-textgray font-medium text-xl hover:text-blue transition-all first-letter:uppercase duration-300">
                                        {t(link)}
                                    </p>
                                </a>
                            ))}
                        </ul>
                    </nav>
                    <div className="hidden lg:block relative">
                        <button
                            className="text-xl hover:text-textgray transition flex gap-1 items-center"
                            onClick={() => setIsVisible(true)}
                        >
                            <span className="uppercase">
                                {language}
                            </span>
                            <MdKeyboardArrowDown className={`${isVisible ? "rotate-180" : "rotate-0"} text-xl`} />
                        </button>
                        <div
                            ref={popupRef}
                            className={`${isVisible ? "flex" : "hidden"} bg-black border-[3px] border-textgray rounded-xl px-3 py-2 text-xl flex-col gap-2 absolute top-10 right-0`}
                        >
                            <button
                                className="hover:text-textgray transition"
                                onClick={() => changeLanguage("ua")}
                            >
                                UA
                            </button>
                            <button
                                className="hover:text-textgray transition"
                                onClick={() => changeLanguage("en")}
                            >EN
                            </button>
                        </div>
                    </div>
                    <button
                        className='flex items-center gap-2 lg:hidden bg-transparent border-2 border-blue p-2 sm:px-3 sm:py-1 rounded-lg text-white hover:bg-blue transition duration-300'
                        onClick={() => dispatch(setIsContactModalOpen())}
                    >
                        <MdAddIcCall size={18} className="text-white" />
                        <p className="hidden sm:block">{t("header.call")}</p>
                    </button>
                </div>
            </div>
        </motion.header>
    )
}

export default Header
