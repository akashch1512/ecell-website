import ArticleCard from "@/components/article-card";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
    
       <HeroSection />

      <section className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Recent posts</h2>
          <a href="" className="blue-button">View all</a>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 text-white">
              <ArticleCard
                key="1"
                thumbnail="/Images/What is a startup .svg"
                title="Launch Event: E-Cell JNEC"
                content="We are excited to announce the launch of E-Cell JNEC, Although we are participating in the prestigious National Entrepreneurship Challenge (NEC) 2024 by E-Cell IIT Bombay, our mission is to build our own entrepreneurial community through events, workshops, and competitions"
                author={{ name: "ECELL JNEC", avatar: "/Images/ECELL JNEC.png" }}
                date="6 Sept 2024"
                postUrl="launch"
              />
            <ArticleCard
                key="1"
                thumbnail="/Images/srujan.jpg"
                title="The QR Quest Winners!"
                content="Congratulations to Sayyad Malik, Zubiya, and Her Partner!

A huge round of applause to all 22 participants for your fantastic performance in the competition. Each of you showed great enthusiasm and effort, making this event a success!

Special recognition goes to Sayyad Malik, who emerged as the top performer with an impressive 54 scans. Following closely behind, we have our second-place winners, Zubiya and her partner, with 49 scans."
                author={{ name: "ECELL JNEC", avatar: "/Images/ECELL JNEC.png" }}
                date="14 Sept 2024"
                postUrl="QRQuest"
              />
              <ArticleCard
                key="1"
                thumbnail="/Images/The First Step.svg"
                title="Srujan Event Conducted By Ecell JNEC"
                content="marking the beginning of an exciting entrepreneurial journey. The event featured an engaging orientation and introduction, followed by a thought-provoking guest talk on 'Ideation.' Attendees also benefited from a dynamic panel discussion that explored various aspects of innovation. The event concluded with the launch of the team recruitment drive, giving participants the chance to join and contribute to the E-Cell."
                author={{ name: "ECELL JNEC", avatar: "/Images/ECELL JNEC.png" }}
                date="14 Sept 2024"
                postUrl="Srujan"
              />
          
        </div>

        <h2 className="text-xl font-bold text-white">Past Events</h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 text-white">
          <ArticleCard
                key="1"
                thumbnail="/Images/QR_Quest-logo.png"
                title="The QR Quest Event"
                content=""
                author={{ name: "ECELL JNEC", avatar: "/Images/ECELL JNEC.png" }}
                date="16 janv 2024"
                postUrl="TheQR"
              />
              <ArticleCard
                key="1"
                thumbnail="/Images/Srujan-logo.png"
                title="Srujan Event"
                content=""
                author={{ name: "ECELL JNEC", avatar: "/Images/ECELL JNEC.png" }}
                date="16 janv 2024"
                postUrl="Srujan"
              />
              </div>
        <button className="blue-button mx-auto mt-8 w-max">Loading more...</button>
      </section>
    </main>
  )
}
