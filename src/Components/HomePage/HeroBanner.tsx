import * as echarts from 'echarts';
import {useEffect} from "react";
import GraphConfig from "../../Assets/GraphConfig";
import graph_data from "../../Assets/JiahuiGraph.json";

function HeroBanner() {

    // Load data & generate graph on component mount
    useEffect(
        () => {
            let graphDom = document.getElementById('graph');
            let graph = echarts.init(graphDom);

            // Graph data config
            GraphConfig.legend[0].data = graph_data.categories.map( (a: {name: string}) => {
                return a.name
            });
            GraphConfig.series[0].data = graph_data.nodes;
            GraphConfig.series[0].links = graph_data.links;
            GraphConfig.series[0].categories = graph_data.categories;

            graph.setOption(GraphConfig);
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
            <div className="flex w-8/12 h-full" id="graph"/>
        </section>
    )
}

export default HeroBanner;