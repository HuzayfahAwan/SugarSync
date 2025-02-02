import Head from 'next/head';
import React from 'react';
import Link from 'next/link';                // <-- Import Link from next/link
import { FaStethoscope, FaHeartbeat, FaAmbulance } from 'react-icons/fa';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>SugarSync - Secure Medical Data Sync</title>
        <meta
          name="description"
          content="SugarSync - Your trusted platform to synchronize and manage your health data securely."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        {/* Header */}
        <header className={`${styles.header} ${styles.slideInDown}`}>
          <div className={styles.headerContent}>
            <FaStethoscope size={40} className={`${styles.icon} ${styles.float}`} />
            <h1 className={styles.headerTitle}>SugarSync Medical</h1>
          </div>
        </header>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.backgroundAnimation}>
            <FaHeartbeat className={`${styles.floatingIcon} ${styles.floatingIcon1}`} size={30} />
            <FaAmbulance className={`${styles.floatingIcon} ${styles.floatingIcon2}`} size={30} />
            <FaStethoscope className={`${styles.floatingIcon} ${styles.floatingIcon3}`} size={30} />
          </div>
          <div className={`${styles.heroOverlay} ${styles.slideInLeft}`}>
            <h2 className={styles.heroTitle}>Welcome to SugarSync</h2>
            <p className={styles.heroSubtitle}>
              An FREE Alternative To Those Buggy Dexcom Devices
            </p>
            <div className={styles.buttonGroup}>
              {/* Use Link for client-side navigation to /login */}
              <Link href="/login" className={`${styles.primaryBtn} btn btn-lg`}>
                Log In
              </Link>
              {/* Use Link for client-side navigation to /signup */}
              <Link href="/signup" className={`${styles.secondaryBtn} btn btn-lg`}>
                Sign Up
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className="container text-center">
            <small>
              &copy; {new Date().getFullYear()} SugarSync Medical. All rights reserved.
            </small>
          </div>
        </footer>
      </main>
    </>
  );
}