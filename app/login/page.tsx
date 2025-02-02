import Head from 'next/head';
import React from 'react';
import { FaUserMd } from 'react-icons/fa';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>SugarSync - Log In</title>
        <meta name="description" content="Log in to your SugarSync account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.loginCard}>
          <div className={styles.header}>
            <FaUserMd size={50} className={styles.icon} />
            <h2>Welcome Back</h2>
          </div>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className={styles.inputGroup}>
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className={styles.buttonGroup}>
              <button type="submit" className={styles.loginButton}>
                Log In
              </button>
            </div>
            <div className={styles.forgotPassword}>
              <a href="#">Forgot your password?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
