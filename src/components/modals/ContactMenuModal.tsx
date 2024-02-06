import { useModal } from '../../utils/modals'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/store'
import { onClose } from '../../store/slices/modalSlice'
import { RxCross1 } from 'react-icons/rx'
import { useTranslation } from 'react-i18next'
import ContactsForm from '../forms/ContactsForm'

const ContactMenuModal = () => {
    const { t } = useTranslation()

    const isOpen = useAppSelector((state: RootState) => state.modal.isContactModalOpen)
    const dispatch = useAppDispatch();

    const { handleModalClick } = useModal()

    return (
        <div
            className={`${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-100%]"} flex items-center justify-center fixed w-full h-[100dvh] bg-[#111]/75 bottom-0 left-0 transition-all duration-500 z-50`}
            onClick={handleModalClick}
        >
            <div className='relative bg-[#202020] border border-white/50 rounded-lg shadow-sm py-5 md:py-12 px-4 md:px-8 mx-4 w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl max-h-[90dvh] overflow-y-auto overflow-x-hidden scrollbar-w-2 scrollbar-track-yellow-lighter scrollbar-thumb-yellow scrollbar-thumb-rounded'>
                <h2 className='font-bold leading-tight text-white text-center text-2xl md:text-3xl lg:text-5xl mb-5'>
                    {t("modal.title")}
                </h2>
                <button onClick={() => dispatch(onClose())} 
                className='hover:scale-125 transition duration-300 absolute top-2 right-2'
                aria-label='Close button'
                >
                    <RxCross1 className="text-2xl lg:text-3xl" />
                </button>
                <ContactsForm isModal />
            </div>
        </div>
    )
}

export default ContactMenuModal
