import React from 'react';
import { Typography, Flex, Avatar } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;
const boxStyle: React.CSSProperties = {
    width: '100%',
    height: 120,
    borderRadius: 6,
    border: '1px solid #40a9ff',
};
const Home: React.FC = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className='outline-div'>
        <Flex gap="middle" align="center" justify='center'>
            <div>
                <img src="src/assets/images/Me.png" className='avatar' />
            </div>
            <div>
                <Title level={1}>Hi, I'm Trevor Keck</Title>
                <Paragraph>
                    Full Stack Developer | React, Node.js, TypeScript | Exploring AI + Web3
                </Paragraph>
            </div>
        </Flex>

    </motion.div>
);

export default Home;