import {BiMoon, BiSun} from "react-icons/bi";

/**
 * Theme Selector Button, toggles between light & dark mode
 * @param props {
 *     state: boolean
 * }
 * state: Light Mode
 * !state: Dark Mode
 */
const ThemeButton = ( props: {state: boolean}) => {
    return(
        <div className="flex w-auto h-full aspect-square rounded-xl justify-center items-center hover:cursor-pointer">
            {
                props.state ? <BiSun size={26}/> : <BiMoon size={26}/>
            }
        </div>
    )
}

export default ThemeButton;