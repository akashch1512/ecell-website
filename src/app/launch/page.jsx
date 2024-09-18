import Avatar from '@/components/avatar'
import Link from 'next/link'
import React from 'react'
import { TbArrowBack } from 'react-icons/tb'

function Launch() {
  return ( 
    <main className='mb-auto text-gray-200'>
      <div className='text-center'>
        <div className='mb-4 font-bold text-gray-400'>Saturday, September 6, 2024</div>
        <h1 className='title-xl m-0 border-b-0 p-0 lg:mb-12 lg:border-b lg:pb-8 text-primary-500'>
        Launch Event: E-Cell JNEC
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
              <h2 className='text-2xl text-primary-500'>About Launch Event </h2>
              <p className='text-gray-300'>
              The Launch Event marks the official debut of E-Cell JNEC, an entrepreneurial initiative by Jawaharlal Nehru Engineering College (JNEC). This event serves as a platform to introduce the E-Cell JNEC to the college community and outline its vision, mission, and upcoming activities.
              </p>
              <h2 className='text-2xl text-primary-500'>Highlights:</h2>
              <p className='text-gray-300'>
              •  Introduction to E-Cell JNEC: Learn about the mission and objectives of the cell, designed to foster entrepreneurship and innovation among students.<br></br><br></br>
              •  Vision and Goals: Discover our commitment to supporting aspiring entrepreneurs, providing hands-on experience, and creating a vibrant entrepreneurial ecosystem at JNEC.<br></br><br></br>
              •  Event Schedule: Engage in discussions, network with like-minded individuals, and explore opportunities to get involved in future events and workshops.<br></br><br></br>
              •  Networking Opportunities: Meet fellow students, mentors, and industry professionals who are passionate about entrepreneurship.<br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Launch