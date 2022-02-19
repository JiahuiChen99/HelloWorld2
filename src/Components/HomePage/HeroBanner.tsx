import * as echarts from 'echarts';
import {useEffect} from "react";
import GraphConfig from "../../Assets/GraphConfig";
import {JiahuiGraph}  from "../../Assets/JiahuiGraph";

function HeroBanner() {

    // Load data & generate graph on component mount
    useEffect(
        () => {
            let graphDom = document.getElementById('graph');
            let graph = echarts.init(graphDom);

            // Graph data config
            GraphConfig.legend[0].data = JiahuiGraph.categories.map( (a: {name: string, icon: string}) => {
                return {
                    name: a.name,
                    icon: a.icon
                }
            });
            GraphConfig.series[0].data = JiahuiGraph.nodes;
            GraphConfig.series[0].links = JiahuiGraph.links;
            GraphConfig.series[0].categories = JiahuiGraph.categories;

            graph.setOption(GraphConfig);

            // Add chart resize listener
            function resizeChart(event) {
                // Hide/Show graph legend
                GraphConfig.legend[0].show = event.target.innerWidth >= 1280;
                graph.setOption(GraphConfig);
                graph?.resize();
            }
            window.addEventListener("resize", resizeChart);

            // Return cleanup function
            return () => {
                graph?.dispose();
                window.removeEventListener("resize", resizeChart);
            };
        },
        []
    );

    return(
        <section id="Hero Banner" className="flex w-full h-5/6">
            {/* Greeting */}
            <div className="flex w-4/12 h-full justify-center text-3xl">
                <div className="flex flex-col max-h-min w-auto justify-center">
                    <div className="text-2xl pb-2"> Hello World! </div>
                    <div className="font-bold">I am <span className="text-blue-900">Jiahui Chen</span></div>
                    <div className="font-bold"> Computer Engineer </div>
                </div>
            </div>

            {/* Graph */}
            <div className="hidden md:flex w-8/12 h-full" id="graph"/>
        </section>
    )
}

export default HeroBanner;