'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [djangoText, setDjangoText] = useState<string>("Loading...")

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/text/")
      .then((res) => res.json())
      .then((data) => setDjangoText(data.message))
      .catch(() => setDjangoText("Loading Django data error"));
  }, []);

  return (
    <div >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <h1 className="text-4xl font-bold">Welcome</h1>
      </div>

      {/* Formularz do wgrywania grafiki */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <form style={{ marginTop: '40px' }}>
          <input type="file" accept="image/*" onChange={handleImageChange}/>
        </form>
      </div>
      
      {/* Wyświetlanie wybranego obrazu, jeśli jest */}
      {selectedImage && (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '30vh' }}>
          <Image src={selectedImage} alt="Uploaded image" width={500} height={300} />
          <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>{djangoText}</p>
        </div>

      )}

    </div>
  );
}
