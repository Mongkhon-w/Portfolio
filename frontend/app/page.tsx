'use client';
import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';
import { MapPin, Github, Server, ChevronDown, Database, Network } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.mascot}>
          {/* ใส่รูปภาพ Mascot หรือโลโก้ของคุณที่นี่ */}
          <Server size={64} color="var(--text-secondary)" />
        </div>
        
        <div className={styles.links}>
          <div className={styles.linkItem}>
            <MapPin size={18} /> {t.location}
          </div>
          <a href="#" className={styles.linkItem}>
            <Github size={18} /> {t.source}
          </a>
        </div>

        <p className={styles.description}>{t.description}</p>
      </div>

      <div className={styles.apiSection}>
        <div className={styles.apiHeader}>
          <div className={styles.apiTitle}>
            <Server size={24} /> {t.apiEndpoints}
          </div>
          <a href="#" className={styles.viewAll}>{t.viewAll}</a>
        </div>

        {/* เมนูที่ 1: Financial API */}
        <div className={styles.accordion}>
          <div className={styles.accordionLeft}>
            <div className={styles.iconBox}>
              <Database size={20} />
            </div>
            <div className={styles.accordionContent}>
              <h3>{t.financeApi}</h3>
              <p>{t.financeDesc}</p>
            </div>
          </div>
          <ChevronDown size={20} color="var(--text-secondary)" />
        </div>

        {/* เมนูที่ 2: Network Config API */}
        <div className={styles.accordion}>
          <div className={styles.accordionLeft}>
            <div className={styles.iconBox} style={{ color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
              <Network size={20} />
            </div>
            <div className={styles.accordionContent}>
              <h3>{t.networkApi}</h3>
              <p>{t.networkDesc}</p>
            </div>
          </div>
          <ChevronDown size={20} color="var(--text-secondary)" />
        </div>
      </div>
    </main>
  );
}