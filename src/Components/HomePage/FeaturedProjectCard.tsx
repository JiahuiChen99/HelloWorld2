import IconButton from "../UI/IconButton";
import {FeaturedProject} from "./FeaturedProjects";
import CardParticles from "./Particles/CardParticles";
import {useState} from "react";

const FeaturedProjectCard = (props: {id: number, project: FeaturedProject}) => {
    // Card hover state
    const [cardHover, setHover] = useState(false);

    return(
        <div className={`flex relative w-full h-[50vh] rounded-xl bg-gradient-to-br ${props.project.colors.join(' ')}`}
             onMouseEnter={ () => {setHover(true)} }
             onMouseLeave={ () => {setHover(false)} }
        >
            <CardParticles id={props.id}/>
            <div className={`flex flex-col w-1/2 place-items-center place-content-center gap-y-3 z-10 
                            ${props.id % 2 === 0 ? '' : 'order-last'}`
            }>
                {/* Logo & Short title */}
                <div className="flex w-auto place-items-center font-bold text-2xl gap-x-2">
                    <img src={props.project.img} alt="Logo" className="w-10 h-10"/>
                    <span> { props.project.short_name } </span>
                </div>

                {/* Title */}
                <span className="text-5xl text-center font-bold px-20"> { props.project.name} </span>

                {/* Icon Buttons section */}
                {
                    cardHover && (
                        <div className="flex w-auto h-auto space-x-5">
                            {
                                props.project.icons.map( (icon, index) => {
                                    return <IconButton key={index} id={index} url={icon.link} icon={icon.icon} name={icon.name}/>
                                })
                            }
                        </div>
                    )
                }
            </div>

            {/* Image section*/}
        </div>
    )
}

export default FeaturedProjectCard;