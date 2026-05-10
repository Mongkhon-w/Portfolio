'use client';
import React, { createContext, useState, useContext } from 'react';

type Language = 'TH' | 'EN';

const translations = {
  EN: {
    home: 'Home',
    api: 'API',
    about: 'ABOUT ME',
    location: 'Thailand',
    source: 'Source code',
    description: 'Mongkol Wichayaphap - Network Engineer and Full-stack Developer. This website provides REST APIs using Node.js and JSON data structures, along with technical write-ups on Flutter and Cisco networking.',
    apiEndpoints: 'API Endpoints',
    viewAll: 'View all APIs →',
    financeApi: 'FINANCIAL TRACKER API',
    financeDesc: 'Endpoints for managing financial records (JSON export format)',
    networkApi: 'NETWORK CONFIG API',
    networkDesc: 'VLAN and OSPF routing simulation data'
  },
  TH: {
    home: 'หน้าแรก',
    api: 'เอพีไอ',
    about: 'เกี่ยวกับฉัน',
    location: 'ประเทศไทย',
    source: 'ซอร์สโค้ด',
    description: 'Mongkol Wichayaphap - วิศวกรเครือข่ายและนักพัฒนา Full-stack เว็บไซต์นี้ให้บริการ REST APIs ที่เขียนด้วย Node.js และจัดการข้อมูลแบบ JSON พร้อมบทความด้าน Flutter และระบบเครือข่าย Cisco',
    apiEndpoints: 'เอพีไอทั้งหมด',
    viewAll: 'ดูทั้งหมด →',
    financeApi: 'ระบบจัดการการเงิน API',
    financeDesc: 'จัดการข้อมูลและส่งออกรายงานในรูปแบบ JSON',
    networkApi: 'ข้อมูลการตั้งค่าเครือข่าย API',
    networkDesc: 'ข้อมูลจำลองการทำ VLAN และ OSPF'
  }
};

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('EN');
  
  const toggleLang = (selectedLang: Language) => setLang(selectedLang);
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);