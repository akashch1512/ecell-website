import Avatar from '@/components/avatar'
import Link from 'next/link'
import React from 'react'
import { TbArrowBack } from 'react-icons/tb'

function Post() {
  return (
    <main className='mb-auto text-gray-200'>
      <div className='text-center'>
        <div className='mb-4 font-bold text-gray-400'>Saturday, September 1, 2024</div>
        <h1 className='title-xl m-0 border-b-0 p-0 lg:mb-12 lg:border-b lg:pb-8 text-primary-500'>
          What is E-Cell JNEC? Why Was It Started?
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
              <h2 className='text-2xl text-primary-500'>What is E-Cell JNEC?</h2>
              <p className='text-gray-300'>
              E-Cell JNEC (Entrepreneurship Cell of Jawaharlal Nehru Engineering College) is a student-driven initiative that aims to ignite the entrepreneurial mindset among students. Established to bridge the gap between academic knowledge and real-world business challenges, E-Cell JNEC serves as a launchpad for aspiring innovators and entrepreneurs. It was started with the vision of creating a supportive ecosystem where students can explore entrepreneurship, work on innovative solutions, and bring their ideas to life.
              </p>
              <h2 className='text-2xl text-primary-500'>Our Motive: Why We Do What We Do</h2>
              <p className='text-gray-300'>
              The core motive of E-Cell JNEC is to empower students with the skills, resources, and mentorship necessary to thrive in the startup world. We believe that fostering an entrepreneurial culture is essential for driving creativity, solving pressing challenges, and contributing to economic growth. Through workshops, mentorship programs, and competitions, we aim to:<br /><br />

              •  <span className='text-primary-400'>Inspire students</span> to think beyond traditional career paths.<br />
              •  Provide <span className='text-primary-400'>hands-on experience</span> in entrepreneurship.<br />
              •  Equip future leaders with the ability to innovate and adapt in a rapidly changing world.
              </p>
              <h2 className='text-2xl text-primary-500'>Our Vision: Shaping the Future of Innovation</h2>
              <p className='text-gray-300'>
              Our vision is to make JNEC a hub of innovation and entrepreneurship that attracts and nurtures the next generation of changemakers. By 2030, we aspire to:<br /><br />
              •  Support the creation of <span className='text-primary-400'>50+ successful student-led startups</span>.<br />
              •  Host <span className='text-primary-400'>100+ events</span> that challenge and inspire entrepreneurial thinking.<br />
              •  Build strong industry ties to ensure students have the opportunities and connections to succeed in the competitive startup landscape.<br /><br />

              E-Cell JNEC is committed to helping students unlock their full potential, transforming their ideas into successful ventures that make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Post
