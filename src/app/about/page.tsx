import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadTitle from "../components/HeadTitle";
import Section from "../components/Section";

export default function About() {
  return (
    <main>
      <Header />
      <HeadTitle title="About" />
      <Section title="Who we are" image="/images/about-img-1.webp">
        <p>
          SOMOS Community Care (SOMOS), is New York’s only provider-led,
          nonprofit, community-based integrated health care network. It is
          comprised of over 2,500 network providers responsible for reaching and
          delivering care to over 1 Million Medicaid lives citywide.
        </p>{" "}
        <br />
        <p>
          Nearly one-quarter of New York City’s Medicaid population sees a SOMOS
          network provider, who works almost exclusively in lower income
          communities of color, in which health outcomes are lower and rates of
          illness are higher - and where, until recently, many lacked access to
          preventive care and had few options for care or were skeptical of the
          corporate institutional options that did exist.
        </p>
        <br />
        <p>
          SOMOS was designed as an intervention to turn around years of clinical
          neglect, chronic lack of resources, and little engagement to bring
          about healthier communities. For millions, a SOMOS network provider
          has meant that hope has finally arrived.
        </p>
      </Section>
      <Section
        title="Who We Serve"
        image="/images/about-img-2.webp"
        isInvert={true}
        extraClassName="section-component__fill"
      >
        <p>
          SOMOS serves a population traditionally disconnected from the
          healthcare system due to a lack of access, low health literacy, as
          well as social vulnerability linked to socio-economic status,
          household characteristics, racial and ethnic minority status,
          immigration status, misinformation, or housing type and transportation
          in their neighborhoods. .
        </p>
      </Section>
      <Section title="Our Approach" image="/images/about-img-3.webp">
        <p>
          SOMOS’ approach to connecting with patients in their language and
          culture has been proven to decrease healthcare costs, and reach New
          York’s goal of reducing hospital admissions and readmissions.  
        </p>
        <br />
        <p>
          By developing and implementing a value-based primary care model that
          prioritizes consistent preventive care and addressing the whole
          patient, SOMOS has kept the most vulnerable New Yorkers from getting
          sick.
        </p>
      </Section>
      <Section
        title="Transforming a Boken System"
        image="/images/about-img-4.webp"
        isInvert={true}
        extraClassName="section-about__transforming"
      >
        <p>
          SOMOS and its network providers are at the forefront of a movement
          that emphasizes keeping patients well, instead of continuing to invest
          in an outdated system that simply waits until they get sick. SOMOS has
          helped to revolutionize a system sorely in need of reform, one city
          block at a time, reaching patients where they are, connecting the
          disconnected to care, and getting the most vulnerable into a system
          that is, finally, built expressly for them.
        </p>
      </Section>
      <Footer />
    </main>
  );
}
