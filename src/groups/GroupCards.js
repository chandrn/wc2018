import React from "react";
import { Card, Col, Row, Table } from "antd";

export default class GroupCards extends React.Component {
  render() {
    const groups = this.props.groups;
    const columns = [
      {
        title: "Team",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Played",
        dataIndex: "played",
        key: "played"
      },
      {
        title: "Won",
        dataIndex: "won",
        key: "won"
      },
      {
        title: "Lost",
        dataIndex: "lost",
        key: "lost"
      },
      {
        title: "Drawn",
        dataIndex: "drawn",
        key: "drawn"
      },
      {
        title: "Points",
        dataIndex: "pts",
        key: "pts"
      }
    ];

    const dataSource = [];
    groups.map(group => {
      group.standings.map((standing, index) => {
        const datum = {};
        datum.name = standing.team.name;
        datum.key = index;
        datum.played = standing.played;
        datum.won = standing.won;
        datum.lost = standing.lost;
        datum.drawn = standing.drawn;
        datum.pts = standing.pts;
        dataSource.push(datum);
      });
    });

    const mappedGroups = groups.map((group, index) => (
      <Col xs={24} lg={8}>
        <Card title={group.name}>
          <div style={{overflow: 'auto'}}>
            <Table
              columns={columns}
              dataSource={dataSource.slice(index * 4, (index + 1) * 4)}
              pagination={false}
              scroll={{x: 'auto'}}
            />
          </div>
        </Card>
      </Col>
    ));

    return (
      <div>
        <Row gutter={16}>{mappedGroups}</Row>
      </div>
    );
  }
}

/*
<Card
        title="Card title"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
*/
