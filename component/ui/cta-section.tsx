export default function CTASection() {
    return (
        <section
            className="flex justify-center max-w-[1280px] mx-auto px-5"
            aria-labelledby="cta-heading1"
        >
            <div className="w-300 bg-primary text-center text-white text-lg font-semibold rounded-md space-y-5 p-10">
                <p className="hidden md:block">
                    Want to accelerate professional growth and development at your organisation?
                </p>
                <p className="hidden md:block">See how we can help.</p>
                <p className="md:hidden block">
                    Don't just dream it—let's build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.
                </p>
                <button className="bg-white text-primary px-7 py-3 rounded-md mt-5">
                    Book a Consultation
                </button>
            </div>
        </section>
    )
}