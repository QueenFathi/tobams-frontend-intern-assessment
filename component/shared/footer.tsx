import Link from "next/link";
import Image from "next/image";
import { IoMail } from "react-icons/io5";
import { FaPhone, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import FooterColumn from "../ui/footer-column";

export default function Footer() {
    return (
        <footer className="bg-purple-100 text-white">
            <div className="max-w-(--max-width-lg) mx-auto px-5">
                <div className="grid lg:grid-cols-3 gap-10 py-20">
                    <section className="space-y-8 lg:col-span-1">
                        <Image
                            alt="tobams logo"
                            src="/tobams secondary logo.png"
                            width={150}
                            height={150}
                        />
                        <p className="text-gray-background text-sm sm:text-base">
                            Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa,
                            specializing in talent acquisition, internships, and skill development with a global perspective.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: <FaLinkedinIn size={20} />, label: "LinkedIn", href: "#" },
                                { icon: <FaInstagram size={20} />, label: "Instagram", href: "#" },
                                { icon: <FaXTwitter size={20} />, label: "Twitter", href: "#" },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    aria-label={item.label}
                                    className="p-3 rounded-full text-main bg-white hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </section>

                    <div className="grid md:grid-cols-8 col-span-2 gap-10">
                        <FooterColumn
                            span="col-span-3"
                            title="What We Do"
                            links={[
                                { label: "Sustainability Services", href: "#" },
                                { label: "Strategy Planning and Implementation", href: "#" },
                                { label: "Tech Talent Solutions", href: "#" },
                                { label: "Training and Development", href: "#" },
                                { label: "IT Consulting Services", href: "#" },
                                { label: "Social Impact", href: "#" },
                                { label: "Talent Recruitment", href: "#" },
                            ]}
                        />

                        <FooterColumn
                            span="col-span-2"
                            title="Company"
                            links={[
                                { label: "About", href: "#" },
                                { label: "Jobs", href: "#" },
                                { label: "Projects", href: "#" },
                                { label: "Our Founder", href: "#" },
                                { label: "Business Model", href: "#" },
                                { label: "The Team", href: "#" },
                                { label: "Contact Us", href: "#" },
                                { label: "Blog", href: "#" },
                                { label: "FAQs", href: "#" },
                                { label: "Testimonials", href: "#" },
                            ]}
                        />

                        <FooterColumn
                            span="col-span-3"
                            title="Solution"
                            links={[
                                { label: "Tobams Group Academy", href: "#" },
                                { label: "Help a Tech Talent", href: "#" },
                                { label: "Campus Ambassadors Program", href: "#" },
                                { label: "Join Our Platform", href: "#" },
                                { label: "Pricing", href: "#" },
                                { label: "Book a Consultation", href: "#" },
                                { label: "Join Our Slack Community", href: "#" },
                            ]}
                        />
                    </div>
                </div>

                <section className="grid lg:grid-cols-4 gap-10 p-10 rounded-md bg-white/6 mb-10">
                    <div className="col-span-3 lg:border-r-2 border-purple-10/10 order-2 lg:order-0">
                        <h3 className="font-bold mb-3 text-white text-lg md:text-xl">Registered Offices</h3>
                        <div className="grid md:grid-cols-2 gap-10 text-sm md:text-lg">
                            <p className="text-white md:border-r-2 border-purple-10/10">
                                <span className="block text-secondary font-medium mb-2">United Kingdom</span>
                                07451196 (Registered by Company House)
                                <br />
                                Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                            </p>
                            <p className="text-white">
                                <span className="block text-secondary font-medium mb-2">Nigeria</span>
                                RC 1048722 (Registered by the Corporate Affairs Commission)
                                <br />
                                4, Muaz Close, Angwar-Rimi
                            </p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-0">
                        <h3 className="font-bold mb-3 text-white text-lg md:text-xl">Contact Information</h3>
                        <p className="text-white text-sm md:text-lg">
                            <Link
                                href="mailto:theteam@tobamsgroup.com"
                                className="flex items-center gap-5 hover:text-white/20 focus:underline"
                            >
                                <IoMail size={22} className="text-secondary" />
                                theteam@tobamsgroup.com
                            </Link>

                            <Link
                                href="tel:+447886600748"
                                className="flex items-center gap-5 mt-3 hover:text-white/20 focus:underline"
                            >
                                <FaPhone size={18} className="text-secondary" />
                                +447886600748
                            </Link>
                        </p>
                    </div>
                </section>

                <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-4 py-10 text-white border-t-2 border-purple-10/10">
                    <p>Copyright © Tobams Group, 2024. All rights reserved.</p>
                    <nav className="flex md:flex-row flex-col-reverse justify-center gap-5 md:gap-10">
                        <Link href="#" className="underline text-center hover:text-purple-40">
                            Terms and Conditions
                        </Link>
                        <div className="flex gap-10">
                            <Link href="#" className="underline hover:text-purple-40">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="underline hover:text-purple-40">
                                Cookies Policy
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    );
}