import Avatar from '@/components/avatar'
import Link from 'next/link'
import React from 'react'
import { TbArrowBack } from 'react-icons/tb'

function Post() {
  return (
    <main className='mb-auto text-white'>
      <div className='text-center'>
        <div className='mb-4 font-bold text-white'>Saturday, August 5, 2023</div>
        <h1 className='title-xl m-0 border-b-0 p-0 lg:mb-12 lg:border-b lg:pb-8 text-white'>Article Title : Version 20.2</h1>
        <div className='mt-4 flex items-center justify-center gap-4 text-left lg:hidden'>
          <Avatar
            src='https://i.postimg.cc/qvvgGVDj/aka.jpg'
            alt='avatar'
            size={48}
          />
          <div>
            <div>Akash Chaudhari</div>
            <a className='text-primary' href="#">@Twitter</a>
          </div>
        </div>

        <div className='mt-8 flex gap-16 text-left'>
          <div className='hidden min-w-2 max-w-48 flex-col items-start gap-12 lg:flex'>
            <div className='flex items-center justify-center gap-4 text-left'>
              <Avatar
                src='https://i.postimg.cc/qvvgGVDj/aka.jpg'
                alt='avatar'
                size={48}
              />
              <div>
                <div>Akash Chaudhari</div>
                <a className='text-white' href="#">@Twitter</a>
              </div>
            </div>
            <div>
              <h2 className='text-sm uppercase'>Tags</h2>
              <div className='flex flex-wrap gap-2'>
                <a href="#" className='uppercase text-white'>tag1</a>
                <a href="#" className='uppercase text-white'>tag2</a>
                <a href="#" className='uppercase text-white'>tag3</a>
              </div>
            </div>
            <div>
              <h2 className='text-sm uppercase'>Previous article</h2>
              <Link href="#" className="text-white">How to fix a code in the browser ?</Link>
            </div>
            <Link href="/posts" className='flex items-center gap-2 text-white'>
              <TbArrowBack /> Back to the blog
            </Link>
          </div>

          {/* Content of the article */}
          <div className='flex-1'>
            <div className='flex flex-col gap-8'>
              <h2 className='text-2xl text-white'>Go Ahead</h2>
              <p>
              Srujan is an innovative event focused on fostering creativity and entrepreneurship among students. It features a series of workshops, talks, and competitions designed to inspire and equip participants with the skills needed to bring their ideas to life. Join us to explore new opportunities, network with industry experts, and showcase your talents!
              </p>
              <p>
              Srujan is an innovative event focused on fostering creativity and entrepreneurship among students. It features a series of workshops, talks, and competitions designed to inspire and equip participants with the skills needed to bring their ideas to life. Join us to explore new opportunities, network with industry experts, and showcase your talents!
              </p>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Post