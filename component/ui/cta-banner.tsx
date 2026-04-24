import H2 from "./heading2";

export default function CTABanner() {
  return (
    <section
      className="bg-purple-90 text-white border-b-2 border-secondary-foreground py-12"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="md:text-lg mb-4">
              Ready to be a part of something extraordinary?
            </p>
            <H2 text={"Let’s work together to create a difference"} textcolor={"text-white"} />
          </div>

          <button className="md:text-lg inline-block bg-primary hover:bg-primary/10 px-6 py-3 rounded-md font-semibold">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}