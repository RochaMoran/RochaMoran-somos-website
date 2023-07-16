import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="section section-footer">
            <div className="container-footer">
                <div className="footer-column footer-border">
                    <h5 className="font-bold text-[1.5rem] text-white mb-4">Links</h5>
                    <div className="footer-double__items">
                        <div className="footer-items">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Services</a>
                            <a href="#">Innovation</a>
                            <a href="#">Events</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="footer-items">
                            <a href="#">News</a>
                            <a href="#">Press Release</a>
                            <a href="#">Media & Events</a>
                            <a href="#">Compliance</a>
                            <a href="#">FAQs</a>
                        </div>
                    </div>
                </div>
                <div className="footer-column footer-border">
                    <h5 className="font-bold text-[1.5rem] text-white mb-4">Resources</h5>
                    <div className="footer-double__items">
                        <div className="footer-items">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Services</a>
                            <a href="#">Innovation</a>
                            <a href="#">Events</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="footer-items">
                            <a href="#">News</a>
                            <a href="#">Press Release</a>
                            <a href="#">Media & Events</a>
                            <a href="#">Compliance</a>
                            <a href="#">FAQs</a>
                        </div>
                    </div>
                </div>
                <div className="footer-column">
                    <h5 className="font-bold text-[1.5rem] text-white mb-4">Projects</h5>
                    <div className="footer-items">
                        <a href="#">COVID-19</a>
                        <a href="#">Monkeypox</a>
                        <a href="#">Zika</a>
                        <a href="#">DASH Nutrition Plan</a>
                        <a href="#">Health Education</a>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <Image width={100} height={100} className="footer-logo" src="/images/somos-white-logo.webp" alt="somos-logo" />
            <p className="footer-copyrigth">
                © 2023 SOMOS Healthcare Providers, Inc. dba SOMOS Community Care (SOMOS). All rights reserved. <br />
                <a href="#" className="underline">PRIVACY POLICY | TERMS OF USE | NOTICE OF NONDISCRIMINATION</a> | Site Developed by <a href="#" className="underline">GSDO/Crew</a>
            </p>
        </div>
    </footer>
  )
}
