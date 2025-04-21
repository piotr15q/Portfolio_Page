'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

export default function UploadImages() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file) {
      if (file.type === "application/pdf") {
        setSelectedFile(file.name);
        setFile(file);
        setPrediction(null);
      } else {
        alert("Please upload a PDF file.");
        setSelectedFile(null);
        setFile(null);
        setPrediction(null);
      }
    }
  };

  const handleUpload = async () => {
    if(!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try{
      const response = await fetch("http://127.0.0.1:8000/api/predict_cv/", {
        method: "POST",
        body: formData,
      });

      if(!response.ok) {
        console.error("HTTP Error:", response.statusText);
        setPrediction("Error in prediction");
        return;
      }

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error("Upload error", error);
      setPrediction("Error in prediction"); 
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-4">
        <label className="mb-4 bg-gray-600 hover:bg-gray-400 text-white px-4 py-2 rounded cursor-pointer mt-4">
          Upload your PDF for prediction
          <input className="hidden" type="file" accept="application/pdf" onChange={handleFileChange} />
        </label>
        {selectedFile && (
          <>
            <p className="mt-4">File selected: {selectedFile}</p>
            <button
              onClick={handleUpload}
              className="mt-4 bg-gray-600 hover:bg-gray-400 text-white px-4 py-2 rounded cursor-pointer"
            >
              Predict
            </button>
          </>
        )}
        {prediction && <p className="mt-4 text-xl">{`Prediction: ${prediction}`}</p>}
      </div>
    </div>
  );
}
