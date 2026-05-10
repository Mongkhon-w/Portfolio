'use client';
import React, { createContext, useState, useContext } from 'react';

type Language = 'TH' | 'EN';

const translations = {
  EN: {
    // ===================================
    // ส่วนที่ 1: คำแปลสำหรับหน้าแรก (Home) และ Navbar
    // ===================================
    home: 'Home',
    api: 'API',
    about: 'ABOUT ME',
    location: 'Thailand',
    source: 'Source code',
    description: 'Mongkol Wichayaphap - Software Engineer and Full-stack Developer. This website provides REST APIs using Node.js and JSON data structures, along with technical write-ups on Flutter.',
    apiEndpoints: 'API Endpoints',
    viewAll: 'View all APIs →',
    financeApi: 'FINANCIAL TRACKER API',
    financeDesc: 'Endpoints for managing financial records (JSON export format)',
    networkApi: 'NETWORK CONFIG API',
    networkDesc: 'VLAN and OSPF routing simulation data',

    // ===================================
    // ส่วนที่ 2: คำแปลสำหรับหน้า About Me
    // ===================================
    aboutMeTitle: 'About Me',
    name: 'Mongkol Wichayaphap',
    role: 'Software Engineer & Full-stack Developer',
    affiliation: 'Computer Engineering (B.Eng) | Rajamangala University of Technology Phra Nakhon',
    contactHeading: 'Contact & Social Media',
    ytDesc: 'Programming tutorials and networking',
    fbDesc: 'Latest updates and community',
    ttDesc: 'Short programming and IT tips'
  },
  TH: {
    // ===================================
    // ส่วนที่ 1: คำแปลสำหรับหน้าแรก (Home) และ Navbar
    // ===================================
    home: 'หน้าแรก',
    api: 'เอพีไอ',
    about: 'เกี่ยวกับฉัน',
    location: 'ประเทศไทย',
    source: 'ซอร์สโค้ด',
    description: 'มงคล วิชัยภาพ - วิศวกรซอฟต์แวร์และนักพัฒนา Full-stack เว็บไซต์นี้ให้บริการ REST APIs ที่เขียนด้วย Node.js และจัดการข้อมูลแบบ JSON พร้อมบทความด้าน Flutter',
    apiEndpoints: 'เอพีไอทั้งหมด',
    viewAll: 'ดูทั้งหมด →',
    financeApi: 'ระบบจัดการการเงิน API',
    financeDesc: 'จัดการข้อมูลและส่งออกรายงานในรูปแบบ JSON',
    networkApi: 'ข้อมูลการตั้งค่าเครือข่าย API',
    networkDesc: 'ข้อมูลจำลองการทำ VLAN และ OSPF',

    // ===================================
    // ส่วนที่ 2: คำแปลสำหรับหน้า About Me
    // ===================================
    aboutMeTitle: 'เกี่ยวกับฉัน',
    name: 'มงคล วิชัยภาพ',
    role: 'วิศวกรซอฟต์แวร์ และ นักพัฒนา Full-stack',
    affiliation: 'วิศวกรรมคอมพิวเตอร์ (วศ.บ.) | มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร',
    contactHeading: 'ช่องทางการติดต่อและโซเชียลมีเดีย',
    ytDesc: 'สอนเขียนโปรแกรมและระบบเครือข่าย',
    fbDesc: 'อัปเดตข่าวสารและพูดคุย',
    ttDesc: 'ทริคไอทีและโค้ดดิ้งสั้นๆ'
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