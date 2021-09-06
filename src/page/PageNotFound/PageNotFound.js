import React from 'react'
import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.scss';
export default function index() {
    return (
        <div style={{backgroundImage:` url('https://assets.codepen.io/1538474/star.svg'),linear-gradient(to bottom, #05007A, #4D007D)`}} className={styles.PageNotFound}>
            <div>
                <div style={{backgroundImage:`url(/404/mars.svg)`}} className={styles.mars} />
                <img src={'/404/404.svg'} className={styles.logo_404} alt="logo-404" />
                <img src={'/404/meteor.svg'} className="meteor" alt="meteor" />
                <p className={styles.title}>Oh no!!</p>
                <p className={styles.subtitle}>
                    You’re either misspelling the URL <br /> or requesting a page that's no longer here.
  </p>
                <div className={styles.back_home} align="center">
                    <Link className={styles.btn_back} to="/home">Back to Home</Link>
                </div>
                <img src='/404/astronaut.svg' className={styles.astronaut} alt='astronaut'/>
                <img src='/404/spaceship.svg' className={styles.spaceship} alt='spaceship' />
            </div>

        </div>
    )
}