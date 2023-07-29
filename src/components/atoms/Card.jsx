import Image from "next/image";

const Card = ({ title, image, description }) => {
  return (
    <div className="p-3 space-y-2 bg-white rounded-xl">
      <Image src={image} alt={title} />
      <h1 className="text-sm font-bold">{title}</h1>
      <p className="text-xs">{description}</p>
    </div>
  );
};

export default Card;
