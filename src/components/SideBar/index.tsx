import React, { useState, useEffect } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./sidebar.css";
import logo from "../../assets/mu.jpg";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  TeamOutlined,
  ProjectOutlined,
  HistoryOutlined,
  FileOutlined,
  BellOutlined,
  SearchOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import {
  Button,
  Layout,
  Menu,
  theme,
  Input,
  Avatar,
  Badge,
  Dropdown,
} from "antd";
import Notification from "../../pages/Notification";
import Employee from "../../pages/Employee";
import Team from "../../pages/Team";
import Tracking from "../../pages/Tracking";
import Project from "../../pages/Project";
import Setting from "../../pages/Setting";
import ExportCV from "../../pages/ExportCV";
import TestPage from "../../pages/Test";

const { Header, Sider, Content } = Layout;

const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [title, setTitle] = useState("Company Management System");
  const [searchVisible, setSearchVisible] = useState(false);
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    switch (location.pathname) {
      case "/employee":
        setTitle("Employee");
        break;
      case "/team":
        setTitle("Teams");
        break;
      case "/tracking":
        setTitle("History");
        break;
      case "/project":
        setTitle("Project");
        break;
      case "/exportcv":
        setTitle("ExportCV");
        break;
      case "/notification":
        setTitle("Notifications");
        break;
      case "/setting":
        setTitle("Setting");
        break;
      default:
        setTitle("Company Management System");
        break;
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setSearchVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);

    if (window.innerWidth > 640) {
      setSearchVisible(true);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const userMenuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Profile",
    },
    {
      key: "2",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      key: "3",
      icon: <LogoutOutlined />,
      label: "Logout",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          <img src={logo} className="logo-image" alt="Company Logo" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to="/employee">Employee Management</Link>,
            },
            {
              key: "2",
              icon: <TeamOutlined />,
              label: <Link to="/team">Teams</Link>,
            },
            {
              key: "3",
              icon: <ProjectOutlined />,
              label: <Link to="/project">Project</Link>,
            },
            {
              key: "4",
              icon: <HistoryOutlined />,
              label: <Link to="/tracking">History Tracking</Link>,
            },
            {
              key: "5",
              icon: <FileOutlined />,
              label: <Link to="/exportcv">Export CV</Link>,
            },
            {
              key: "6",
              icon: <BellOutlined />,
              label: <Link to="/notification">Notifications</Link>,
            },
            {
              key: "7",
              icon: <SettingOutlined />,
              label: <Link to="/setting">Setting</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <h2 style={{ marginLeft: "16px" }}>{title}</h2>
          </div>
          <div className="header-actions">
            <Button
              type="text"
              icon={<SearchOutlined />}
              className="search-button"
              onClick={() => setSearchVisible(!searchVisible)}
              style={{ fontSize: "16px" }}
            />
            <div className="search-wrapper">
              <Input
                placeholder="Search..."
                className={`search-input ${searchVisible ? "" : "hidden"}`}
              />
            </div>
            <Badge count={5}>
              <BellOutlined style={{ fontSize: "24px" }} />
            </Badge>
            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
              <Avatar
                size="large"
                icon={<UserOutlined />}
                style={{ cursor: "pointer" }}
              />
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/employee" />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/team" element={<Team />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/project" element={<Project />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/exportcv" element={<ExportCV />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBar;
