import work1 from "../assets/works/work1.png"
import work2 from "../assets/works/work2.png"
import work3 from "../assets/works/work3.png"

import api from "../assets/skills/api.png"
import css from "../assets/skills/css.png"
import figma from "../assets/skills/figma.png"
import git from "../assets/skills/git.png"
import html from "../assets/skills/html.png"
import js from "../assets/skills/javascript.png"
import node from "../assets/skills/node.png"
import react from "../assets/skills/react.png"
import redux from "../assets/skills/redux.png"
import sass from "../assets/skills/sass.png"
import ts from "../assets/skills/typescript.png"
import mongodb from "../assets/skills/mongo.png"
import study from "../assets/skills/education.png"

import { MdOutlinePhonelinkSetup } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { PiTelegramLogo } from "react-icons/pi"
import { FaGithub, FaLaptopCode, FaTelegram } from "react-icons/fa6";
import { BsInstagram, BsReverseLayoutTextWindowReverse } from "react-icons/bs"
import { BiSupport } from "react-icons/bi";
import { IoCreateOutline } from "react-icons/io5";

export const toastStyle = {
    style: {
        background: "#000",
        border: "2px solid #707070",
        color: "#fff",
        borderRadius: 8
    },
    duration: 3000
}


export const headerLinks = ["header.home", "header.about", "header.services",
    "header.works", "header.skills", "header.contacts"]

export const services = [
    {
        title: "services.title1",
        text: "services.text1",
        points: [
            "services.point1",
            "services.point2",
            "services.point3",
        ]
    },
    {
        title: "services.title2",
        text: "services.text2",
        points: [
            "services.point4",
            "services.point5",
            "services.point6",
        ]
    },
    {
        title: "services.title3",
        text: "services.text3",
        points: [
            "services.point7",
            "services.point8",
            "services.point9",
        ]
    },
]

export const projects = [
    {
        name: "StroySet",
        description:
            "works.descr1",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: work3,
        link: "https://stroysetshop.com/"
    },
    {
        name: "QuestTasker",
        description:
            "works.descr2",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: work1,
        link: "https://quest-tasker.netlify.app/"
    },
    {
        name: "SavorSliceHub",
        description:
            "works.descr3",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: work2,
        link: "https://savorslicehub.netlify.app/"
    },
];

export const contacts = [
    {
        title: "@sashav04",
        link: "https://t.me/sashav04",
        icon: <PiTelegramLogo size={24} />,
        color: "#0FC65C"
    },
    {
        title: "+380950083933",
        link: "tel:380950083933",
        icon: <MdOutlinePhonelinkSetup size={24} />,
        color: "#326CF9"
    },
    {
        title: "veklichalexandr@icloud.com",
        link: "mailto:veklichalexandr@icloud.com",
        icon: <CgMail size={24} />,
        color: "#FFA84B"
    }
]

export const skills = [
    {
        title: "skills.skill1",
        icon: <FaLaptopCode className="text-5xl text-white" />,
    },
    {
        title: "skills.skill2",
        icon: <BsReverseLayoutTextWindowReverse className="text-5xl text-white" />,
    },
    {
        title: "skills.skill3",
        icon: <BiSupport className="text-5xl text-white" />,
    },
    {
        title: "skills.skill4",
        icon: <IoCreateOutline className="text-5xl text-white" />,
    },
];

export const knowledges = [
    {
        title: "API",
        image: api
    },
    {
        title: "Figma",
        image: figma
    },
    {
        title: "HTML5",
        image: html
    },
    {
        title: "CSS3",
        image: css
    },
    {
        title: "SASS",
        image: sass
    },
    {
        title: "JavaScript",
        image: js
    },
    {
        title: "TypeScript",
        image: ts
    },
    {
        title: "React",
        image: react
    },
    {
        title: "Redux",
        image: redux
    },
    {
        title: "Git",
        image: git
    },
    {
        title: "NodeJS",
        image: node
    },
    {
        title: "MongoDB",
        image: mongodb
    },
]

export const experiences = [
    {
        title: "skills.expTitle1",
        icon: study,
        iconBg: "#383E56",
        date: "skills.expDate1",
        text: "skills.expText1"
    },
    {
        title: "skills.expTitle2",
        icon: work3,
        iconBg: "#383E56",
        date: "skills.expDate2",
        text: "skills.expText2"
    },
    {
        title: "skills.expTitle3",
        icon: work1,
        iconBg: "#383E56",
        date: "skills.expDate3",
        text: "skills.expText3"
    },
    {
        title: "skills.expTitle4",
        icon: work2,
        iconBg: "#383E56",
        date: "skills.expDate4",
        text: "skills.expText4"
    },
];

export const socialLinks = [
    {
        link: "https://github.com/SashaVektor",
        icon: <FaGithub size={16} className="text-black" />
    },
    {
        link: "https://t.me/sashav04",
        icon: <FaTelegram size={16} className="text-black" />
    },
    {
        link: "https://www.instagram.com/sasha_veklich/",
        icon: <BsInstagram size={16} className="text-black" />
    },
]
