import { FC } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

interface ProjectType {
    name: string,
    description: string,
    tags: {
        name: string,
        color: string
    }[],
    image: string,
    link: string
}

interface ProjectCardProps {
    project: ProjectType,
    index: number
}

const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
    const { t } = useTranslation()
    const notMobile = window.innerWidth > 768;

    return (
        <motion.a
            href={project.link}
            target='_blank'
            referrerPolicy='no-referrer'
            className='block'
            whileInView={{ y: [notMobile ? 100 : 0, 0], opacity: [notMobile ? 0 : 1, 1] }}
            transition={{ duration: notMobile ? 0.5 : 0, delay: notMobile ? (index / 3) : 0}}
        >
            <Tilt options={{
                max: 45,
                scale: 1,
                speed: 450
            }}
                className="bg-[#151030] p-5 rounded-2xl w-[300px] lg:w-[370px] h-[390px] lg:h-[470px] flex flex-col">
                <div className='flex flex-col flex-1'>
                    <div className="relative w-full h-[150px] lg:h-[230px]">
                        <img src={project.image} alt={project.name}
                            className="w-full h-full object-contain rounded-2xl" />
                    </div>
                    <div className="mt-5">
                        <h3 className="text-white font-bold text-xl lg:text-2xl">{project.name}</h3>
                        <p className="mt-2 text-textgray text-sm">{t(project.description)}</p>
                    </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.a>
    )
}

export default ProjectCard