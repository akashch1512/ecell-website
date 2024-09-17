import Avatar from '@/components/avatar';
import React from 'react';
import { FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function About() {
    const iconSize = 32;

    const profiles = [
            {
                name: "Akash Chaudhari",
                role: "Secretary | AIDS Student ",
                imgSrc: "/Team/akash.jpg"
            },
            {
                name: "Revealing Soon",
                role: "Vice Secretary",
                imgSrc: "/Team/OIP (1).jpeg"
            },
            {
                name: "Steven Dsilva",
                role: "Design Head | ECS Studnet",
                imgSrc: "/Team/Steven.svg"
            },
            {
                name: "Revealing Soon",
                role: "Tech Head",
                imgSrc: "/Team/OIP (1).jpeg"
            },
            {
                name: "Shraddha Pardeshi",
                role: "Research Head | CS Student",
                imgSrc: "/Team/shraddha.jpg"
            },
            {
                name: "Aarya Babhulgaonkar",
                role: "Content Head | CS Student",
                imgSrc: "/Team/arya.jpg"
            },
            {
                name: "Gaurav Padalkar",
                role: "Event Head | AI-Robotics Student",
                imgSrc: "/Team/gaurav.jpg"
            },
            {
                name: "Shripaad Chaudhari",
                role: "Finance Head | CS Student",
                imgSrc: "/Team/shripaad.jpg"
            }
        
    ];

    return (
        <main className='mb-auto'>
            <h1 className="title-xl text-white">About Us</h1>
            
            {/* Section for the top two profiles */}
            <div className='grid grid-cols-1 gap-12 sm:grid-cols-2'>
                {profiles.slice(0, 2).map((profile, index) => (
                    <div key={index} className='flex flex-col items-center gap-2'>
                        <Avatar
                            src={profile.imgSrc}
                            alt={profile.name}
                            size={128}
                            className='sm:hidden'
                        />
                        <Avatar
                            src={profile.imgSrc}
                            alt={profile.name}
                            size={200}
                            className='hidden sm:block'
                        />
                        <h2 className='text-2xl font-bold text-white'>{profile.name}</h2>
                        <p className='text-center text-white'>{profile.role}</p>
                        <div className='flex gap-4 opacity-80 sm:mt-4 text-white'>
                            <a href=""><MdEmail size={iconSize} /></a>
                            <a href=""><FaGithub size={iconSize} /></a>
                            <a href=""><FaFacebook size={iconSize} /></a>
                            <a href=""><FaYoutube size={iconSize} /></a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Section for the remaining profiles */}
            <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 mt-12'>
                {profiles.slice(2).map((profile, index) => (
                    <div key={index} className='flex flex-col items-center gap-2'>
                        <Avatar
                            src={profile.imgSrc}
                            alt={profile.name}
                            size={128}
                            className='sm:hidden'
                        />
                        <Avatar
                            src={profile.imgSrc}
                            alt={profile.name}
                            size={200}
                            className='hidden sm:block'
                        />
                        <h2 className='text-2xl font-bold text-white'>{profile.name}</h2>
                        <p className='text-center text-white'>{profile.role}</p>
                        <div className='flex gap-4 opacity-80 sm:mt-4 text-white'>
                            <a href=""><MdEmail size={iconSize} /></a>
                            <a href=""><FaGithub size={iconSize} /></a>
                            <a href=""><FaFacebook size={iconSize} /></a>
                            <a href=""><FaYoutube size={iconSize} /></a>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default About;
