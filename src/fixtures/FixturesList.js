import React from "react";
import { List, Avatar } from "antd";
import { Row, Col, Collapse } from "antd";
import moment from "moment-timezone";

import countries from "./countries.js";

export default class FixturesList extends React.Component {
  render() {
    const fixtures = this.props.fixtures;
    const matches = [];
    const completedMatches = [];
    fixtures.rounds.map(round => {
      round.matches.map(match => {
        match.team1.avatar = this.getAvatar(match.team1.name);
        match.team2.avatar = this.getAvatar(match.team2.name);
        match.time = moment(`${match.date}T${match.time}+03`)
          .tz(moment.tz.guess())
          .format("DD MMM YYYY hh:mmA z");
        if (match.score1 !== null) {
          completedMatches.push(match);
        } else matches.push(match);
      });
    });
    console.log("matches--", completedMatches);
    return (
      <Collapse bordered={false} defaultActiveKey={["2"]}>
        <Collapse.Panel header="Results">
          <List
            itemLayout="horizontal"
            dataSource={completedMatches}
            renderItem={item => this.renderListItem(item)}
          />
        </Collapse.Panel>
        <Collapse.Panel header="Fixtures" key="2">
          <List
            itemLayout="horizontal"
            dataSource={matches}
            renderItem={item => this.renderListItem(item)}
          />
        </Collapse.Panel>
      </Collapse>
    );
  }

  getAvatar(teamName) {
    if (teamName === "Russia") teamName = "Russian Federation";
    else if (teamName === "Iran") teamName = "Iran, Islamic Republic of";
    const countryCode = Object.keys(countries).find(
      key => countries[key] === teamName
    );
    if (countryCode)
      return `https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/${countryCode.toLowerCase()}.png`;
    return "";
  }

  renderListItem(item) {
    return (
      <List.Item>
        <List.Item.Meta
          title={
            <Row>
              <Col xs={2} lg={2}>
                <Avatar src={item.team1.avatar} />
              </Col>
              <Col xs={24} lg={4} style={{ textAlign: "center" }}>
                <h3>{item.team1.name}</h3>
              </Col>
              {item.score1 !== null && (
                <Col xs={24} lg={4} style={{ textAlign: "center" }}>
                  <h3>{item.score1}</h3>
                </Col>
              )}
              {item.score1 === null && (
                <Col xs={24} lg={8} style={{ textAlign: "center" }}>
                  vs
                </Col>
              )}
              {item.score2 !== null && (
                <Col xs={24} lg={4} style={{ textAlign: "center" }}>
                  <h3>{item.score2}</h3>
                </Col>
              )}
              <Col xs={24} lg={4} style={{ textAlign: "center" }}>
                <h3>{item.team2.name}</h3>
              </Col>
              <Col xs={2} lg={2}>
                <Avatar src={item.team2.avatar} />
              </Col>
            </Row>
          }
          description={
            item.score1 === null ? (
              <span>
                At {item.stadium.name}, your time{" "}
                <b>
                  <i>{item.time}</i>
                </b>
              </span>
            ) : (
              <Row>
                <Col xs={24} lg={8}>
                  {item.goals1.map(goal => (
                    <b>
                      <i>
                        {goal.name}:{goal.minute}{" "}
                      </i>
                    </b>
                  ))}
                </Col>
                <Col xs={24} lg={{ span: 8, offset: 8 }}>
                  {item.goals2.map(goal => (
                    <b>
                      <i>
                        {goal.name}:{goal.minute}{" "}
                      </i>
                    </b>
                  ))}
                </Col>
              </Row>
            )
          }
        />
      </List.Item>
    );
  }
}
