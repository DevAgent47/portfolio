import React from 'react';
import { Card, Col, Row, Tag } from 'antd';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'AI Chat Assistant',
        description: 'React + GPT-4 real-time overlay tool.',
        tags: ['React', 'GPT-4', 'Chrome Extension'],
    },
    {
        title: 'Web3 Voting Dapp',
        description: 'Blockchain-secured voting system using Ethereum.',
        tags: ['Solidity', 'React', 'Smart Contracts'],
    },
];

const Projects: React.FC = () => (
    <Row gutter={[16, 16]}>
        {projects.map((proj, i) => (
            <Col xs={24} sm={12} md={8} key={i}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                >
                    <Card title={proj.title} bordered={false}>
                        <p>{proj.description}</p>
                        {proj.tags.map(tag => (
                            <Tag color="blue" key={tag}>{tag}</Tag>
                        ))}
                    </Card>
                </motion.div>
            </Col>
        ))}
    </Row>
);

export default Projects;