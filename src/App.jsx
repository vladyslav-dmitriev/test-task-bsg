import React from 'react';
import { Layout, Row, Col } from 'antd';

import Profile from './_components/Profile';

const {
  Header,
  Footer,
  Sider,
  Content,
} = Layout;

const App = () => (
  <Layout>
    <Header>HEADER</Header>
    <Layout className="content">
      <Sider>LEFT SIDE MENU</Sider>
      <Content>
        <Row>
          <Col span={16} offset={4}>
            <Profile />
          </Col>
        </Row>
      </Content>
    </Layout>
    <Footer>FOOTER</Footer>
  </Layout>
);

export default App;
