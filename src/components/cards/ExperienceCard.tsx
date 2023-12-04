import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { VerticalTimelineElement } from "react-vertical-timeline-component"

interface ExperienceCardProps {
    exp: {
        title: string,
        date: string,
        icon: string,
        iconBg: string,
        text: string
    }
}

const ExperienceCard: FC<ExperienceCardProps> = ({ exp }) => {
    const { t } = useTranslation()

    return <VerticalTimelineElement
        contentStyle={{
            background: "transparent",
            color: "#fff",
            border: "2px solid #707070",
            borderRadius: 16
        }}
        
        contentArrowStyle={{ borderRight: "10px solid #707070" }}
        date={t(exp.date)}
        iconStyle={{ background: exp.iconBg }}
        icon={
            <div className='flex justify-center items-center h-full w-full'>
                <img src={exp.icon} alt={exp.title}
                    className="w-[60%] h-[60%] object-contain" />
            </div>
        }
    >
        <div>
            <h3 className='text-white text-2xl font-bold'>
                {t(exp.title)}
            </h3>
            <p className='text-sm'>
                {t(exp.text)}
            </p>
        </div>
    </VerticalTimelineElement>
}

export default ExperienceCard