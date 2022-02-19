const GraphConfig = {
    tooltip: {},
    legend: [
        {
            show: true,
            data: [],
            orient: 'vertical',
            right: 10,
            top: 'center',
            align: 'right',
            itemWidth: 24,
            itemHeight: 24,
            textStyle: {
                fontWeight: 'bolder'
            }
        }
    ],
    series: [
        {
            name: 'Jiahui Graph',
            type: 'graph',
            layout: 'force',
            draggable: true,
            data: [],
            links: [],
            categories: [],
            label: {
                position: 'right'
            },
            force: {
                repulsion: 250
            },
            lineStyle: {
                color: 'source',
                curveness: 0.1
            }
        }
    ],
}

export default GraphConfig;