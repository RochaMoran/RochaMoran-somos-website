import Image from "next/image";

export default function ItemCarrosuel({ title, subtitle, img }: any) {
  return (
    <div className="main-carrousel__item">
      <div className="carrousel-item__text">
        <span>{subtitle}</span>
        <h3>{title}</h3>
      </div>
      <Image
        className="carrousel-item__image"
        src={img}
        alt={title}
        loading="lazy"
        width={500}
        height={500}
      />
    </div>
  );
}
