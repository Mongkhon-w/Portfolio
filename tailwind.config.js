/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ใช้ class เพื่อให้เรากดสลับ Dark/Light mode เองได้
  theme: {
    extend: {
      colors: {
        // เพิ่มสี Custom สำหรับ Dark mode 
        dark: {
          bg: '#0F172A', // Slate 900
          card: '#1E293B', // Slate 800
          text: '#F8FAFC', // Slate 50
        }
      }
    },
  },
  plugins: [],
}