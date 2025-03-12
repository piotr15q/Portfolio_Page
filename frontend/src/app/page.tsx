'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file) {
      setSelectedImage(URL.createObjectURL(file));
      setFile(file);
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
  
  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/text/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDjangoText(data.message)
  //       console.log("Django respone", data);
  //     })
  //     .catch((error) => {
  //       console.log("Fetch error", error)
  //       setDjangoText("Loading Django data error")});
  // }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome</h1>
      <div className="flex flex-col items-center mt-10">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {selectedImage && (
          <>
            <Image src={selectedImage} alt="Uploaded image" width={500} height={300} />
            <button
              onClick={handleUpload}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
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
