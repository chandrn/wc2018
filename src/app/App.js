import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon, Row, Col } from "antd";
import { Provider } from "react-redux";

import Groups from "../groups/Groups";
import store from "../store";
import "./App.css";
import Fixtures from "../fixtures/Fixtures";

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  state = {
    collapsed: true
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Header
              style={{ background: "#001529", padding: 0, paddingLeft: 16 }}
              className="header"
            >
              <Row className="logo">
                <Col lg={8} xs={16}>
                  <h3>FIFA World cup 2018 Fixtures and Results</h3>
                </Col>
                <Col lg={{span:8, offset: 8}} xs={8}>
                  <h3>
                    <a href="https://github.com/chandrn/wc2018" target="_blank">
                      <Icon type="github" />
                    </a>
                  </h3>
                </Col>
              </Row>
            </Header>
            <Layout>
              <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
              >
                <Menu
                  style={{ height: "100%", borderRight: 0 }}
                  defaultSelectedKeys={["1"]}
                  mode="inline"
                  theme="dark"
                >
                  <Menu.Item key="1">
                    <Icon type="calendar" />
                    <span>Fixtures</span>
                    <Link to="/" />
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="bar-chart" />
                    <span>Groups</span>
                    <Link to="/groups" />
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout>
                <Content
                  style={{
                    background: "#fff",
                    padding: 24,
                    margin: 0,
                    minHeight: 280
                  }}
                >
                  <Route exact path="/" component={Fixtures} />
                  <Route path="/groups" component={Groups} />
                </Content>
                <Footer style={{ textAlign: "center" }}>
                  Made possible by{" "}
                  <a href="https://github.com/openfootball/">Open Football</a>{" "}
                  and{" "}
                  <a href="https://github.com/ant-design/ant-design">
                    ant-design
                  </a>
                </Footer>
              </Layout>
            </Layout>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
