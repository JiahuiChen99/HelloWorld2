import {HiOutlineExternalLink} from "react-icons/hi";
import {BsCardText, BsGithub} from "react-icons/bs";
import FeaturedProjectCard from "./FeaturedProjectCard";

interface Icon {
    name: string;
    link?: string;
    icon: JSX.Element;
}
export interface FeaturedProject {
    name: string;
    short_name?: string;
    description: string;
    img?: string;
    colors: string[];
    icons: Icon[];
}

const FeaturedProjects = () => {
    let featuredProjects: FeaturedProject[] = [
        {
            name: "Moodle Learning Analytics",
            short_name: "MLA",
            description: " MLA is an application that analyses students’ generated Moodle logs and\n" +
                "performs sentiment analysis from forums’ chats. " +
                "Starting from January 2022 the software will be used in different Spanish Universities and\n" +
                "schools (La Salle URL, UPC, URV, etc)",
            img: "https://raw.githubusercontent.com/LS-LEDA/MLA/main/public/assets/mla_logo.png",
            colors: [
                'from-[#3F51B5]',
                'via-[#9C27B0]',
                'to-[#E91E63]'
            ],
            icons: [
                {
                    name: 'More information',
                    icon: <BsCardText size={26}/>
                },
                {
                    name: 'Link',
                    link: 'https://ls-leda.github.io/Moodle-Learning-Analytics',
                    icon: <HiOutlineExternalLink size={26}/>
                },
                {
                    name: 'Github',
                    link: 'https://github.com/LS-LEDA/MLA',
                    icon: <BsGithub size={26}/>
                }
            ]
        },
        {
            name: "Yako - Heterogeneous Computing Farm",
            short_name: "Yako",
            description: "",
            colors: [
                'from-[#C6FFDD]',
                'via-[#FBD786]',
                'to-[#F7797D]'
            ],
            icons: [
                {
                    name: 'More information',
                    icon: <BsCardText size={26}/>
                },
                {
                    name: 'Github',
                    icon: <BsGithub size={26}/>
                }
            ]
        },
        {
            name: "LoL Champions Selector",
            colors:[
                'from-[#FEAC5E]',
                'via-[#C779D0]',
                'to-[#4BC0C8]'
            ],
            description: "",
            icons: [
                {
                    name: 'More information',
                    icon: <BsCardText size={26}/>
                },
                {
                    name: 'Github',
                    link: 'https://github.com/JiahuiChen99/LoLChampSelector-Electron',
                    icon: <BsGithub size={26}/>
                }
            ]
        }
    ];

    return(
        <section id="Featured Projects" className="flex flex-col w-full h-auto py-20 gap-y-10 px-10 md:px-20 lg:px-32 xl:40 2xl:px-96">
            {/* Featured projects section header */}
            <h1 className="text-2xl font-bold"> Featured Projects </h1>

            {/* Featured projects cards */}
            {
                featuredProjects.map( (project, index) => {
                    return (
                        <FeaturedProjectCard key={index} id={index} project={project}/>
                    )
                })
            }
        </section>
    )
}

export default FeaturedProjects;