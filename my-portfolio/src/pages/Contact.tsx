import React from 'react';
import { Typography, Space } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const Contact: React.FC = () => (
    <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
        <Title level={2}>Contact</Title>
        <Space direction="vertical">
            <Paragraph>Email: kecktrevor55@gmail.com</Paragraph>
            <Paragraph>GitHub: https://github.com/DevAgent47</Paragraph>
            <Paragraph>LinkedIn: https://linkedin.com/in/yourprofile</Paragraph>
        </Space>
    </motion.div>
);

export default Contact;
