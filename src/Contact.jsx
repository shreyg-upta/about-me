import Navbar from "./components/navbar";
import Cursor from "./components/cursor";
import styles from './Contact.module.css';
import ContactForm from './components/ContactForm';
import twitter from './assets/footericons/twitter.svg';
import github from './assets/footericons/github.svg';
import slack from './assets/footericons/slack.svg';
import yt from './assets/footericons/youtube.svg';
import PleaseOpenInLaptop from "./components/PleaseOpenInLaptop";

export default function ContactPage() {

  return (
    <>
        <Cursor />
        <PleaseOpenInLaptop />
      <div className="outerPageContainer" >
        <div className="maxWidthPageContainer">
          <Navbar />
          <div className={styles.contactPage} >
            <div className={styles.getInTouchSection}>
              <h1><span className={styles.getSection}>GET</span><span className={styles.inTouchSection}> IN TOUCH</span></h1>
            </div>
            <div className={styles.formAndDetailsSection}>
              <div className={styles.formSection}> <ContactForm /></div>
              <div className={styles.dataSection}>
                <div className={styles.intraDataSection}>
                  <h3>Phone</h3><h2><a href="tel:+919811611041" target="_blank">(+91)9811611041</a>
                  </h2></div>
                <div className={styles.intraDataSection}>
                  <h3>Email</h3><h2><a href='mailto:gupta.shrey@outlook.com' target="_blank">
                    gupta.shrey@outlook.com
                  </a></h2>
                </div>
                <div className={styles.intraDataSection}>
                  <h3>Address</h3><h2><a href="https://www.google.com/maps/place/Braunschweig,+Germany/@52.2720777,10.3630793,11z/data=!3m1!4b1!4m6!3m5!1s0x47aff5d58a00663b:0x425ac6d94ac3ab0!8m2!3d52.2677907!4d10.5245656!16zL20vMGRnZng?entry=ttu" target="_blank">Pitampura, Delhi</a></h2>
                </div>
                <div className={styles.intraDataSection}><h3>Socials</h3>
                  <div className={styles.socialIcons}>
                    <a href="">
                      <img src={twitter} alt="" />
                    </a>
                    <a href="">
                      <img src={github} alt="" />
                    </a>
                    <a href="">
                      <img src={slack} alt="" />
                    </a>
                    <a href="">
                      <img src={yt} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
