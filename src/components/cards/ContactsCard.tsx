import { FC } from 'react'

interface ContactsCardProps {
    contact: {
        link: string
        title: string
        icon: React.ReactNode
        color: string
    },
}

const ContactsCard: FC<ContactsCardProps> = ({ contact }) => {
    return <a
        href={contact.link}
        className={`px-4 py-2 sm:px-8 sm:py-3 rounded-lg flex items-center gap-2 bg-transparent border-2 border-textgray hover:border-gold duration-300 transition`}
    >
        {contact.icon}
        <p>{contact.title}</p>
    </a>
}

export default ContactsCard