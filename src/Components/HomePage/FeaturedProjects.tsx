import {HiOutlineExternalLink} from "react-icons/hi";
import {BsCardText, BsGithub} from "react-icons/bs";
import FeaturedProjectCard from "./FeaturedProjectCard";
import {IoLogoElectron, IoLogoHtml5, IoLogoJavascript, IoLogoVue} from "react-icons/io5";
import {SiBulma, SiDialogflow, SiJava, SiTailwindcss, SiTensorflow} from "react-icons/si";
import {Golang} from "grommet-icons";

interface Icon {
    name: string;
    link?: string;
    icon: JSX.Element;
}
export interface FeaturedProject {
    name: string;
    short_name?: string;
    description: string;
    tech_stack: JSX.Element[];
    img?: string;
    colors: string[];
    icons: Icon[];
}

const FeaturedProjects = () => {
    let featuredProjects: FeaturedProject[] = [
        {
            name: "Moodle Learning Analytics",
            short_name: "MLA",
            description: " MLA is an application for professors & teachers that analyses students’ generated Moodle logs" +
                " and performs sentiment & emotion analysis on forums’ discussions. " +
                "Starting from January 2022 the software will be used in different Spanish Universities and" +
                "schools (La Salle URL, UPC, URV, Euskadi schools, etc)",
            tech_stack: [
                <IoLogoVue size={42}/>,
                <IoLogoElectron size={42}/>,
                <SiTailwindcss size={42}/>,
                <SiTensorflow size={42}/>,
            ],
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
            tech_stack: [
                <Golang size={'42'} color={'black'}/>,
                <IoLogoVue size={42}/>,
                <IoLogoElectron size={42}/>,
                <SiTailwindcss size={42}/>,
            ],
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
            description: "LoL Champ Selector is a chatbot about world's most famous eSport game. " +
                "It assists summoners (players) finding a new champion to play with, based on the preferred difficulty." +
                "It also includes features like champions description storytelling, items recommendations and much more, give it a try!",
            tech_stack: [
                <SiJava size={42}/>,
                <IoLogoElectron size={42}/>,
                <IoLogoJavascript size={42}/>,
                <IoLogoHtml5 size={42}/>,
                <SiDialogflow size={42}/>,
                <SiBulma size={42}/>
            ],
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
        <section id="Featured Projects" className="flex flex-col w-full h-auto py-10 gap-y-10 px-10 md:px-20 lg:px-32 xl:40 2xl:px-96">
            {/* Featured projects' section header */}
            <div className="flex w-full h-14 place-items-center justify-between">
                <h1 className="text-3xl font-bold"> Featured Projects </h1>
                <button className="flex w-auto h-full rounded-xl bg-blue-500 place-items-center px-5 font-bold
                                   hover:shadow-lg hover:shadow-blue-500/50">
                    More projects
                </button>
            </div>

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