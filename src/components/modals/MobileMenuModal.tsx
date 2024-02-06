import { headerLinks, socialLinks } from "../../constants"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { onClose } from "../../store/slices/modalSlice"
import { RootState } from "../../store/store"
import { useModal } from "../../utils/modals"
import SocialCard from "../cards/SocialCard"
import { RxCross1 } from "react-icons/rx"
import { useTranslation } from "react-i18next"



const MobileMenuModal = () => {
    const isOpen = useAppSelector((state: RootState) => state.modal.isMobileMenuModalOpen)
    const dispatch = useAppDispatch();

    const { t, i18n } = useTranslation()
    const { handleModalClick } = useModal()

    const currentLanguage = localStorage.getItem("i18nextLng")

    const changeLanguage = (ln: "en" | "ua") => {
        i18n.changeLanguage(ln)
        dispatch(onClose())
    }

    return (
        <div
            onClick={handleModalClick}
            className={`${isOpen ? "left-0" : "-left-[150%]"} h-[100dvh] duration-500 fixed top-0 w-[100dvw] flex justify-start bg-[#111]/75 z-[45] overflow-y-auto overflow-x-hidden`}
        >
            <div className='flex flex-col bg-black py-3 sm:py-5 w-[250px] h-[100dvh] overflow-y-auto overflow-x-hidden scrollbar-w-2 scrollbar-track-yellow-lighter scrollbar-thumb-yellow scrollbar-thumb-rounded'>
                <div className="flex justify-between items-center mb-7 px-6">
                    <div className="flex items-center gap-2 text-lg text-white">
                        <button
                            className={`${currentLanguage?.toUpperCase() === "EN" ? "font-bold" : "font-light"} hover:text-textgray transition`}
                            onClick={() => changeLanguage("en")}
                        >
                            EN
                        </button>
                        <span>/</span>
                        <button

                            className={`${currentLanguage?.toUpperCase() === "UA" ? "font-bold" : "font-light"} hover:text-textgray transition`}
                            onClick={() => changeLanguage("ua")}
                        >
                            UA
                        </button>
                    </div>
                    <button
                        className="text-white hover:text-blue transition w-fit"
                        onClick={() => dispatch(onClose())}
                        aria-label="Close Button"
                    >
                        <RxCross1
                            size={24}
                        />
                    </button>
                </div>
                <div className="flex-1 flex flex-col gap-10 justify-between px-6">
                    <nav>
                        <ul className="flex flex-col gap-5">
                            {headerLinks.map((link, i) => (
                                <li key={i}>
                                    <a key={i} href={`#${link}`.replace("header.", "")} onClick={() => dispatch(onClose())}>
                                        <p className="font-medium text-xl hover:text-blue transition-all first-letter:uppercase duration-300">
                                            {t(link)}
                                        </p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            {socialLinks.map((link) => (
                                <SocialCard
                                    icon={link.icon}
                                    link={link.link}
                                    key={link.link}
                                />
                            ))}
                        </div>
                        <div
                            className='flex flex-col'
                        >
                            <p className='uppercase'>@{new Date().getFullYear()} {t('wrapper.name')}</p>
                            <p className='uppercase'>{t('wrapper.text')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenuModal
