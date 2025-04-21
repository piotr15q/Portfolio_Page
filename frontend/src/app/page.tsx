'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import UploadImages from "./upload_images";
import UploadPDF from "./upload_cv";
export default function Home() {

  return (
    // <div>
    //   <div className="container mx-auto px-2 mx-auto">
    //     <h1 className="mt-8 text-center text-6xl font-bold">Welcome</h1>
    //     <p className="mt-8 text-center text-2xl">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    //       et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
    //       ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
    //       fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
    //       mollit anim id est laborum."</p>
    //   </div>
      
    //   <div>
    //     <h1 className="mt-8 text-center text-6xl font-bold">Projects</h1>
    //     <p className="mt-8 text-center text-2xl">
    //       This is 
    //     </p>
    //   </div>
      
    //   <UploadImages/>
    //   <div>
    //     <h1 className="mt-8 text-center text-6xl font-bold">Projects</h1>
    //     <p className="mt-8 text-center text-2xl">
    //       This is 
    //     </p>
    //   </div>

    // </div>
    <div className="min-h-screen bg-white text-dark">
      {/* Header */}
      <header className="bg-gray-100 p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Moje Portfolio</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-gray-400">O mnie</a></li>
              <li><a href="#projects" className="hover:text-gray-400">Projekty</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* About Section */}
      <section id="about" className="container mx-auto p-10 text-center">
        <h2 className="text-4xl font-semibold mb-4">About me</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Hello, my name is Piotr Piotrowski. I am passionate about artificial intelligence and machine learning, developing my skills through AI projects and data analysis. 
          I develop deep learning models, such as image classification, and data mining, and my solutions focus on the practical application of technology to real-world problems. 
          I am actively expanding my knowledge, implementing models and experimenting with modern technologies, 
          aiming for my first role as a AI/ML Engineer or Data Scientist. In addition, I have also been involved in game development, 
          which has allowed me to gain experience in working on large and complex project, and create my own game which will soon be fully 
          published on steam.
        </p>
      </section>
      
      {/* Dog&Cats Project Section */}
      <section id="projects" className="bg-white p-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">AI/ML Projects</h2>
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold">Dogs and cats classifier</h3>
              <p className="mt-2">
                This project is an image classification model that recognizes whether there is a dog or a cat in an image. 
                It was implemented in PyTorch and uses convolutional neural networks (CNN) for computer vision. 
                The neural network model, was created from scratch and was trained on nearly 17,000 images containing either a dog or a cat. 
                The model achieved results of ~87% accuracy. The model is integrated with this website, 
                where the user can upload an image and the system will return a classification result.
              </p>
              <UploadImages />
            </div>
          </div>
        </div>
      </section>

      {/* Cv classificator Project */}
      <section id="projects" className="bg-white p-10">
        <div className="container mx-auto text-center">
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold">CV checker</h3>
              <p className="mt-2">
                This project is an image classification model that recognizes whether there is a dog or a cat in an image. 
                It was implemented in PyTorch and uses convolutional neural networks (CNN) for computer vision. 
                The neural network model, was created from scratch and was trained on nearly 17,000 images containing either a dog or a cat. 
                The model achieved results of ~87% accuracy. The model is integrated with this website, 
                where the user can upload an image and the system will return a classification result.
              </p>
              {<UploadPDF/>}
            </div>
          </div>
        </div>
      </section>

      {/* Steam Game Project Section */}
      <section id="projects" className="bg-white p-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Other Project</h2>
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold">Game available on steam "Just Cube"</h3>
              <p className="mt-2">
                A 2d platform game created from scratch in Unity using the C# programming language. The game involves passing difficult levels and fighting with bosses. 
                It has been added to steam, at this moment completed steam page and released a demo. 
                The official game is completed, but in order to gather more players, it will be released in the future. 
              </p>
              <div className="flex justify-center mt-6">
                <Link href="https://store.steampowered.com/app/3405420/Just_Cube/" target="-blank" rel="noopener noreferrer">
                  <Image className="rounded-lg shadow-md max-w-xl" src="/steamgame.png" alt="Steam Game" width={500} height={300}/>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      {/* Main technology stack */}
      <section id="stack" className="bg-white p-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Main stack</h2>
          <div className="grid grid-cols-3 gap-6 max-w-full mx-auto">
            <div className="relative group bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
              <img className="h-32 mx-auto transition-transform duration-300 group-hover:scale-110" 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
                alt="Python" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Python</span>
              </div>
            </div>

            <div className="relative group bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
              <img className="h-32 mx-auto transition-transform duration-300 group-hover:scale-110" 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" 
                alt="Python" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Pytorch</span>
              </div>
            </div>

            <div className="relative group bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
              <img className="h-32 mx-auto transition-transform duration-300 group-hover:scale-110" 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" 
                alt="Python" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">NumPy</span>
              </div>
            </div>

            <div className="relative group bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
              <img className="h-32 mx-auto transition-transform duration-300 group-hover:scale-110" 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" 
                alt="Python" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Pandas</span>
              </div>
            </div>
            
            <div className="relative group bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
              <img className="h-32 mx-auto transition-transform duration-300 group-hover:scale-110" 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" 
                alt="Python" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Matplotlib</span>
              </div>
            </div>

            <div className="relative group bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
              <img className="h-32 mx-auto transition-transform duration-300 group-hover:scale-110" 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" 
                alt="Python" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Scikit-learn</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional stack */}
      <section id="stack" className="bg-white p-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Additional stack</h2>
          <div className="grid grid-cols-3 gap-6 max-w-full mx-auto">
            
            <div className="relative group bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
              <img className="h-32 mx-auto transition-transform duration-300 group-hover:scale-110" 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" 
                alt="Python" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Git</span>
              </div>
            </div>

            <div className="relative group bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
              <img className="h-32 mx-auto transition-transform duration-300 group-hover:scale-110" 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" 
                alt="Python" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Django</span>
              </div>
            </div>

            <div className="relative group bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
              <img className="h-32 mx-auto transition-transform duration-300 group-hover:scale-110" 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" 
                alt="Python" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Unity</span>
              </div>
            </div>

            <div className="relative group bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
              <img className="h-32 mx-auto transition-transform duration-300 group-hover:scale-110" 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" 
                alt="Python" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">C#</span>
              </div>
            </div>

            </div>
        </div>
      </section>

      


      {/* Contact Section */}
      <section id="contact" className="container mx-auto p-10 text-center">
        <h2 className="text-4xl font-semibold mb-6">Kontakt</h2>
        <form className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left">Imię:</label>
            <input type="text" id="name" name="name" required className="w-full p-2 rounded bg-gray-100 text-dark border border-dark" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left">Email:</label>
            <input type="email" id="email" name="email" required className="w-full p-2 rounded bg-gray-100 text-dark border border-dark" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left">Wiadomość:</label>
            <textarea id="message" name="message" required className="w-full p-2 rounded bg-gray-100 text-dark border border-dark"></textarea>
          </div>
          <button type="submit" className="bg-gray-600 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-pointer">Wyślij</button>
        </form>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-100 p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-gray-400">O mnie</a></li>
              <li><a href="#projects" className="hover:text-gray-400">Projekty</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
