import Head from 'next/head';
import React from 'react';
import { FaUserMd } from 'react-icons/fa';
import styles from './SignupPage.module.css';

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>SugarSync - Create Your Account</title>
        <meta name="description" content="Create your SugarSync account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.signupCard}>
          <div className={styles.header}>
            <FaUserMd size={50} className={styles.icon} />
            <h2>Create Your Account</h2>
          </div>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className={styles.inputGroup}>
              <label>Password</label>
              <input type="password" placeholder="Enter a password" />
            </div>
            <div className={styles.inputGroup}>
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm your password" />
            </div>
            <button type="submit" className={styles.signupButton}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
