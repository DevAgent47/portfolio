import React from 'react';
import { Typography, Timeline } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const About: React.FC = () => (
    <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
        <Title level={2}>About Me</Title>
        <Paragraph>
            I’m a Full Stack Developer experienced in the MERN stack, AWS, and integrating AI & Web3 tech.
        </Paragraph>
        <Timeline
            items={[
                { children: '2023 – Built large-scale MERN apps' },
                { children: '2024 – Deployed apps to AWS & explored AI integration' },
                { children: '2025 – Built Chrome Extensions & Web3 tools' },
            ]}
        />
    </motion.div>
);

export default About;