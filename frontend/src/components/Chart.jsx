import React from "react";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function Chart({ data }) {
    console.log("Chart Data:", data);

    if (!data || !data.columns || data.columns.length < 2) {
        return <p>Not enough data to render the chart.</p>;
    }

    const { columns, data: rows } = data;
    const xColumn = columns[0]; // First column for x-axis
    const yColumn = columns[1]; // Second column for y-axis

    const chartData = {
        labels: rows.map((row) => row[xColumn]),
        datasets: [
            {
                label: yColumn,
                data: rows.map((row) => row[yColumn]),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
        ],
    };

    return <Bar data={chartData} />;
}

export default Chart;
