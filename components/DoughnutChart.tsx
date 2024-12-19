"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend);


function DoughnutChart({accounts}:DoughnutChartProps) {
    const data = {
        datasets: [{
            label: "Banks",
            data:[1250,2500,3750,4000,5000],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF'
            ],
            borderColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF'
            ],
            borderWidth: 1
        }]
    };
    
    return (
        <Doughnut data={data} options={{cutout: '70%'}}  />
    );
}

export default DoughnutChart