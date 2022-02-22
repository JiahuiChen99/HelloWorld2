import React, {useState} from "react";

/**
 * Icon Button component displays the meaning on hover
 * @param props {
 *     icon: React Icons Lib
 *     name: Name of the button
 * }
 */
const IconButton = ( props: {id: number, url?: string, icon: JSX.Element, name: string, onOpenDocs: () => void }) => {
    const [hover, setHover] = useState(false);

    const clickHandler = ( buttonID ) => {
        switch ( buttonID ) {
            // Show more information
            case 0:
                props.onOpenDocs();
                break;
            // Open external link
            default:
                if ( props.url ) {
                    window.open(props.url);
                }
        }
    }
    return(
        <button className="flex w-fit h-fit justify-center items-center border border-slate-300 rounded-xl p-3 gap-x-2
                           hover:shadow-lg hover:shadow-slate-300/30"
                onMouseEnter={ () => {setHover(true)} }
                onMouseLeave={ () => {setHover(false)} }
                onClick={ () => clickHandler(props.id) }
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