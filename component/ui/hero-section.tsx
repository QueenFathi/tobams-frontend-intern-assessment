import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative h-180 w-full flex items-center justify-center text-center text-white mb-10">
            <div className="absolute inset-0">
                <Image
                    src="/herosection image.jpg"
                    alt="About us | Training and Development"
                    className="h-150 md:h-180 object-cover"
                    fill
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="relative z-10 max-w-6xl px-5 space-y-5 md:space-y-10">
                <div>
                    <span className="bg-white/20 text-xs md:text-base px-12 py-3 rounded-full uppercase">
                        What we do
                    </span>
                </div>
                <h1 className="text-2xl md:text-5xl xl:text-6xl font-bold font-nunito">
                    Training and Development
                </h1>
                <p className="text-sm md:text-lg">
                    Our comprehensive range of programs and resources is designed to enhance
                    skills, broaden knowledge, and propel careers forward in today’s ever-evolving landscape.
                </p>
                <button className="bg-primary px-8 py-3 rounded-md md:text-lg font-medium mt-5 cursor-pointer">
                    Book a Consultation
                </button>
            </div>
        </section>
    )
}