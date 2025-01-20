import React, { useState } from "react";
import axios from "../services/api";
import Chart from "./Chart.jsx";

function FileUpload() {
    const [chartData, setChartData] = useState(null);

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            alert("Please select a file!");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("/upload", formData);

            console.log("Backend Response:", response.data);

            setChartData(response.data);
        } catch (error) {
            console.error("File upload failed:", error);
            alert("Error uploading file!");
        }
    };

    return (
        <div>
            <input type="file" onChange={handleUpload} />
            {chartData && <Chart key={JSON.stringify(chartData)} data={chartData} />}
        </div>
    );
}

export default FileUpload;
