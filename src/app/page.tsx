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
                thumbnail="/Images/The First Step.svg"
                title="Srujan Event Conducted By Ecell JNEC"
                content="Srujan is an innovative event focused on fostering creativity and entrepreneurship among students. It features a series of workshops, talks, and competitions designed to inspire and equip participants with the skills needed to bring their ideas to life"
                author={{ name: "ECELL JNEC", avatar: "/Images/ECELL JNEC.png" }}
                date="16 janv 2024"
              />
            <ArticleCard
                key="1"
                thumbnail="/Images/srujan.jpg"
                title="The QR Quest!"
                content="Story with clues for The QR Quest is up 📷📱

Do remember to click a selfie with the QR, and tag us on instagram @ecell_jnec
"
                author={{ name: "ECELL JNEC", avatar: "/Images/ECELL JNEC.png" }}
                date="16 janv 2024"
              />

<ArticleCard
                key="1"
                thumbnail="/Images/The First Step.svg"
                title="Srujan Event Conducted By Ecell JNEC"
                content="Srujan is an innovative event focused on fostering creativity and entrepreneurship among students. It features a series of workshops, talks, and competitions designed to inspire and equip participants with the skills needed to bring their ideas to life"
                author={{ name: "ECELL JNEC", avatar: "/Images/ECELL JNEC.png" }}
                date="16 janv 2024"
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
              />
              <ArticleCard
                key="1"
                thumbnail="/Images/Srujan-logo.png"
                title="Srujan Event"
                content=""
                author={{ name: "ECELL JNEC", avatar: "/Images/ECELL JNEC.png" }}
                date="16 janv 2024"
              />
              </div>
        <button className="blue-button mx-auto mt-8 w-max">Loading more...</button>
      </section>
    </main>
  )
}
