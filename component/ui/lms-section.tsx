import Image from "next/image";
import H2 from "./heading2";
import LearnMore from "./learn-more-button";

const courses = ["Business Analysis", "Design Thinking", "Effective Communication", "Entrepreneurship", "Career Development", "Business Model"]

export default function LMSSection() {
    return (
        <section className="bg-primary/10 flex mb-10 py-15">
            <div className="max-w-(--max-width-lg) mx-auto px-5">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <H2 text={"Learning Management System"} mdhidden={true} textcolor={"text-primary"} />
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative w-90 md:w-130 lg:w-160 h-90 md:h-130 lg:h-160 rounded-full overflow-hidden">
                            <Image
                                src="/lms image.jpg"
                                alt="Learning Management Syatem"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <H2 text={"Learning Management System"} mdhidden={false} textcolor={"text-primary"} />
                        <div className="bg-primary/10 p-3 md:p-8 rounded-lg space-y-5">
                            <p className="texxt-main text-sm md:text-lg lg:leading-relaxed">
                                TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.
                            </p>
                            <p className="font-semibold md:text-lg text-primary">
                                Some of our courses include:
                            </p>
                            <ul className="text-main text-sm md:text-base grid md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-3 list-disc pl-6 w-fit">
                                {courses.map((course, index) => (
                                    <li key={index}>{course}</li>
                                ))}
                            </ul>
                        </div>
                        <LearnMore />
                    </div>
                </div>
            </div>
        </section>
    )
}