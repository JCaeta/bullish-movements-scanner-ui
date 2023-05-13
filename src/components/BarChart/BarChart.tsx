import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js/auto';

export const BarChart = (props: any) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: props.labels,
        datasets: [
          {
            label: props.title,
            data: props.data,
            backgroundColor: "green"
          }
        ]
      },
      options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Positive variation"
                }
            },

            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Frequency"
                }
            }
        }
      }
    });
  }, []);

  return (
    <canvas ref={chartRef} />
  );
};

BarChart.defaultProps = {
    title: '',
    data: [],
    labels: []
};
  
BarChart.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.number),
    labels: PropTypes.arrayOf(PropTypes.string)
};