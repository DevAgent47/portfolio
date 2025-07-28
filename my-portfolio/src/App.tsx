import React, { useState } from 'react';
import { Layout, Button, Switch, ConfigProvider, FloatButton } from 'antd';
import Navbar from './components/Navbar';
// import AppRouter from './router';
// import { motion } from 'framer-motion';
import { DownloadOutlined } from '@ant-design/icons';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', minWidth: "600px", width: "100vw", backgroundColor: "rgb(31 31 31)" }} className={darkMode ? 'dark-mode' : ''}>
        <FloatButton
          style={{ insetBlockEnd: 108 }}
          tooltip={{
            // tooltipProps is supported starting from version 5.25.0.
            title: 'Mode Change',
            placement: 'top',
          }}
          icon={darkMode ? "🌙" : "☀️"}
          onClick={() => setDarkMode(!darkMode)}
        />
        <FloatButton tooltip={<div>Resume</div>} style={{ backgroundImage: "linear-gradient(45deg, #e721ff, transparent)", border: 0 }} />
        <Content style={{ padding: '2rem' }}>
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AppRouter />
          </motion.div> */}
          <Home />
          <About />
          <Contact />
          <Projects />
        </Content>
        <div className='footer'>© 2025 Trevor Keck</div>
      </Layout>
    </ConfigProvider>
  );
};

export default App;