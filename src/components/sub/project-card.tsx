import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <div className="relative w-full pt-[56.25%]">
        <Image
          src={src}
          alt={title}
          fill
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <div className="relative p-6">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 text-center mb-3">
          {title}
        </h1>
        <p className="text-gray-300 text-center text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};
