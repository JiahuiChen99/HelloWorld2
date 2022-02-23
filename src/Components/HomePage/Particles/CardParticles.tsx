import Particles from "react-tsparticles";

const CardParticles = ( props: {id: number}) => {
    return (
        <Particles
            className="flex w-full h-full absolute z-0"
            id={props.id.toString()}
            options={{
                fpsLimit: 120,
                fullScreen: {
                    enable: false
                },
                particles: {
                    color: {
                        value: "#FFFFFF",
                    },
                    links: {
                        color: "#FFFFFF",
                        distance: 100,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 30,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 25,
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default CardParticles;