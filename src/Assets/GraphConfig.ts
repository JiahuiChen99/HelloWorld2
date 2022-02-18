const GraphConfig = {
    tooltip: {},
    legend: [
        {
            data: [],
            orient: 'vertical',
            right: 10,
            top: 'center',
            align: 'right',
        }
    ],
    series: [
        {
            name: 'Jiahui Graph',
            type: 'graph',
            layout: 'force',
            data: [],
            links: [],
            categories: [],
            label: {
                position: 'right'
            },
            force: {
                repulsion: 100
            }
        }
    ],
}

export default GraphConfig;