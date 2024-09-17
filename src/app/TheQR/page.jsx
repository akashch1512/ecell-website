import Avatar from '@/components/avatar'
import Link from 'next/link'
import React from 'react'
import { TbArrowBack } from 'react-icons/tb'

function theQR() {
  return ( 
    <main className='mb-auto text-gray-200'>
      <div className='text-center'>
        <div className='mb-4 font-bold text-gray-400'>Saturday, September 6, 2024</div>
        <h1 className='title-xl m-0 border-b-0 p-0 lg:mb-12 lg:border-b lg:pb-8 text-primary-500'>
        QR Quest Event: Celebrating Innovation and Engagement
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
              <h2 className='text-2xl text-primary-500'>Overview:</h2>
              <p className='text-gray-300'>
              The QR Quest event, hosted by E-Cell JNEC, was an engaging competition designed to challenge participants with innovative QR code scanning tasks. The event aimed to test participants' quick thinking, tech-savviness, and problem-solving skills in a fun and competitive environment.
              </p>
              <h2 className='text-2xl text-primary-500'>Highlights: </h2>
                <p className="text-grey-300">
                •  Competition Format: Participants were required to scan QR codes scattered around the venue or within a digital platform, each leading to different tasks or challenges.<br></br><br></br>
                •  Top Performers: Congratulations to Sayyad Malik for leading with an impressive 54 scans, and Zubiya, who, along with her partner, secured second place with 49 scans.<br></br><br></br>
                •  Recognition: Special acknowledgment was given to all 22 participants for their enthusiasm and excellent performance.<br></br><br></br>
                </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default theQR
