import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();
    const selectedKey = location.pathname === '/' ? '/' : location.pathname;

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[selectedKey]}
            style={{ flex: 1 }}
        >
            <Menu.Item key="/">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/projects">
                <Link to="/projects">Projects</Link>
            </Menu.Item>
            <Menu.Item key="/about">
                <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="/contact">
                <Link to="/contact">Contact</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;