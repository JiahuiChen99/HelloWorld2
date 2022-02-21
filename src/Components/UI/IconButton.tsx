import {useState} from "react";

/**
 * Icon Button component displays the meaning on hover
 * @param props {
 *     icon: React Icons Lib
 *     name: Name of the button
 * }
 */
const IconButton = ( props: {icon: JSX.Element, name: string}) => {
    const [hover, setHover] = useState(false);

    return(
        <button className="flex w-fit h-fit justify-center items-center border border-slate-300 rounded-xl p-5 gap-x-2"
                onMouseEnter={ () => {setHover(true)} }
                onMouseLeave={ () => {setHover(false)} }
        >
            {props.icon}
            {/* Button meaning displayed on hover */}
            {
                hover && (
                    <span className="text-xl transition-all duration-700">
                        {props.name}
                    </span>
                )
            }
        </button>
    )
}

export default IconButton;