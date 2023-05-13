// import React, { useEffect, useRef, useState} from 'react';
// import PropTypes from 'prop-types';
// import { createChart, CrosshairMode, LineStyle} from 'lightweight-charts';
// import styles from './Chart.module.scss';

// export const Chart = (props :any) => {
//     const chartRef = useRef<HTMLDivElement>(null);
//     // var created = false;
//     var candlestickSeries: any = null;
//     var chart: any = null;
//     // const [candlestickSeries, setCandlesticksSeries] = useState(null)
//     // const [chart, setChart] = useState(null);
//     const [data, setData] = useState(null);
//     const [chartCreated, setChartCreated] = useState(false);

//     useEffect(() => {
//         async function asyncSetup(){
//             // Call the createCandlestickChart function when the component is mounted
//             console.log("Chart.tsx")
//             await createCandlestickChart();
//             console.log(props)
//             setData(props.data)
//             if (data !== null && candlestickSeries !== null) {
//                 await setupData();
//             }
//         }
//         asyncSetup()
//     }, [data, props.data, candlestickSeries]);


//     const setupData = async () => {
//         console.log("setupData");
//         console.log(data);
//         console.log(chartCreated);
//         console.log(console.log(candlestickSeries));

//         try {
//             await candlestickSeries.setData(data.candlesticks);
            
//             for(let i = 0; i < data.rects.length; i++){
//                 let rect = await chart.addLineSeries();
//                 await rect.setData(data.rects[i]);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     const createCandlestickChart = async () => {
//         if (chartCreated === false) {
//             console.log("createCandlestickChart");
//             console.log(chartCreated);
//             // Access the chart element using document.getElementById()
//             const chartElement = chartRef.current;
//             if (!chartElement) return;


//             chart = await createChart(chartElement, {
//                 autoSize: true,
//                 height: props.height,
//                 timeScale: {
//                     timeVisible: true,
//                     secondsVisible: false,
//                 },
//             });


//             // setChart(await createChart(chartElement, {
//             //     autoSize: true,
//             //     height: props.height,
//             //     timeScale: {
//             //         timeVisible: true,
//             //         secondsVisible: false,
//             //     },
//             // }))


//             await chart.applyOptions({
//                 crosshair: {
//                     // Change mode from default 'magnet' to 'normal'.
//                     // Allows the crosshair to move freely without snapping to datapoints
//                     mode: CrosshairMode.Normal,
            
//                     // Vertical crosshair line (showing Date in Label)
//                     vertLine: {
//                         width: 8,
//                         color: '#C3BCDB44',
//                         style: LineStyle.Solid,
//                         labelBackgroundColor: '#9B7DFF',
//                     },
            
//                     // Horizontal crosshair line (showing Price in Label)
//                     horzLine: {
//                         color: '#9B7DFF',
//                         labelBackgroundColor: '#9B7DFF',
//                     },
//                 },
//             });

//             candlestickSeries = await chart.addCandlestickSeries();
//             // setCandlesticksSeries(await chart.addCandlestickSeries())



//             // Example data
//             // const data = [
//             //     { time: '2022-01-01', open: 50, high: 60, low: 40, close: 55 },
//             //     { time: '2022-01-02', open: 55, high: 65, low: 45, close: 60 },
//             //     { time: '2022-01-03', open: 60, high: 70, low: 50, close: 65 },
//             //     // ...
//             // ];

//             // created = true;
//             console.log(candlestickSeries);
//             console.log(chart);
//             setChartCreated(true);
//         }
//   }

//   return (<>
//         {/* Use the chartRef to reference the chart element */}
//         <div ref={chartRef} id="chart" className={styles.container}/>
//     </>);
// };

// Chart.defaultProps = {
//     data: null,
//     width: 1200,
//     height: 800
// };

// Chart.propTypes = {
//     data: PropTypes.any,
//     width: PropTypes.number,
//     height: PropTypes.number
// };

// ------------------------------------------------------------------------------------------------
// import React, { useEffect, useRef, useState} from 'react';
// import PropTypes from 'prop-types';
// import { createChart, CrosshairMode, LineStyle} from 'lightweight-charts';
// import styles from './Chart.module.scss';

// export const Chart = (props :any) => {
//     const chartRef = useRef<HTMLDivElement>(null);
//     var created = false;
//     var candlestickSeries: any = null;
//     var chart: any = null;

//     useEffect(() => {
//         // Call the createCandlestickChart function when the component is mounted
//         createCandlestickChart();
//         setupData();
        
//     }, []);

//     const setupData = async () => {
//         try {
//             await candlestickSeries.setData(props.data.candlesticks);

//             for(let i = 0; i < props.data.rects.length; i++){
//                 let rect = chart.addLineSeries();
//                 await rect.setData(props.data.rects[i]);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     function createCandlestickChart() {
//         if (!created) {
//             // Access the chart element using document.getElementById()
//             const chartElement = chartRef.current;
//             if (!chartElement) return;

//             chart = createChart(chartElement, {
//                 autoSize: true,
//                 height: props.height,
//                 timeScale: {
//                     timeVisible: true,
//                     secondsVisible: false,
//                 },
//             });

//             chart.applyOptions({
//                 crosshair: {
//                     // Change mode from default 'magnet' to 'normal'.
//                     // Allows the crosshair to move freely without snapping to datapoints
//                     mode: CrosshairMode.Normal,
            
//                     // Vertical crosshair line (showing Date in Label)
//                     vertLine: {
//                         width: 8,
//                         color: '#C3BCDB44',
//                         style: LineStyle.Solid,
//                         labelBackgroundColor: '#9B7DFF',
//                     },
            
//                     // Horizontal crosshair line (showing Price in Label)
//                     horzLine: {
//                         color: '#9B7DFF',
//                         labelBackgroundColor: '#9B7DFF',
//                     },
//                 },
//             });

//             candlestickSeries = chart.addCandlestickSeries();
            
//             // Example data
//             // const data = [
//             //     { time: '2022-01-01', open: 50, high: 60, low: 40, close: 55 },
//             //     { time: '2022-01-02', open: 55, high: 65, low: 45, close: 60 },
//             //     { time: '2022-01-03', open: 60, high: 70, low: 50, close: 65 },
//             //     // ...
//             // ];

//             created = true;
//         }
//   }

//   return (<>
//         {/* Use the chartRef to reference the chart element */}
//         <div ref={chartRef} id="chart" className={styles.container}/>
//     </>);
// };

// Chart.defaultProps = {
//     data: null,
//     width: 1200,
//     height: 800
// };

// Chart.propTypes = {
//     data: PropTypes.any,
//     width: PropTypes.number,
//     height: PropTypes.number
// };

// ---------------------------------------------------------------------------------
import React, { useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import { createChart, CrosshairMode, LineStyle} from 'lightweight-charts';
import styles from './Chart.module.scss';

export const Chart = (props :any) => {
    const chartRef = useRef<HTMLDivElement>(null);
    var created = false;
    var candlestickSeries: any = null;
    var chart: any = null;

    useEffect(() => {
        // Call the createCandlestickChart function when the component is mounted
        createCandlestickChart();
        if(props.data !== null){
            setupData();
        }
        
        
    }, [props.data]);

    const setupData = async () => {
        console.log("setupData")
        try {
            // chart.clear();
            // candlestickSeries = await chart.addCandlestickSeries();
            await candlestickSeries.setData(props.data.candlesticks);
            console.log(candlestickSeries);

            for(let i = 0; i < props.data.rects.length; i++){
                let rect = chart.addLineSeries({
                    priceLineVisible: false,
                    lastValueVisible: false,
                    color: "green"
                });
                await rect.setData(props.data.rects[i]);
            }
        } catch (error) {
            console.error(error);
        }
    }

    function createCandlestickChart() {
        if (!created) {
            // Access the chart element using document.getElementById()
            const chartElement = chartRef.current;
            if (!chartElement) return;

            chart = createChart(chartElement, {
                autoSize: true,
                height: props.height,
                timeScale: {
                    timeVisible: true,
                    secondsVisible: false,
                },
            });

            chart.applyOptions({
                crosshair: {
                    // Change mode from default 'magnet' to 'normal'.
                    // Allows the crosshair to move freely without snapping to datapoints
                    mode: CrosshairMode.Normal,
            
                    // Vertical crosshair line (showing Date in Label)
                    vertLine: {
                        width: 8,
                        color: '#C3BCDB44',
                        style: LineStyle.Solid,
                        labelBackgroundColor: '#9B7DFF',
                    },
            
                    // Horizontal crosshair line (showing Price in Label)
                    horzLine: {
                        color: '#9B7DFF',
                        labelBackgroundColor: '#9B7DFF',
                    },
                },
            });

            candlestickSeries = chart.addCandlestickSeries();
            
            // Example data
            // const data = [
            //     { time: '2022-01-01', open: 50, high: 60, low: 40, close: 55 },
            //     { time: '2022-01-02', open: 55, high: 65, low: 45, close: 60 },
            //     { time: '2022-01-03', open: 60, high: 70, low: 50, close: 65 },
            //     // ...
            // ];

            created = true;
        }
  }

  return (<>
        {/* Use the chartRef to reference the chart element */}
        <div ref={chartRef} id="chart" className={styles.container}/>
    </>);
};

Chart.defaultProps = {
    data: null,
    width: 1200,
    height: 800
};

Chart.propTypes = {
    data: PropTypes.any,
    width: PropTypes.number,
    height: PropTypes.number
};

