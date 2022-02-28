import {MdEmail} from "react-icons/md";
import {FaGithubAlt} from "react-icons/fa";
import {GrLinkedin} from "react-icons/gr";

const Footer = () => {
    return(
        <section id="Footer" className="flex w-full h-[25vh]
        bg-primary dark:bg-gradient-to-t dark:from-dark_bg dark:to-dark_secondary
        dark:text-dark_text
        justify-between text-sm p-10 md:px-20 lg:px-32 xl:40 2xl:px-96">
            <div className="flex flex-col justify-between">
                {/* TODO: Add logo */}
                <div className="font-bold">
                    Dear reader, Thank you!
                </div>
                {/* Copyright */}
                <div className="flex text-slate-500">
                    © 2022 - present by Jiahui Chen. All Rights Reserved.
                </div>
            </div>

            <div className="flex space-x-10">
                {/* TODO: Pages */}
                <div>
                </div>

                {/* Networking & Social Media */}
                <div className="flex flex-col gap-y-3">
                    <span className="font-bold"> Links </span>
                    <ul className="flex flex-col gap-y-3">
                        <li className="flex space-x-3 text-center">
                            <GrLinkedin size={20}/>
                            <a className="flex place-items-center" href="https://www.linkedin.com/in/jiahuichen99">
                                LinkedIn
                            </a>
                        </li>
                        <li className="flex space-x-3">
                            <FaGithubAlt size={20}/>
                            <a className="flex place-items-center" href="https://github.com/JiahuiChen99">
                                Github
                            </a>
                        </li>
                        <li className="flex space-x-3">
                            <MdEmail size={20}/>
                            <a className="flex place-items-center" href="mailto:jiahui1@hotmail.es">
                                Email
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer;