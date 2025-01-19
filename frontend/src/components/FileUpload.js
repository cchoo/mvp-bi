import React, { useState } from "react";
import axios from "../services/api";

function FileUpload() {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        if (!file) return;
        const formData = new FormData();
        formData.append("file", file);
        const response = await axios.post("/upload", formData);
        console.log("Uploaded Data:", response.data);
    };

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default FileUpload;
