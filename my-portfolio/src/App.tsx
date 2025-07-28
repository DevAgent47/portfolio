import React, { useState } from 'react';
import { Layout, ConfigProvider, FloatButton } from 'antd';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import EmailButton from './components/EmailButton';
const { Content } = Layout;

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
      <Layout style={{ minHeight: '100vh', minWidth: "600px", width: "100vw", backgroundColor: darkMode ? "rgb(31 31 31)" : "rgb(222 222 222)" }} className={darkMode ? 'dark-mode' : ''}>
        <EmailButton />
        <FloatButton
          style={{ insetBlockEnd: 102 }}
          tooltip={{
            title: 'Mode Change',
            placement: 'top',
          }}
          icon={darkMode ? "🌙" : "☀️"}
          onClick={() => setDarkMode(!darkMode)}
        />
        <FloatButton
          tooltip={<div>Resume</div>}
          style={{ backgroundImage: "linear-gradient(45deg, #e721ff, transparent)", border: 0 }}
          onClick={() => window.open('src/assets/Resume.pdf')}
        />
        <Content style={{ padding: '2rem' }}>
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