import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: {
    label: string;
    href: string
  }[];
  span: string
};

export default function FooterColumn({ title, links, span }: FooterColumnProps) {
  return (
    <nav aria-labelledby={title} className={span}>
      <h3 id={title} className="text-white font-bold text-lg md:text-2xl mb-5">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-white focus:outline-none focus:underline hover:text-purple-40 text-sm md:text-base"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}