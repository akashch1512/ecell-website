import Avatar from '@/components/avatar';
import React from 'react'
import { FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function About() {
    const iconSize = 32;

    return (
        <main className='mb-auto'>
            <h1 className="title-xl text-white">About</h1>
            <div className='flex flex-col gap-12 sm:flex-row'>
                <div className='flex flex-col items-center gap-2 sm:flex-1 sm:gap-4'>
                    <Avatar
                        src='https://i.postimg.cc/qvvgGVDj/aka.jpg'
                        alt='avatar'
                        size={128}
                        className='sm:hidden'
                    />
                    <Avatar
                        src='https://i.postimg.cc/qvvgGVDj/aka.jpg'
                        alt='avatar'
                        size={200}
                        className='hidden sm:block'
                    />
                    <h2 className='text-2xl font-bold text-white'>Akash Chaudhari</h2>
                    <p className='text-center text-white'>AIDS Student | NSS Cordinator | Secratory </p>
                    <div className='flex gap-4 opacity-80 sm:mt-4 text-white'>
                        <a href=""><MdEmail size={iconSize} /></a>
                        <a href=""><FaGithub size={iconSize} /></a>
                        <a href=""><FaFacebook size={iconSize} /></a>
                        <a href=""><FaYoutube size={iconSize} /></a>
                    </div>
                </div>
                <p className='text-center sm:flex-[2] sm:text-left text-white'>
                I am a B.Tech student at JNEC College MGM University with a passion for Data Science and AI. I have experience in Python and C and have won various competitions. I am eager to learn more about Data Science and AI and to use my skills to solve real-world problems.
                </p>
            </div>
        </main>
    )
}

export default About;