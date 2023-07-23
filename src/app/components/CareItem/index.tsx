export default function CareItem({ img, title }: any) {
  return (
    <div className="care-item">
        <div className="care-item__image-container">
            <img src={img} width={100} height={100} alt={title} loading="lazy" />
        </div>
      <span>{title}</span>
    </div>
  );
}
