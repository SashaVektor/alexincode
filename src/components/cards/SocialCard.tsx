import { FC } from 'react'

interface SocialCardProps {
    link: string,
    icon: React.ReactNode
}

const SocialCard: FC<SocialCardProps> = ({ icon, link }) => {
    return <a
        href={link} 
        target="_blank"
        className="min-w-[32px] w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-blue transition duration-300"
    >
        {icon}
    </a>
}

export default SocialCard