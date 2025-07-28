import React from 'react';
import { Card, Col, Row, Tag } from 'antd';
import { motion } from 'framer-motion';

const projects = [
    {
        title: '🛍️ Shopify Headless Storefront',
        description: 'Built a custom Shopify storefront using Hydrogen and Remix. Implemented dynamic routing, SEO optimization, and responsive UI with Tailwind. Integrated Storefront API for real-time product and cart management.',
        tags: ['Hydrogen, Remix, Tailwind CSS, GraphQL'],
    },
    {
        title: '📊 Admin Dashboard for Analytics',
        description: 'Designed and developed a responsive dashboard for monitoring KPIs. Used Chart.js for visualizations and built custom filters, role-based access, and live data updates using WebSockets.',
        tags: ['React, Node.js, Chart.js, MongoDB'],
    },
    {
        title: '🤖 Slack Order Notifier App (Shopify)',
        description: 'Created a private Shopify app that sends formatted order summaries to Slack channels. Integrated OpenAI to generate smart summaries and used Express.js to manage webhooks and settings.',
        tags: ['Node.js, Slack API, Shopify Admin API, OpenAI API'],
    },
];

const Projects: React.FC = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className='outline-div'>
        <Row gutter={[16, 16]}>
            {projects.map((proj, i) => (
                <Col xs={24} sm={24} md={12} key={i}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2 + 0.5 }}
                    >
                        <Card title={proj.title} variant={"outlined"}>
                            <p>{proj.description}</p>
                            {proj.tags.map(tag => (
                                <Tag color="blue" key={tag}>{tag}</Tag>
                            ))}
                        </Card>
                    </motion.div>
                </Col>
            ))}
        </Row>
    </motion.div>
);

export default Projects;