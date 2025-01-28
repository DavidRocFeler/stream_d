import React from 'react';
import styles from '../styles/SideComponent.module.css';
import Link from 'next/link';

const SideSecction: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.linksContainer}>
          <Link href="/cookies" className={styles.link}>Cookies</Link>
          <Link href="/terms" className={styles.link}>Terms</Link>
          <Link href="/privacy" className={styles.link}>Privacy</Link>
          <Link href="/help" className={styles.link}>Help</Link>
          <Link href="/wallet" className={styles.link}>Wallet</Link>
          <Link href="/support" className={styles.link}>Support</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/subscriptions" className={styles.link}>Subscriptions</Link>
          <Link href="/upload-stream" className={styles.link}>Upload Stream</Link>
      </div>

      <div className={styles.socialSection}>
        <h3 className={styles.followTitle}>FOLLOW</h3>
        <div className={styles.socialLinks}>
          <Link href="#" className={styles.socialLink}>
            <i className="fab fa-facebook"></i>
          </Link>
          <Link href="#" className={styles.socialLink}>
            <i className="fab fa-instagram"></i>
          </Link>
          <Link href="#" className={styles.socialLink}>
            <i className="fab fa-pinterest"></i>
          </Link>
          <Link href="#" className={styles.socialLink}>
            <i className="fab fa-twitter"></i>
          </Link>
        </div>
      </div>

      <div className={styles.copyright}>
        2025 Stream·d | developed by Star14
      </div>
    </footer>
  );
};

export default SideSecction;