import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createChart } from 'lightweight-charts';
import styles from './Chart.module.scss';

export const Chart = (props :any) => {
    const chartRef = useRef<HTMLDivElement>(null);
    var created = false;
    var candlestickSeries: any = null;
    var chart: any = null;

    useEffect(() => {
        // Call the createCandlestickChart function when the component is mounted
        createCandlestickChart();
        setupData();
    }, []);

    // useEffect(() => {
    //     console.log("chart: " + chart)
    //     // chart.applyOptions({ width: props.width });
    //   }, [props.width]);


    const setupData = async () => {
        try {
            await candlestickSeries.setData(props.data.candlesticks);

            for(let i = 0; i < props.data.rects.length; i++){
                let rect = chart.addLineSeries();
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
                // width: props.width,
                // height: props.height,
                // width: 0,
                autoSize: true,
                height: props.height,
                timeScale: {
                timeVisible: true,
                secondsVisible: false,
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
