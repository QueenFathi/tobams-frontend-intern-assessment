"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LuChevronDown, LuMenu, LuUser, LuX } from "react-icons/lu";

const navLinks = [
    { name: "About", href: "/about", dropdownLinks: [] },
    { name: "What We Do", href: "/what-we-do", dropdownLinks: [] },
    { name: "Jobs", href: "/jobs", dropdownLinks: [] },
    { name: "Projects", href: "/projects" },
    { name: "TG Academy", href: "/tg-academy" },
    { name: "Strategic Partnership", href: "/strategic-partnership" },
    { name: "Pricing", href: "/pricing" },
    { name: "Book a Consultation", href: "/book-a-consultation" },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const pathname = usePathname();

    return (
        <header className="w-full bg-white">
            <div className="max-w-[1280px] mx-auto px-5 py-2">
                <div className="flex justify-between items-center">
                    <Link href="/" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary focus-visible:rounded-md">
                        <Image alt="tobams logo" src="/tobams secondary logo.png" width={150} height={150} />
                    </Link>
                    <div className="hidden lg:flex justify-center items-center space-x-5">
                        <button className="bg-primary text-white px-5 py-2 text-lg rounded-md space-x-1 inline-flex justify-center items-center gap-2 focus-visible:outline-2 focus-visible:outline-purple-90 cursor-pointer hover:bg-primary/90">
                            <span className="p-2 bg-primary-foreground rounded-full">
                                <LuUser className="text-primary" size={12} />
                            </span>
                            Account
                            <LuChevronDown size={12} className="relative top-0.5" />
                        </button>
                        <button className="bg-secondary text-white px-5 py-2.5 text-lg rounded-md focus-visible:outline-2 focus-visible:outline-primary cursor-pointer hover:bg-secondary/90">
                            Take Assessment
                        </button>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-1 bg-main hover:bg-black rounded-lg text-white hover:text-purple-40 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <LuX size={25} />
                        ) : (
                            <LuMenu size={25} />
                        )}
                    </button>
                </div>
            </div>

            <nav className="hidden lg:flex justify-center items-center py-5  border-t border-gray-200">
                <div className="flex items-center gap-4 xl:gap-10 text-lg">
                    {navLinks.map((link, index) => (
                        <div key={index} className="relative group">
                            <Link
                                href={link.href}
                                className={`flex items-center gap-1 text-main hover:text-primary hover:border-b-2 border-primary transition px-0.5  ${pathname === link.href && "text-primary border-b-2"}`}
                            >
                                {link.name}
                                {link.dropdownLinks && (
                                    <span className="relative top-0.5"><LuChevronDown size={10} /></span>
                                )}
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>

            {mobileMenuOpen && (
                <nav className="lg:hidden bg-purple-100 p-5 min-h-lvh top-25 fixed left-0 right-0 bottom-0 z-50 " aria-label="Mobile navigation">
                    <div className="space-y-3">
                        {navLinks.map((link, index) => (
                            <div key={index}>
                                <button
                                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                                    className="flex items-center justify-between gap-1 px-4 py-2 text-white hover:text-purple-40 transition-colors"
                                >
                                    <Link href={link.href} onClick={() => setMobileMenuOpen(false)} className={` ${pathname === link.href && "text-purple-40"}`}>
                                        {link.name}
                                    </Link>
                                    {link.dropdownLinks && (
                                        <LuChevronDown size={12} className={`relative top-0.5 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}  ${pathname === link.href && "text-purple-40"}`} />
                                    )}
                                </button>
                                {link.dropdownLinks && openDropdown === link.name && (
                                    <div className="pl-4 space-y-1 mt-2">
                                        <Link href="#" className="block px-4 py-2">
                                            Option 1
                                        </Link>
                                        <Link href="#" className="block px-4 py-2">
                                            Option 2
                                        </Link>
                                        <Link href="#" className="block px-4 py-2">
                                            Option 3
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile CTA Buttons */}
                    <div className="mt-5 space-y-5 pt-5">
                        <button className="bg-primary text-white px-10 py-2 text-lg rounded-md space-x-1 flex justify-center items-center gap-2 focus-visible:outline-2 focus-visible:outline-purple-90 cursor-pointer hover:bg-primary/90">
                            <span className="p-2 bg-primary-foreground rounded-full">
                                <LuUser className="text-primary" size={12} />
                            </span>
                            Account
                            <LuChevronDown size={12} className="relative top-0.5" />
                        </button>
                        <button className="bg-secondary text-white px-9 py-2.5 text-lg rounded-md focus-visible:outline-2 focus-visible:outline-primary cursor-pointer hover:bg-secondary/90">
                            Take Assessment
                        </button>
                    </div>
                </nav>
            )}
        </header>
    )
}