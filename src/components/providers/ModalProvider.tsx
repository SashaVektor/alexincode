import ContactMenuModal from "../modals/ContactMenuModal"
import MobileMenuModal from "../modals/MobileMenuModal"


const ModalProvider = () => {
    return (
        <>
            <MobileMenuModal />
            <ContactMenuModal />
        </>
    )
}

export default ModalProvider
