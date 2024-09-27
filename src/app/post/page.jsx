import React from 'react';
import { TbArrowBack } from 'react-icons/tb'; // If you want to use the back icon somewhere
import Image from 'next/image'; // Assuming you're using Next.js for React

function Eureka2024() {
  return (
    <main className='text-gray-900 bg-white px-8 py-12'>
      {/* Header Section */}
      <header className='text-center mb-8'>
        <h1 className='text-4xl font-bold text-primary-500 mb-4'>Eureka 2024 Business Model Pitching Competition</h1>
        <p className='text-xl text-gray-700'>
          Are you ready to bring your innovative ideas to life and showcase your entrepreneurial spirit?
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
          </div>
          <div>
            <a href='https://forms.gle/vKThBTqqNXKBMmP3A' target='_blank' rel='noopener noreferrer'>
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
            src='/Images/flowchart.png'
            alt='Flowchart of the Participation Process'
            width={800}
            height={400}
          />
        </div>
      </section>

      {/* Event Details Section */}
      <section className='mb-16'>
        <h2 className='text-2xl font-semibold text-primary-500 mb-6 text-center'>Event Details</h2>
        <div className='text-lg text-gray-700'>
          <p>📅 <strong>Date:</strong> 1st October 2024</p>
          <p>🕒 <strong>Time:</strong> 10:00 AM to 5:00 PM</p>
          <p>📍 <strong>Venue:</strong> Aryabhatta Hall, MGMU JNEC</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className='text-center'>
        <h2 className='text-2xl font-semibold text-primary-500 mb-6'>Need Help?</h2>
        <p className='text-lg text-gray-700 mb-4'>
          If you have any queries regarding the event, please feel free to contact:
        </p>
        <p className='text-lg text-gray-700'>
          <strong>Akash:</strong> 9545441133 <br />
          <strong>Nirbhay:</strong> 8390600361
        </p>
        <div className='mt-6'>
          <a href='https://chat.whatsapp.com/LumSsJwyCyW2PSHxiPVMQs' target='_blank' rel='noopener noreferrer'>
            <button className='bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition'>
              Join WhatsApp Group for Updates
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Eureka2024;
