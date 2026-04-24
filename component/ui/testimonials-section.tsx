"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useRef } from "react";
import TestimonialCard from "./testimonial-card";
import H2 from "./heading2";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHaus NG",
    image: "/testimonial profile image1.png",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    image: "/testimonial profile image2.png",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, Future Tech Solutions",
    image: "/testimonial profile image3.png",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    name: "Rita Ahmed",
    role: "Creative Director, ArtInnovate Studios",
    image: "/testimonial profile image1.png",
    text: "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
  },
  {
    name: "David Johnson",
    role: "Small Business Owner",
    image: "/testimonial profile image2.png",
    text: "Tobams Group's Digital Marketing tips transformed my small business. Their guidance is simple, effective, and perfect for anyone looking to grow online."
  },
  {
    name: "Femi Adekunle",
    role: "IT Professional",
    image: "/testimonial profile image3.png",
    text: "As an IT professional, Tobams Group's Tech Talent Development program sharpened my skills. The hands-on approach and mentorship are invaluable"
  },
];

export default function TestimonialsSection() {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20">
      <div className=" max-w-(--max-width-lg) mx-auto px-5">
        <div className="flex items-center justify-center mb-10">
          <H2 text={"Testimonials"} />
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="
                  flex-[0_0_95%]
                  sm:flex-[0_0_75%]
                  md:flex-[0_0_50%]
                  lg:flex-[0_0_40%]
                  xl:flex-[0_0_30%]
                "
              >
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end ml-auto mr-0">
          <div className="flex gap-5 mt-5">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 flex items-center justify-center rounded-md bg-secondary/10 text-secondary hover:bg-red-100 transition"
            >
              <LuChevronLeft size={15} />
            </button>

            <button
              onClick={scrollNext}
              className="w-10 h-10 flex items-center justify-center rounded-md bg-secondary/10 text-secondary hover:bg-red-100 transition"
            >
              <LuChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}