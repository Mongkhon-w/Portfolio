CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    tech_stack VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO projects (title, description, tech_stack) VALUES 
('Finance Tracker', 'ระบบจัดการการเงิน', 'Flutter, Node.js, JSON'),
('Network Design', 'ออกแบบระบบเครือข่าย', 'Cisco, VLAN, OSPF');