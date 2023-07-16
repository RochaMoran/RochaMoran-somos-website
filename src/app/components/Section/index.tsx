import Image from "next/image";
import styles from "../../../../styles/pages/about.module.scss";

export default function Section({ title, image, children, isInvert = false, extraClassName = ''}: any) {
  return (
    <section className={`section grid [&>article]:m-5 ${isInvert ? 'flex-row-reverse' : '' } section-component ${extraClassName}`} >
      <article className="section-component__article-img">
        <Image src={image} alt={title} className="" width={400} height={370} />
      </article>
      <article className={`section-component__article-content ${isInvert ? 'reverse-column' : 'reverse-column__small'}`}>
        <h3 className="title">{title}</h3>
        {children}
      </article>
    </section>
  );
}
