import Image from "next/image";
import H2 from "./heading2";

export default function ManagementDevelopmentProgramSection() {
    return (
        <section className="md:mb-10 max-w-(--max-width-lg) mx-auto px-5 py-10 md:py-15">
            <div className="bg-purple-80 p-10 rounded-3xl grid lg:grid-cols-2 gap-7 lg:gap-15 items-center text-white">
                <H2 text={"Management Development Program"} mdhidden={true} textcolor={"text-white"} />
                <div className="flex justify-center md:justify-start">
                    <div className="relative w-full h-80 md:h-180 rounded-lg rounded-br-none overflow-hidden">
                        <Image
                            src="/management development image.jpg"
                            alt="Management Development Program"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div>
                    <H2 text={"Management Development Program"} mdhidden={false} textcolor={"text-white"} />
                    <div className="text-sm md:text-lg space-y-8">
                        <p className="leading-relaxed">
                            Tobams Group offers a comprehensive Management Development Program designed to equip corporate
                            organisations with the high-performing leaders they need to thrive.
                        </p>
                        <p className="leading-relaxed">
                            Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities 
                            designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
                        </p>
                        <ul className="space-y-5 list-none lg:pl-5">
                            {["Enhanced Leadership Skills", "Improved Employee Engagement", "Stronger Organisational Culture", "Sustainable Growth"].map((element, index) => (
                                <li key={index} className="flex items-center gap-5 rounded-lg px-5 py-2 bg-purple-40">
                                    <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6667 0V9.33333H18.6667L8 24V14.6667H0L10.6667 0Z" fill="white" />
                                    </svg>

                                    {element}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}