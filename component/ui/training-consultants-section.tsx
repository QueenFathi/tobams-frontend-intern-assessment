import H2 from "./heading2";
import LearnMore from "./learn-more-button";

const Features = [
    {
        title: "Expert-Led Learning",
        description: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis."
    },
    {
        title: "Interactive Workshops",
        description: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights."
    },
    {
        title: "Comprehensive Curriculum",
        description: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding."
    },
    {
        title: "Global Recognition",
        description: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition."
    }
]

export default function TrainingConsultantSection() {
    return (
        <section className="mb-10 py-10 md:py-15 bg-primary/10">
            <div className="max-w-(--max-width-lg) mx-auto px-5">
                <div>
                    <div>
                        <H2 text={"Training The Consultant"} />
                        <p className="text-primary md:text-lg mt-2">
                            Maximise Your Potential as a Certified Trainer:
                        </p>
                    </div>
                    <p className="text-sm md:text-lg text-main my-5">
                        With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified 
                        training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your 
                        training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse 
                        courses while also developing the abilities to mentor and encourage others in their career advancement.
                    </p>
                    <div className="p-10 bg-primary text-white text-lg grid md:grid-cols-2 gap-5 rounded-md">
                        {Features.map((features, index) => (
                            <div key={index} className="space-y-3">
                                <p className="font-bold">{features.title}</p>
                                <p className="text-sm md:text-base">{features.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <LearnMore />
            </div>
        </section>
    )
}