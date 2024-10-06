'use client'; // Mark the component as a Client Component

import React, { useEffect } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import Avatar from './avatar';
import 'animate.css'; // Importing animate.css for animations

function HeroSection() {
  useEffect(() => {
    const textElements = document.querySelectorAll('.animate__animated, .animate__fadeInUp');
    textElements.forEach((element) => {
      element.classList.add('animate__animated', 'animate__fadeInUp');
    });
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden mb-16"> {/* Add margin bottom here */}
      {/* Background Video */}
      <video
        src="\Images\scroll.mp4" // Change to your background video file
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[100%] object-cover z-0 sm:h-[150%]"
      >
        Your browser does not support the video tag.
      </video>

      <div className="mx-auto mb-8 w-3/4 text-center text-white relative z-10">
        <h1 className="mb-4 text-4xl font-bold sm:text-6xl text-white animate__animated animate__fadeInUp">
          Grow Ideas💡into Reality🌱 
        </h1>
        <p className="animate__animated animate__fadeInUp">
          Empowering student innovators & entrepreneurs at JNEC.
        </p>
      </div>
      
      <div className="relative z-10 flex flex-col gap-6 mx-auto max-w-5xl sm:text-white">
        {/* Hero Video */}
        <video
          src="/Images/Hero video.mp4"
          width={1000}
          height={800}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto rounded-lg object-cover object-center"
        >
          Your browser does not support the video tag.
        </video>

        <div className="sm:absolute sm:bottom-0 sm:m-8 sm:rounded-lg sm:border sm:border-black/30 sm:p-6 sm:py-5 sm:backdrop-blur-2xl sm:bg-black text-white">
          <div className="flex flex-col gap-1 sm:max-w-[100%] sm:gap-2">
            <div className="font-bold sm:block text-white">Most Popular</div>
            <Link href="post">
              <h3 className="text-3xl font-bold sm:text-3xl hover:text-blue-500 text-white">
                Glimpse of Our Past Event 📸
              </h3>
            </Link>
            <div className="mt-2 flex items-center gap-1 font-bold sm:hidden">
              <Avatar src="/Images/ECELL JNEC.png" alt="avatar" size={32} />
              <p className="ml-2">ECELL JNEC</p> • <p>16 Jan 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
