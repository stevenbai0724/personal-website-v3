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
      image: "/logos/wealthsimple.jpeg",
      company: "Wealthsimple",
      position: "Incoming Software Developer Intern (2025)",
      gradient: "from-blue-900 to-gray-900",
      description: "🏆 Tiers/Advisory team - building services for premium users across both frontend and backend.",
      link: "https://www.wealthsimple.com/"
    },
    {
      image: "/logos/constant_contact.png",
      company: "Constant Contact",
      position: "Software Developer Intern (2025)",
      gradient: "from-blue-900 to-gray-900",
      description: "🚀 Scaling contact import system using LLM, AWS services, Docker and Kubernetes to handle 80M+ contacts/month.",
      link: "https://www.constantcontact.com/"
    },
    {
      image: "/logos/algomonster.png",
      company: "Algomonster",
      position: "Software Engineer Intern (2024)",
      gradient: "from-purple-900 to-gray-900",
      description: "💡 Engineered scalable DSA learning platform with Next.js, Firebase, and AI-driven tools.",
      link: "https://algo.monster"
    },
    {
      image: "/logos/datacurve.svg", // Replace with the appropriate logo path
      company: "Datacurve",
      position: "Data Engineer (Part time), 2024",
      gradient: "from-blue-800 to-gray-900",
      description: "🔍 Curated datasets and debugged complex programs for generative AI models using Python and C++.",
      link: "https://datacurve.ai"
    },
    {
      image: "/logos/richmedia.png", // Replace with the appropriate logo path
      company: "Rich Media",
      position: "Full Stack Developer Intern (2023)",
      gradient: "from-yellow-800 to-gray-900",
      description: "💸 Developed banking tools with Angular, Jenkins, and Playwright, used by thousands of daily users.",
      link: "https://richmedia.com"
    },
    {
      image: "/logos/icontribute.png", // Replace with the appropriate logo path
      company: "iContribute",
      position: "Frontend Developer Intern (2021)",
      gradient: "from-lime-800 to-gray-900",
      description: "🌐 Built a React Native app with Firebase, connecting volunteers to opportunities during the pandemic.",
      link: "https://icontribute.site"
    },
  ]

  return (
    <section>
      <AnimatedSection>
        <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
          About Me
        </h1>
        <p className="mb-4 text-md md:text-lg">
          {`Hello! My name is Steven, I'm an experienced Software Engineer with a strong interest in AI/ML, full stack development, data structures, algorithms and solving complex problems under a crunch time period.`}
        </p>
        <p className="mb-4 text-md md:text-lg">
          {`I am a third-year CS student at the University of Waterloo. I like to create videos of my journey on`} <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.youtube.com/@stevenbai0724" target='_blank'>YouTube</a>{`, and sometimes`} <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="/blog">writing</Link>{` about interesting topics. I also enjoy a unique combination of competitive sports - swimming and kickboxing.`}
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
