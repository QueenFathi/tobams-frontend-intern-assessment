import { Metadata } from "next";
import Header from "@/component/shared/header";
import HeroSection from "@/component/ui/hero-section";
import LMSSection from "@/component/ui/lms-section";
import { FeatureSection } from "@/component/ui/feature-section";
import ManagementDevelopmentProgramSection from "@/component/ui/management-development-section";
import TransformationHubSection from "@/component/ui/transformation-hub-section";
import TrainingConsultantSection from "@/component/ui/training-consultants-section";
import CTASection from "@/component/ui/cta-section";
import TestimonialsSection from "@/component/ui/testimonials-section";
import CTABanner from "@/component/ui/cta-banner";
import Footer from "@/component/shared/footer";


export const metadata: Metadata = {
  title: 'What We Do | Tobams Group',
  description: 'Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today’s ever-evolving landscape',
}

const Features = [
  {
    imagesrc: "/features section 1.jpg",
    title: "Corporate Trainings ",
    description: "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    elements: ["Leadership Training", "Strategic Planning and Implementation", "Project Management", "Sustainability Training", "Customised Training"]
  },
  {
    imagesrc: "/features section 2.jpg",
    title: "Personalised Individual Training",
    description: "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    elements: ["Leadership Development", "Soft Skills Development", "Industry Specific Knowledge", "Technical Skills Enhancement", "Time Management and Productivity", "Career Development"],
    reverse: true
  },
  {
    imagesrc: "/features section 3.jpg",
    title: "Capacity Development",
    description: "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
    elements: ["Tailored Training Programs", "Expert-Led Workshops", "Personalized Mentorship", "Technical Skills Enhancement", "Collaborative Learning Environment", "Ongoing Support and Resources"]
  }
]

export default function About() {
  return (
    <div className="tracking-wider bg-background">
      <Header />
      <main>
        <HeroSection />
        <LMSSection />
        <div className="space-y-10 lg:space-y-20 py-10 md:py-20 bg-white">
          {Features.map((feature, index) => (
            <FeatureSection key={index}
              imagesrc={feature.imagesrc}
              title={feature.title}
              description={feature.description}
              elements={feature.elements}
              reverse={feature.reverse} />
          ))}
        </div>
        <ManagementDevelopmentProgramSection />
        <TransformationHubSection />
        <TrainingConsultantSection />
        <CTASection />
        <TestimonialsSection />
        <CTABanner />
        <Footer />
      </main>
    </div>
  );
}
