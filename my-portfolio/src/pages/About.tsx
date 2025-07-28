import React from 'react';
import { Typography } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const About: React.FC = () => (
    <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className='outline-div'>
        <Title level={2}>About Me</Title>
        <Paragraph>
            I'm a Full Stack Web Developer with 5+ years of experience specializing in React, Node.js, and Shopify. I build fast, scalable web applications and custom ecommerce solutions using modern tools like Hydrogen, Remix, Tailwind CSS, and GraphQL. I’m passionate about clean code, great UI/UX, and creating tools that solve real problems. Always learning, always building.
        </Paragraph>
    </motion.div>
);

export default About;