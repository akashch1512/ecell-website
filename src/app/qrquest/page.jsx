import Avatar from '@/components/avatar'
import Link from 'next/link'
import React from 'react'
import { TbArrowBack } from 'react-icons/tb'

function QR() {
  return ( 
    <main className='mb-auto text-gray-200'>
      <div className='text-center'>
        <div className='mb-4 font-bold text-gray-400'>Saturday, September 6, 2024</div>
        <h1 className='title-xl m-0 border-b-0 p-0 lg:mb-12 lg:border-b lg:pb-8 text-primary-500'>
          The QR Quest: E-Cell JNEC
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
              <h2 className='text-2xl text-primary-500'>The QR Quest Winners!</h2>
              <p className='text-gray-300'>
                We are thrilled to announce the winners of the QR Quest competition!<br></br><br></br>
                
                Congratulations to Sayyad Malik, Zubiya, and her partner for their exceptional performance. The competition witnessed outstanding enthusiasm and dedication from all 22 participants, making it a resounding success.<br></br><br></br>

                Special recognition goes to Sayyad Malik, who emerged as the top performer with an impressive 54 scans. His strategic approach and relentless effort truly set him apart. Not far behind, our second-place winners, Zubiya and her partner, demonstrated remarkable skill with 49 scans.<br></br><br></br>

                Each participant showcased commendable efforts, and your contributions have made this event memorable. We extend our heartfelt thanks to everyone who took part and made QR Quest a vibrant and engaging experience. Your passion and drive are what make our events extraordinary!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default QR