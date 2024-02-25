"use client"
import {useRef, useEffect} from 'react';
import Chart from 'chart.js/auto';

function ChartDoughnut ({data}){
    const chartRef = useRef(null);
    useEffect(() => {
        if(chartRef.current){
            if(chartRef.current.chart){
                chartRef.current.chart.destroy()
            }
            const contex = chartRef.current.getContext("2d");
            const paslonNames = [data[1].name, data[2].name, data[3].name];
            const paslonVoters = [data[1].voters, data[2].voters, data[3].voters];
            const paslonPercentage = [data[1].percentage, data[2].percentage, data[3].percentage];

            const newChart = new Chart(contex, {
                type: "doughnut",
                data: {
                    labels: paslonNames.map((name, index) => `${name} (${paslonPercentage[index]}%)`),
                    datasets: [
                        {
                            label: "Pemilih",
                            data: paslonVoters,
                            backgroundColor: ["#FF7171", "#E5E5E5", "#28B2FF"],
                        },
                    ],
                },
            })
            chartRef.current.chart = newChart;
        }

    }, [])


    return(
        <>
        <div className='flex mt-24 justify-center w-full h-[70vh]'>
            <canvas ref={chartRef} />

        </div>
        </>
    );
}

export default ChartDoughnut;