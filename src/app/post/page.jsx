// import React, { useEffect, useState } from 'react';
// import { TbArrowBack } from 'react-icons/tb'; // If you want to use the back icon somewhere
// import Image from 'next/image'; // Assuming you're using Next.js for React

// src/app/post/page.jsx

"use client"; // Add this line to mark the component as a Client Component

import React, { useEffect, useState } from 'react';
// import { TbArrowBack } from 'react-icons/tb'; // If you want to use the back icon somewhere
import Image from 'next/image'; // Assuming you're using Next.js for React

// Your existing component code here



function Eureka2024() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetDate = new Date('2024-09-29T23:59:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft('Deadline has Extended');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <main className='text-gray-900 bg-white px-8 py-12'>

<section className='flex justify-center mb-8'>
        <Image
          src='/Images/eureka_l.png' // Path to the Eureka logo with transparent background
          alt='Eureka 2024 Logo'
          width={400}
          height={400}
        />
      </section>

      {/* Header Section */}
      <header className='text-center mb-8'>
        {/* <h1 className='text-4xl font-bold text-primary-500 mb-4'>Eureka 2024 Business Model Pitching Competition</h1> */}
        <p className='text-xl text-gray-700'>
          Are you ready to bring your innovative ideas to life and showcase your<br></br>entrepreneurial spirit?
        </p>
      </header>

      {/* Participation Steps */}
      <section className='text-center mb-16'>
        <h2 className='text-2xl font-semibold text-primary-500 mb-6'>How to Participate</h2>
        <p className='text-lg text-gray-700'>
          To complete your registration, follow these steps:
        </p>
        <div className='mt-6 space-y-6'>
          <div>
            <a href='https://www.ecell.in/eureka/' target='_blank' rel='noopener noreferrer'>
              <button className='bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition'>
                Register on the IIT Bombay Eureka Portal
              </button>
            </a>
            <p className='mt-4 text-lg text-gray-700'>
              Do make sure to register on the Official Eureka Portal using the referral code <strong>NEC242178</strong>, to finalize your Team Registration.
              <br />
              
            </p>
            <p className='mt-2 text-red-500 text-sm font-semibold'>⏳ Time left: {timeLeft}</p>
          </div>
          <div>
            <a href='https://forms.gle/MdDyzLPzgf6bvjmN6' target='_blank' rel='noopener noreferrer'>
              <button className='bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition'>
                Register on E-Cell JNEC Registration Form
              </button>
            </a>
          </div>
        </div>
        <p className='mt-4 text-red-500 text-sm font-semibold'>
          📝 Note: Both registrations are mandatory for valid participation.
        </p>
      </section>

      {/* Flowchart Section */}
      <section className='mb-16'>
        <h2 className='text-2xl font-semibold text-primary-500 mb-6 text-center'>Participation Flow</h2>
        <div className='flex justify-center'>
          {/* Example Image */}
          <Image
            src='/Images/flowchart.gif'
            alt='Flowchart of the Participation Process'
            width={800}
            height={400}
          />
        </div>
      </section>

      {/* Event Details Section */}
      <section className='mb-16'>
        <h2 className='text-2xl font-semibold text-primary-500 mb-6 text-center'>Event Details</h2>
        <div className='text-lg text-gray-700 text-center'>
          <p>📅 <strong>Date:</strong> Yet to declare </p>
          <p>🕒 <strong>Time:</strong> 10:00 AM to 5:00 PM</p>
          <p>📍 <strong>Venue:</strong> Yet to declare </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className='text-center mb-16'>
        <h2 className='text-2xl font-semibold text-primary-500 mb-6'>Need Help?</h2>
        <p className='text-lg text-gray-700 mb-4'>
          If you have any queries regarding the event, please feel free to contact:
        </p>
        <p className='text-lg text-gray-700'>
          <strong>Akash:</strong> 9545441133 <br />
          <strong>Nirbhay:</strong> 8390600361
        </p>
        <div className='mt-6'>
          <a href='https://youtu.be/ObDPKj75Eg0?si=9iGAbhduiI8HHDik' target='_blank' rel='noopener noreferrer'>
            <button className='bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition'>
              For Help While Registration
            </button>
          </a>
        </div>
        <div className='mt-6'>
          <a href='https://chat.whatsapp.com/LumSsJwyCyW2PSHxiPVMQs' target='_blank' rel='noopener noreferrer'>
            <button className='bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition'>
              Join WhatsApp Group for Updates
            </button>
          </a>
        </div>
      </section>

      {/* Instagram Section */}
      <section className='text-center'>
        <h2 className='text-2xl font-semibold text-primary-500 mb-6'>Follow Us on Instagram</h2>
        <div className='mt-6'>
          <a href='https://www.instagram.com/ecell_jnec?utm_source=qr&igsh=MWY1OW1jZndwMzlqNw==' target='_blank' rel='noopener noreferrer'>
            <button className='bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition'>
              Follow E-Cell JNEC on Instagram
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Eureka2024;
