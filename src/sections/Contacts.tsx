import { useTranslation } from 'react-i18next'
import ContactsCard from '../components/cards/ContactsCard'
import ContactsForm from '../components/forms/ContactsForm'
import { contacts } from '../constants'
import AppWrapp from '../wrapper/AppWrapper'
import MotionWrapp from '../wrapper/MotionWrapper'
import { motion } from "framer-motion"



const Contacts = () => {
    const { t } = useTranslation()
    const notMobile = window.innerWidth > 768;

    return (
        <section className='flex flex-col items-center pt-16 lg:pt-24'>
            <motion.h2
                className='text-3xl lg:text-4xl xl:text-5xl leading-[1.2] font-bold text-center text-gradient mb-5 md:mb-8 lg:mb-10'
                initial={{ opacity: notMobile ? 0 : 1, scale: notMobile ? 0.2 : 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: notMobile ? 0.5 : 0 }}
            >
                {t("contacts.title")}
            </motion.h2>
            <div className='flex flex-col sm:flex-row sm:items-center justify-center gap-5 flex-wrap mb-8 md:mb-12 lg:mb-16'>
                {contacts.map((contact) => (
                    <ContactsCard
                        contact={contact}
                        key={contact.title}
                    />
                ))}
            </div>
            <h2 className='text-xl md:text-2xl lg:text-3xl text-center mb-3 md:mb-5 lg:mb-6'>
                {t("contacts.formTitle")}
            </h2>
            <ContactsForm />
        </section>
    )
}

export default AppWrapp(MotionWrapp(Contacts, 'flex-1'), 'contacts', '')