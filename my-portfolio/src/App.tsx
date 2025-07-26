import React, { useState } from 'react';
import { Layout, Button, Switch } from 'antd';
import Navbar from './components/Navbar';
import AppRouter from './router';
import { motion } from 'framer-motion';
import { DownloadOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }} className={darkMode ? 'dark-mode' : ''}>
      <Header style={{ backgroundColor: '#001529' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Navbar />
          <div>
            <Switch
              checkedChildren="🌙"
              unCheckedChildren="☀️"
              onChange={() => setDarkMode(!darkMode)}
            />
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              style={{ marginLeft: '1rem' }}
              href="./assets/Resume.pdf"
              target="_blank"
            >
              Resume
            </Button>
          </div>
        </div>
      </Header>
      <Content style={{ padding: '2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AppRouter />
        </motion.div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>© 2025 Trevor Keck</Footer>
    </Layout>
  );
};

export default App;