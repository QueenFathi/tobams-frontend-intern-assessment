import Image from "next/image";
import H2 from "./heading2";

interface FeatureProps {
    imagesrc: string,
    title: string,
    description: string,
    elements: string[]
    reverse?: boolean
}

export function FeatureSection({ imagesrc, title, description, elements, reverse }: FeatureProps) {
    return (
        <section className="flex bg-white">
            <div className={`flex ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col-reverse gap-10 lg:items-center max-w-(--max-width-lg) mx-auto px-5`}>
                <div className="lg:w-1/2">
                    <H2 text={title} mdhidden={false} />
                    <div className="text-sm md:text-lg leading-relaxed text-[#696969]">
                        <p className="mb-5">
                            {description}
                        </p>
                        <ul className="space-y-3 list-none lg:pl-10">
                            {elements.map((element, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.87301 0.761963V6.98419H13.2063L6.09523 16.762V10.5397H0.761902L7.87301 0.761963Z" fill="#1D0617" stroke="#480F39" strokeWidth="1.52381" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    {element}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center md:justify-start w-full lg:w-1/2">
                    <div className="relative w-full h-80 md:h-120 rounded-3xl lg:rounded-tl-lg overflow-hidden">
                        <Image
                            src={imagesrc}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <H2 text={title} mdhidden={true} />
            </div>
        </section>
    )
}