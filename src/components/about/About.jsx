import React from 'react'
import styles from './About.module.css';
import { getImageUrl } from '../../utils';


const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="aboutimage" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Development</h3>
                        <p>I'm frontend developer with experience in developing responsive websites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Development</h3>
                        <p>I have experience in developing fast and optimised backend-systems and APIs</p>
                    </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have created multiple landing pages and have created design system as well</p>
                    </div>
                </li>

            </ul>
        </div>
    </section>
}

export default About