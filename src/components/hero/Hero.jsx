import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';

const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi,I'm Suman</h1>
            <p className={styles.description}>I'm a full-stack developer with 1 year of experience using react,nodejs and ruby on rails. Reach out if you'd like to learn more!</p>
            <a href="mailto:iamsuperstarsuman@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="heroImage" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}

export default Hero