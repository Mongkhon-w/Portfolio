'use client';
import React, { createContext, useState, useContext } from 'react';

type Language = 'TH' | 'EN';

const translations = {
  EN: {
    // ... คำแปลเดิม ...
    aboutMeTitle: 'About Me',
    name: 'Mongkol Wichayaphap',
    role: 'Network Engineer & Full-stack Developer',
    affiliation: 'Computer Engineering (B.Eng) | Rajamangala University of Technology Phra Nakhon',
    contactHeading: 'Contact & Social Media',
    ytDesc: 'Programming tutorials and networking',
    fbDesc: 'Latest updates and community',
    ttDesc: 'Short programming and IT tips'
  },
  TH: {
    // ... คำแปลเดิม ...
    aboutMeTitle: 'เกี่ยวกับฉัน',
    name: 'มงคล วิชัยภาพ',
    role: 'วิศวกรเครือข่าย และ นักพัฒนา Full-stack',
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