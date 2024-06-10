import React from 'react';
import * as styles from "../styles/footer.module.css";

function Footer() {
    const copyright = String.fromCodePoint(0x00A9);
    let year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.line} />
            <div className={styles.content}>
                <div className={styles.copyrightLogo}>
                    <span>
                        {`${copyright} ${year} Shrey Gupta`}
                    </span>
                </div>
                <div className={styles.socialMediaLinks}>
                    <a href="https://in.linkedin.com/in/shreyg-upta"><img src="linkedInLogo.png" className={styles.linkedin} alt="LinkedIn"/></a>
                    <a href="https://www.instagram.com/shreyg.upta/"><img src="instagramLogo.png" className={styles.insta} alt="Instagram" /></a>
                </div>
                <div className={styles.moreaboutme}>
                    <span ><a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&themeRefresh=1">{"More about me <"}</a></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
