import IconButton from "../UI/IconButton";
import {FeaturedProject} from "./FeaturedProjects";
import CardParticles from "./Particles/CardParticles";
import {useState} from "react";

const FeaturedProjectCard = (props: {id: number, project: FeaturedProject}) => {
    // Card hover state
    const [cardHover, setHover] = useState(false);
    // Show project description
    const [showDocs, setShowDocs] = useState(false);

    const LogoShortTitle = () => {
        // Logo & Short name
        if ( props.project.img !== undefined && props.project.short_name !== undefined ) {
            return (
                <>
                    <img src={ props.project.img } alt="Logo" className="w-10 h-10"/>
                    <span> { props.project.short_name } </span>
                </>
            )
        }

        // No logo
        if ( props.project.short_name !== undefined ) {
            return (
                <>
                    <span> { props.project.short_name } </span>
                </>
            )
        }
    }

    // Callback function for show docs button & close docs button
    const ShowDocs = () => setShowDocs( show => !show );

    // Display featured project title or project information
    const CardInformation = () => {
        if ( showDocs ) {
            return (
                <div className="flex w-1/2 h-full p-20 ">
                    <div className="flex flex-col w-full h-full z-10 place-items-center gap-y-5 overflow-y-auto">
                        {/* Project description */}
                        <div className="flex w-full h-auto text-justify">
                            { props.project.description }
                        </div>

                        {/* Back button */}
                        <button className="flex w-fit h-auto hover:cursor-pointer p-2 px-5 rounded-xl bg-blue-500
                                           shadow-lg shadow-blue-500/50 font-bold"
                                onClick={ () => { ShowDocs() } }
                        >
                            Back
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={`flex flex-col w-1/2 place-items-center place-content-center gap-y-3 z-10 
                            ${props.id % 2 === 0 ? '' : 'order-last'}`}
                >
                    {/* Logo & Short title */}
                    <div className="flex w-auto place-items-center font-bold text-2xl gap-x-2">
                        { LogoShortTitle() }
                    </div>

                    {/* Title */}
                    <span className="text-5xl text-center font-bold px-20"> { props.project.name } </span>

                    {/* Icon Buttons section */}
                    {
                        cardHover && (
                            <div className="flex w-auto h-auto space-x-5">
                                {
                                    props.project.icons.map( (icon, index) => {
                                        return <IconButton key={index} id={index} url={icon.link} icon={icon.icon} name={icon.name}
                                                           onOpenDocs={ ShowDocs }
                                        />
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            )
        }
    }

    return(
        <div className={`flex relative w-full h-[50vh] rounded-xl bg-gradient-to-br ${props.project.colors.join(' ')}`}
             onMouseEnter={ () => {setHover(true)} }
             onMouseLeave={ () => {setHover(false)} }
        >
            <CardParticles id={props.id}/>

            {/* Project title & project information */}
            { CardInformation() }

            {/* Image section*/}
        </div>
    )
}

export default FeaturedProjectCard;