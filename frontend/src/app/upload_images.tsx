'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

export default function UploadImages() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file) {
      setSelectedImage(URL.createObjectURL(file));
      setFile(file);
      setPrediction(null);
    }
  };

  const handleUpload = async () => {
    if(!file) return;

    const formData = new FormData();
    formData.append("image", file);

  try{
    const response = await fetch("http://127.0.0.1:8000/api/predict/", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setPrediction(data.prediction);
  } catch (error) {
    console.error("Upload error", error);
    setPrediction("Error in prediction"); 

  }
};

  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <label className="mb-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mt-10">
          Upload Image
          <input className="hidden" type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        {selectedImage && (
          <>
            <Image src={selectedImage} alt="Uploaded image" width={500} height={300} />
            <button
              onClick={handleUpload}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
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