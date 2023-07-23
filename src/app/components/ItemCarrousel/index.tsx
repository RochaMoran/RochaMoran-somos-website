export default function ItemCarrosuel({ title, subtitle, src, isVideo = false }: any) {
  return (
    <div className={`main-carrousel__item`}>
      <div className="carrousel-item__text">
        <span>{subtitle}</span>
        <h3>{title}</h3>
      </div>
      {
        isVideo ? (
          <video
            className="carrousel-item__image"
            src={src}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            className="carrousel-item__image"
            src={src}
            alt={title}
            loading="lazy"
            width={500}
            height={500}
          />
        )
      }
    </div>
  );
}
