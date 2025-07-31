import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ title, description, image, link }) => (
  <div className="relative w-full md:h-[600px] overflow-hidden shadow-lg">
    <a href={link}>
      <Image
        src={image}
        alt={title}
        width={1000}
        height={600}
        className="w-full  object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-top text-center pt-4  text-white">
        <p className="text-3xl md:text-3xl font-light mb-1">{description}</p>
        <h1 className="text-4xl md:text-4xl font-semibold mb-2">{title}</h1>
      </div>
    </a>
  </div>
);

export default Card;
