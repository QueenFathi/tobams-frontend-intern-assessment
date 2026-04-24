import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  role: string;
  image: string;
  text: string;
};

export default function TestimonialCard({
  name,
  role,
  image,
  text,
}: TestimonialCardProps) {
  return (
    <div className="bg-white border rounded-xl p-6 border-l-2 border-r-0 border-y-0 border-secondary h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-10 h-10">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div>
          <p className="font-semibold text-main text-sm md:text-base">{name}</p>
          <p className="text-xs md:text-sm text-gray-500">{role}</p>
        </div>
      </div>

      <p className="text-sm md:text-lg text-main leading-relaxed">{text}</p>
    </div>
  );
}