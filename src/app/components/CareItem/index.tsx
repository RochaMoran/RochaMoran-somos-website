import Image from "next/image";

export default function CareItem({ img, title }: any) {
  return (
    <div className="care-item">
        <div className="care-item__image-container">
            <Image src={img} width={100} height={100} alt={title} />
        </div>
      <span>{title}</span>
    </div>
  );
}
