import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import Link from 'next/link'
import ExperienceCard from './components/experienceCard' 
import { experienceProps } from './components/experienceCard'
import Contact from './components/contact'
import AnimatedSection from './components/AnimatedSection'

export default function Page() {

  const companies = [
    {
      image: "/logos/rundoo.png",
      company: "Rundoo",
      position: "Software Engineer Intern (2026)",
      gradient: "from-blue-900 to-gray-900",
      description: "🎨 Building POS and inventory software enabling vendor ordering through integrations.",
      link: "https://getrundoo.com"
    },
    {
      image: "/logos/wealthsimple.jpeg",
      company: "Wealthsimple",
      position: "Software Developer Intern (2025)",
      gradient: "from-blue-900 to-gray-900",
      description: "🏆 Built a BI dashboard for Wealthsimple Wealth Management analyzing $300M+ AUM across 600+ high-net-worth clients.",
      link: "https://www.wealthsimple.com/"
    },
    {
      image: "/logos/constant_contact.png",
      company: "Constant Contact",
      position: "Software Developer Intern (2025)",
      gradient: "from-blue-900 to-gray-900",
      description: "🚀 Integrated AI-powered data classification into a contact import system for SMBs, scaling to 80M+ uploads monthly.",
      link: "https://www.constantcontact.com/"
    },
    {
      image: "/logos/datacurve.svg",
      company: "Datacurve",
      position: "Software Engineer (2024, Contract)",
      gradient: "from-purple-900 to-gray-900",
      description: "🧠 Benchmarked and curated coding datasets to improve specialized LLM performance.",
      link: "https://datacurve.ai"
    },
    {
      image: "/logos/algomonster.png",
      company: "Algomonster",
      position: "Software Engineer Intern (2024)",
      gradient: "from-purple-900 to-gray-900",
      description: "💡 Created interactive DSA learning experiences used by thousands of aspiring engineers worldwide.",
      link: "https://algo.monster"
    },
    {
      image: "/logos/richmedia.png", // Replace with the appropriate logo path
      company: "Rich Media",
      position: "Full Stack Developer Intern (2023)",
      gradient: "from-yellow-800 to-gray-900",
      description: "💸 Built digital banking tools for TD and Scotiabank as part of an agency team, used by thousands of customers daily.",
      link: "https://richmedia.com"
    },
  ]

  return (
    <section>
      <AnimatedSection>
        <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
          About Me
        </h1>
        <p className="mb-4 text-md md:text-lg">
          {`Hello, my name is Steven! I'm a 4th year CS student at the University of Waterloo and an experienced Software Engineer who loves solving complex problems under crunch time periods.`}
        </p>
        <p className="mb-4 text-md md:text-lg">
          {`I like to create videos of my journey on`} <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.youtube.com/@stevenbai0724" target='_blank'>YouTube</a>{`, and soon hopefully start`} <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="/blog">writing</Link>{` about interesting topics. Nowadays I like lifting weights to stay active, and I used to compete in swimming and kickboxing.`}
        </p>
      </AnimatedSection>
      <AnimatedSection>
        <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
          Experience
        </h1>
        <p className="mb-4 text-md md:text-lg">
          {`Here's a quick glimpse of my Software Engineering career and the companies I've had the opportunity to work with:`}
        </p>
      </AnimatedSection>
      
      
      {
        companies.map((object, index) => {
          return (
            <ExperienceCard
              key={index}
              image={object.image}
              company={object.company}
              position={object.position}
              description={object.description}
              link={object.link}
              
            />
          )
        })
      }

      <AnimatedSection>
        <h1 className="mt-8 mb-4 text-2xl font-semibold tracking-tighter">
          Contact Me
        </h1>
        <p className="mb-4 text-md md:text-lg">
          {`Feel free to reach out if you'd like to discuss opportunities, have a quick coffee chat, or just say hi! I'm always looking forward to meeting new people.`}
        </p>

        <div className="flex flex-col items-center mt-8 mb-4">
          <div className="relative bg-white w-48 h-48 rounded-full overflow-hidden">
            <Image
              src="/images/stevenbai.jpg"
              alt={`steven bai`}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      
      </AnimatedSection>
      <AnimatedSection>
        <Contact></Contact>
      </AnimatedSection>


    </section>
  )
}
