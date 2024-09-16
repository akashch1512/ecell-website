import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Avatar from './avatar'

function HeroSection() {
    return (
        <section>
            <div className="mx-auto mb-8 w-3/4 text-center text-white">
                <h1 className="mb-4 text-4xl font-bold sm:text-6xl text-white">Our Recent Achivement</h1>
                <p>Empowering student innovators & entrepreneurs at JNEC. 💡🚀</p>
            </div>
            <div className="flex flex-col gap-6 sm:relative sm:text-white">
                <Image
                    src="/Images/hero image.svg" width={300} height={200} alt="hero image"
                    className="max-h-[300px] min-w-full rounded-3xl object-cover object-center sm:max-h-[600px]"
                />
                <div className="sm:absolute sm:bottom-0 sm:m-8 sm:rounded-2xl sm:border sm:border-black/30 sm:p-6 sm:py-5 sm:backdrop-blur-2xl bg-black text-white">
                    <div className="flex flex-col gap-1 sm:max-w-[100%] sm:gap-2">
                        <div className="font-bold sm:block text-white">Most popular</div>
                        <Link href="post">
                            <h3 className="text-3xl font-bold sm:text-3xl text-white">What is E-Cell JNEC? Why Was It Started? </h3>
                        </Link>
                        
                        <div className="mt-2 flex items-center gap-1 font-bold sm:hidden">
                            <Avatar src="/Images/ECELL JNEC.png" alt="avatar" size={32} />
                            <p className="ml-2">ECELL JNEC</p>
                            •
                            <p>16 janv 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection