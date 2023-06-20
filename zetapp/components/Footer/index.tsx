import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      {/* <--------------------Footer Section------------------> */}
      <div className={styles.footerContainer}>
        <div className={styles.innerFooter}>
          <div className={styles.footerImage}>
            <img src="https://zetapp.in/_next/static/media/zet_logo_white.04e35c15.svg" />
          </div>
          <hr />
          <div className={styles.footerAddress}>
            <div className={styles.patner1}>
              <p className={styles.company}>COMPANY</p>
              <a href="/about">About Us</a>
              <a href="/partner">Partner With Us</a>
              <a href="/blog">Blog</a>
            </div>
            <div className={styles.patner2}>
              <p className={styles.legal}>LEGAL</p>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-use">Terms of Use</a>
            </div>
            <div className={styles.patner3}>
              <p className={styles.contact}>CONTACT</p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hi@zetapp.in">
                <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEmailIcon.58cee685.png&w=32&q=75" />
                hi@zetapp.in
              </a>
              <a href="tel://+919991110022/">
                <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPhoneIcon.dcc030db.png&w=32&q=75" />
                +91-7417274072
              </a>
            </div>
            <div className={styles.patner4}>
              <p className={styles.social}>SOCIAL</p>
              <div className={styles.socialConnect}>
                <a href="https://www.linkedin.com/company/zetapp-in/">
                  <img src="https://zetapp.in/_next/static/media/linkedin.99e56649.svg" />
                </a>
                <a href="https://www.instagram.com/zetapp.in/">
                  <img src="https://zetapp.in/_next/static/media/instagram.146ba33a.svg" />
                </a>
                <a href="https://www.facebook.com/zetapp.in/">
                  <img src="https://zetapp.in/_next/static/media/facebook.cccadfff.svg" />
                </a>
                <a href="https://web.telegram.org/k/#@GetOneCode">
                  <img src="https://zetapp.in/_next/static/media/TelegramImg.2d51b03f.svg" />
                </a>
                <a href="https://chat.whatsapp.com/HRlwYwVYRuaBuH3bRBrgMj">
                  <img src="https://zetapp.in/_next/static/media/WhatsappImg.a5c0a9a6.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
