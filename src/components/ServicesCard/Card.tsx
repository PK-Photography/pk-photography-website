import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

type CardProps = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
  const router = useRouter();
  return (
    <div
      className="relative w-full sm:h-[500px] md:h-[600px] overflow-hidden shadow-lg"
      onClick={() => {
        if (link) {
          router.push(link);
        }
      }}
    >
      <Image
        src={image}
        alt={title}
        width={1000}
        height={600}
        className="w-full  object-cover h-full"
        priority
      />
      <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-top text-center pt-4  text-white">
        <p className="mt-2 mb-0.5">{description}</p>
        <h1 className="text-5xl md:text-4xl font-semibold mb-2">{title}</h1>
        {link && (
          <p className="text-[14px] mb-1 flex items-center">
            View Details <ChevronRight className=" w-4 h-4" />
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
