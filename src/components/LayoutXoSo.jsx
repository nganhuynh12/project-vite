import React from "react";
import { Space, Table, Tag } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
import { useNavigate } from "react-router-dom";

const LayoutXoSo = (props) => {
  const { content } = props;
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    {
      key: "home",
      label: <span>home</span>,
    },

    {
      key: "XoSo",
      label: <span>XoSo</span>,
    },

    {
      key: "XoSo2",
      label: <span>XoSo2</span>,
    },

    {
      key: "Swiper",
      label: <span>Swiper</span>,
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          onClick={({ item, key, keyPath, domEvent }) => {
            if (key === "home") {
              navigate("/");
            }
            if (key === "XoSo") {
              navigate("/XoSo");
            }
            if (key === "XoSo2") {
              navigate("/XoSo2");
            }
            if (key === "Swiper") {
              navigate("/Swiper");
            }
          }}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <div>{content}</div>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LayoutXoSo;
