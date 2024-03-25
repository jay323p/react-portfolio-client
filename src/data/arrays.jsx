import { AiOutlineMail } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export const contactInfo = [
    {
        id: 'Email',
        icon: <AiOutlineMail className="text-[22px]" />,
        label: 'jay.ashok.p@gmail.com',
    },
    {
        id: 'Location1',
        icon: <MdLocationOn className="text-[24px]" />,
        label: 'Houston, TX',
    },
    {
        id: 'Location2',
        icon: <MdLocationOn className="text-[24px]" />,
        label: 'Boston, MA',
    },
];

export const socialsInfo = [
    {
        id: 'LinkedIn',
        icon: <FaLinkedin className="text-[24px]" />,
        label: 'LinkedIn',
        urlLink: 'https://www.linkedin.com/in/jay-patel-21912514a',
        color: '#0a66c2'
    },
    {
        id: 'Github',
        icon: <FaGithub className="text-[24px]" />,
        label: 'Github',
        urlLink: 'https://github.com/jay323p',
        color: '#1f2328'
    },
    {
        id: 'Facebook',
        icon: <FaFacebookSquare className="text-[24px]" />,
        label: 'Facebook',
        urlLink: 'https://www.facebook.com/jay.patel.7524/',
        color: '#0866ff'
    },
    {
        id: 'Discord',
        icon: <FaDiscord className="text-[24px]" />,
        label: 'younghindu323',
        urlLink: '#',
        color: '#5562ea'
    },
]