import Image from "next/image";

export default function Covid() {
  return (
    <section className="covid-section">
      <Image
        alt="Health Equity NY"
        src="/images/covid.svg"
        width={200}
        height={200}
        className="covid-img"
      />
      <article className="covid">
        <div className="covid-content animated">
          <h4 className="font-bold health-content__title">
            LEADING THROUGH <br /> COVID-19
          </h4>
          <h6>
            LEARNED FROM A <br /> ONCE-IN-A LIFETIME PANDEMIC
          </h6>
          <p className="health-content__content">
            In March 2020, in the earliest days of the COVID-19 pandemic and at
            the direct request of then-Governor Andrew Cuomo to SOMOS Founder
            and Chairman, Dr. Ramon Tallaj, SOMOS network providers became the
            first health network organization to respond to the dire threat and
            rise to the severe consequences to come.
          </p>
          <a href="" className="btn-covid">
            READ MORE
          </a>
        </div>
      </article>
    </section>
  );
}
