import Image from "next/image";
import LearnMore from "./learn-more-button";

export default function TransformationHubSection() {
    return (
        <section className="mb-10 py-15 bg-white">
            <div className="max-w-(--max-width-lg) mx-auto px-5">
                <div className="bg-secondary/20 px-4 md:px-10 py-10 rounded-xl">
                    <div className="mb-5 space-y-2">
                        <h5 className="text-accent md:text-xl italic">Learning With Our CEO</h5>
                        <h2 className="text-2xl md:text-4xl xl:text-5xl text-primary italic tracking-wider">
                            Transformation Hub With Jite Newton
                        </h2>
                    </div>
                    <p className="mb-7 text-sm md:text-lg text-main">
                        Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton.
                        Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights
                        and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your
                        leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential
                        and drive success in your endeavours.
                    </p>
                    <div className="grid lg:grid-cols-2 gap-10">
                        <div className="flex justify-center md:justify-start">
                            <div className="relative h-60 lg:h-full w-full rounded-md overflow-hidden">
                                <Image
                                    src="/learning with ceo image.jpg"
                                    alt="Transformation Hub With Jite Newton"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="bg-white/30 px-5 py-5 md:py-10 rounded-md">
                            <ul className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-3 list-none">
                                {["Strategic Career Guidance", "Leadership Develpment", "CV Development", "Sustainability Leadership", "Communication Skills", "Business Model"].map((element, index) => (
                                    <li key={index} className="flex items-center gap-4 rounded-lg p-4 bg-white text-sm md:text-lg">
                                        <svg width="18" height="22" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3333 1V9.16667H17.3333L8 22V13.8333H1L10.3333 1Z" fill="#DDD0DA" stroke="#571244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        {element}
                                    </li>
                                ))}
                            </ul>
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}