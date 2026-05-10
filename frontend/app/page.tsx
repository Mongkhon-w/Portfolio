'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './page.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // ดึงข้อมูลจาก API แบบ JSON
    axios.get('http://localhost:3001/api/projects')
      .then(response => {
        if (response.data.success) {
          setProjects(response.data.data);
        }
      })
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>แฟ้มสะสมผลงาน (Portfolio)</h1>
      
      <div>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p className={styles.tech}>เครื่องมือที่ใช้: {project.tech_stack}</p>
          </div>
        ))}
      </div>
    </main>
  );
}