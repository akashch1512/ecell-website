import Avatar from '@/components/avatar'
import Link from 'next/link'
import React from 'react'
import { TbArrowBack } from 'react-icons/tb'

function Srujan() {
  return ( 
    <main className='mb-auto text-gray-200'>
      <div className='text-center'>
        <div className='mb-4 font-bold text-gray-400'>Saturday, September 14, 2024</div>
        <h1 className='title-xl m-0 border-b-0 p-0 lg:mb-12 lg:border-b lg:pb-8 text-primary-500'>
        Srujan Event: Unleashing Creativity and Innovation
        </h1>
        <div className='mt-4 flex items-center justify-center gap-4 text-left lg:hidden'>
          <Avatar
            src='/Images/ECELL JNEC.png'
            alt='avatar'
            size={48}
          />
          <div>
            <div className='text-primary-400'>E-Cell JNEC</div>
            <a className='text-blue-500 hover:underline' href="#">~ Akash Chaudhari</a>
          </div>
        </div>

        <div className='mt-8 flex gap-16 text-left'>
          <div className='hidden min-w-2 max-w-48 flex-col items-start gap-12 lg:flex'>
            <div className='flex items-center justify-center gap-4 text-left'>
              <Avatar
                src='/Images/ECELL JNEC.png'
                alt='avatar'
                size={48}
              />
              <div>
                <div className='text-primary-400'>E-Cell JNEC</div>
                <a className='text-blue-500 hover:underline' href="#">~ Akash</a>
              </div>
            </div>
            <div>
              <h2 className='text-sm uppercase text-primary-300'>Tags</h2>
              <div className='flex flex-wrap gap-2'>
                <a href="#" className='uppercase text-blue-400 hover:text-blue-500'>tag1</a>
                <a href="#" className='uppercase text-blue-400 hover:text-blue-500'>tag2</a>
                <a href="#" className='uppercase text-blue-400 hover:text-blue-500'>tag3</a>
              </div>
            </div>
            <div>
              <h2 className='text-sm uppercase text-primary-300'>Previous article</h2>
              <Link href="#" className="text-blue-400 hover:text-blue-500">No Last Article</Link>
            </div>
            <Link href="/posts" className='flex items-center gap-2 text-blue-400 hover:text-blue-500'>
              <TbArrowBack /> Back to the blog
            </Link>
          </div>

          {/* Content of the article */}
          <div className='flex-1'>
            <div className='flex flex-col gap-8'>
              <h2 className='text-2xl text-primary-500'>Overview: </h2>
              <p className='text-gray-300'>
              The Srujan Event is a hallmark initiative by E-Cell JNEC aimed at fostering creativity, innovation, and entrepreneurial spirit among students of Jawaharlal Nehru Engineering College (JNEC). This event serves as a platform to showcase the innovative ideas and solutions developed by the participants, providing them with an opportunity to present their projects and gain valuable feedback from industry experts and peers.
              </p>
              <h2 className='text-2xl text-primary-500'>Purpose: </h2>
              <p className='text-grey-300'>The primary objective of Srujan is to encourage students to think creatively and develop practical solutions to real-world problems. By providing a stage for students to present their ideas, we aim to inspire them to pursue their entrepreneurial ambitions and contribute to the development of a vibrant startup ecosystem at JNEC.</p>
              <h2 className='text-2xl text-primary-500'>Event Highlights:</h2>
              <p className='text-grey-300'>1. Idea Presentations: Participants will have the chance to present their innovative ideas and projects to a panel of judges and an audience of fellow students. These presentations will highlight the creativity and practicality of their solutions, offering insights into various fields of technology, business, and social impact.<br></br><br></br>

2. Expert Talks: The event will feature talks and sessions by industry experts and successful entrepreneurs who will share their experiences and insights. These sessions are designed to provide participants with inspiration, guidance, and practical advice on how to turn their ideas into successful ventures.<br></br><br></br>

3. Networking Opportunities: Srujan will facilitate networking between participants, mentors, and industry professionals. This interaction will help students build connections, seek mentorship, and explore potential collaborations for their projects.<br></br><br></br>

4. Workshops and Panels: Attendees can participate in workshops and panel discussions focused on various aspects of entrepreneurship, including idea validation, business planning, and pitching techniques. These sessions will equip participants with the skills and knowledge needed to refine their ideas and execute them effectively.<br></br><br></br>

5. Recognition and Awards: To acknowledge the hard work and creativity of participants, Srujan will feature awards and recognition for the most innovative and impactful projects. This recognition will not only celebrate their achievements but also provide motivation for future endeavors.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Srujan