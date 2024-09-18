"use client";

import ArticleCard from "@/components/article-card";
import SearchBar from "@/components/search-bar";

export default function Blogs() {
    const tags = [
        { name: "E-Cell JNEC", count: 10 },
        { name: "Launch Event", count: 2 },
        { name: "Srujan", count: 3 },
        { name: "QR Quest", count: 1 },
        { name: "Entrepreneurship", count: 5 },
        { name: "Ideation", count: 4 },
        { name: "Innovation", count: 6 },
        { name: "Team Recruitment", count: 2 }
    ];

    return (
        <main className="mb-auto">
            <h1 className="title-xl text-white">All Posts</h1>
            <div className="flex gap-16">
                <section className="hidden max-h-96 flex-1 flex-col items-start gap-1 overflow-x-auto rounded-lg bg-gray-100 p-4 sm:flex">
                    <h3 className="font-bold text-primary">All Tags</h3>
                    {tags.map((tag, i) => (
                        <button key={i} className="ml-4 text-left text-sm font-medium text-gray-700 hover:text-blue-600">
                            <span>{tag.name} ({tag.count})</span>
                        </button>
                    ))}
                </section>
                <section className="sm:flex-[3]">
                    <div className="mb-8">
                        <SearchBar onChange={(value) => { }} />
                    </div>

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 text-white">
                        <>
                            <ArticleCard
                                key="launch-event"
                                thumbnail="/Images/What is a startup .svg"
                                title="Launch Event: E-Cell JNEC"
                                content="We are excited to announce the launch of E-Cell JNEC, Although we are participating in the prestigious National Entrepreneurship Challenge (NEC) 2024 by E-Cell IIT Bombay, our mission is to build our own entrepreneurial community through events, workshops, and competitions."
                                author={{ name: "ECELL JNEC", avatar: "/Images/ECELL JNEC.png" }}
                                date="6 Sept 2024"
                                postUrl="launch"
                            />
                            <ArticleCard
                                key="srujan-event"
                                thumbnail="/Images/The First Step.svg"
                                title="Srujan Event Conducted By Ecell JNEC"
                                content="Marking the beginning of an exciting entrepreneurial journey. The event featured an engaging orientation and introduction, followed by a thought-provoking guest talk on 'Ideation.' Attendees also benefited from a dynamic panel discussion that explored various aspects of innovation. The event concluded with the launch of the team recruitment drive, giving participants the chance to join and contribute to the E-Cell."
                                author={{ name: "ECELL JNEC", avatar: "/Images/ECELL JNEC.png" }}
                                date="14 Sept 2024"
                                postUrl="srujan"
                            />
                            <ArticleCard
                                key="QR Quest"
                                thumbnail="/Images/srujan.jpg"
                                title="The QR Quest Winners!"
                                content="Congratulations to Sayyad Malik, Zubiya, and Her Partner! A huge round of applause to all 22 participants for your fantastic performance in the competition. Each of you showed great enthusiasm and effort, making this event a success! Special recognition goes to Sayyad Malik, who emerged as the top performer with an impressive 54 scans. Following closely behind, we have our second-place winners, Zubiya and her partner, with 49 scans."
                                author={{ name: "ECELL JNEC", avatar: "/Images/ECELL JNEC.png" }}
                                date="14 Sept 2024"
                                postUrl="qrquest"
                            />
                            <ArticleCard
                                key="what-is-ecell"
                                thumbnail="/Images/hero image.svg"
                                title="What is E-Cell JNEC? Why Was It Started?"
                                content="What is E-Cell JNEC? Our Motive: Why We Do What We Do Our Vision: Shaping the Future of Innovation E-Cell JNEC is committed to helping students unlock their full potential, transforming their ideas into successful ventures that make a difference."
                                author={{ name: "ECELL JNEC", avatar: "/Images/ECELL JNEC.png" }}
                                date="14 Sept 2024"
                                postUrl="post"
                            />
                        </>
                    </div>
                </section>
            </div>
        </main>
    );
}
