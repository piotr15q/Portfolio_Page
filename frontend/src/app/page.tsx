'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import UploadImages from "./upload_images";

export default function Home() {

  return (
    <div>
      <div className="container mx-auto px-2 mx-auto">
        <h1 className="mt-8 text-center text-8xl font-bold">Welcome</h1>
        <p className="mt-8 text-center text-2xl">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum."</p>
      </div>
        
      
      <UploadImages/>


    </div>
  );
}
