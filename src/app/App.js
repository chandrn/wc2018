import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
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
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <div className="logo">
                <h1>
                  <a href="https://github.com" target="_blank">
                    <Icon type="github" />
                  </a>
                </h1>
              </div>
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
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
                  margin: "24px 16px",
                  padding: 24,
                  background: "#fff",
                  minHeight: 280
                }}
              >
                <Route exact path="/" component={Fixtures} />
                <Route path="/groups" component={Groups} />
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Made possible by{" "}
                <a href="https://github.com/openfootball/">Open Football</a> and{" "}
                <a href="https://github.com/ant-design/ant-design">
                  ant-design
                </a>
              </Footer>
            </Layout>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
