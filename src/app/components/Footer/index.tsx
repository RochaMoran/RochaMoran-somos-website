import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="section section-footer">
            <div className="container-footer">
                <div className="footer-column footer-border">
                    <h5 className="font-bold text-[1.5rem] text-white mb-4">Quick Links</h5>
                    <div className="footer-double__items">
                        <div className="footer-items">
                            <a href="/services">Services</a>
                            <a href="/services">Innovation</a>
                            <a href="/services">Events</a>
                            <a href="/services">Impact Report</a>
                            <a href="/services">Careers</a>
                            <a href="/services">Financials</a>
                        </div>
                        <div className="footer-items">
                            <a href="/services">Annual Reports</a>
                            <a href="/services">COVID-19</a>
                            <a href="/services">Monkeypox</a>
                            <a href="/services">Impact Report</a>
                            <a href="/services">Zika</a>
                            <a href="/services">Health Education</a>
                        </div>
                    </div>
                </div>
                <div className="footer-column footer-border">
                    <h5 className="font-bold text-[1.5rem] text-white mb-4">Resources</h5>
                    <div className="footer-double__items">
                        <div className="footer-items">
                            <a href="/services">DASH Nutrition</a>
                            <a href="/services">Asthma Care</a>
                            <a href="/services">Manage Diabetes</a>
                            <a href="/services">Annual Reports</a>
                            <a href="/services">State of Latino Health</a>
                        </div>
                        <div className="footer-items">
                            <a href="/services">News</a>
                            <a href="/services">Press Release</a>
                            <a href="/services">Media & Events</a>
                            <a href="/services">Compliance</a>
                            <a href="/services">FAQs</a>
                        </div>
                    </div>
                </div>
                <div className="footer-column">
                    <h5 className="font-bold text-[1.5rem] text-white mb-4">Contact us</h5>
                    <div className="footer-items text-white">
                        <p>2910 Exterior Street, First Floor <br /> Bronx, NY 10463</p>
                        <p><span className="font-bold">Email: </span>info@somoscommunitycare.org</p>
                        <p><span className="font-bold">Phone: </span>1.833.SOMOSNY</p>
                        <p><span className="font-bold">Fax: </span>(212) 477-9328</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <img width={100} height={100} className="footer-logo" src="/images/somos-white-logo.webp" alt="somos-white-logo" loading="lazy" />
            <p className="footer-copyrigth">
                © 2023 SOMOS Healthcare Providers, Inc. dba SOMOS Community Care (SOMOS). All rights reserved. <br />
                <a href="/services" className="underline">PRIVACY POLICY | TERMS OF USE | NOTICE OF NONDISCRIMINATION</a> | Site Developed by <a href="#" className="underline">GSDO/Crew</a>
            </p>
        </div>
    </footer>
  )
}
