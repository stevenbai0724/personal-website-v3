import Image from 'next/image'
import AnimatedSection from './AnimatedSection';
export interface experienceProps {
    image: any;
    company: string;
    position: string;
    description: string;
    gradiant: string;
    link: string;
}

export default function ExperienceCard(props: experienceProps) {
    return (
      <AnimatedSection>
        <a href={props.link} target="_blank" className="block hover:no-underline animate-fadeIn">
        
          <div className={`flex flex-row items-start bg-gradient-to-l md:h-32 ${props.gradiant} shadow-lg rounded-lg p-4 w-full md:max-w-3xl mx-auto my-4`}>
          
            <div className="w-1/4 flex flex-row justify-start">
              <Image
                src={props.image}
                alt={`${props.company} logo`}
                width={100}
                height={100}    
                quality={100}
                layout='intrinsic'
                className="rounded-md"
              />
            </div>
            
            {/* Text Section */}
            <div className="w-full md:pl-1 text-left pl-4">
              <h2 className="text-lg md:text-xl font-semibold">{props.company}</h2>
              <p className="text-sm md:text-base font-medium">{props.position}</p>
              <p className="text-sm md:text-base text-gray-300 mt-2">{props.description}</p>
            </div>
          </div>
        </a>
      </AnimatedSection>
    );
}
