'use client';
import { useLanguage } from '@/context/LanguageContext';
import styles from './about.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa';

export default function About() {
  const { t } = useLanguage();

  const socialLinks = [
    { id: 1, name: 'YouTube', desc: t.ytDesc, icon: <FaYoutube />, url: '#' },
    { id: 2, name: 'Facebook', desc: t.fbDesc, icon: <FaFacebook />, url: '#' },
    { id: 3, name: 'TikTok', desc: t.ttDesc, icon: <FaTiktok />, url: '#' },
  ];

  return (
    <main className={styles.container}>
      {/* ส่วนนำทาง (Breadcrumb) */}
      <div className={styles.breadcrumb}>
        <Link href="/">{t.home}</Link>
        <span>{'>'}</span>
        <span>{t.aboutMeTitle}</span>
      </div>

      {/* ส่วนข้อมูลโปรไฟล์ */}
      <section className={styles.profileSection}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/Profile/profile.png" // เตรียมรูปชื่อ profile.jpg ไว้ในโฟลเดอร์ public
            alt="Profile Image"
            width={150}
            height={150}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <h1 className={styles.name}>{t.name}</h1>
        <p className={styles.role}>{t.role}</p>
        <p className={styles.affiliation}>{t.affiliation}</p>
      </section>

      {/* ส่วนช่องทางการติดต่อ */}
      <section>
        <h2 className={styles.contactHeading}>{t.contactHeading}</h2>
        <div className={styles.grid}>
          {socialLinks.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <div className={styles.iconWrapper}>
                {link.icon}
              </div>
              <h3 className={styles.cardTitle}>{link.name}</h3>
              <p className={styles.cardDesc}>{link.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}