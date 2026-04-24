import { LuArrowUpRight } from "react-icons/lu";

export default function LearnMore() {
    return (
        <button className="bg-primary text-white md:text-lg px-7 py-3 rounded-md inline-flex items-center gap-2 mt-5 md:mt-10">
            Learn More
            <LuArrowUpRight size={18} />
        </button>
    )
}