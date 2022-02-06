import React from "react";
import Information from "./components/information";
import { Tabs } from "antd";
import ActionsUI from "./components/actions_ui";

import { PageHeader, Button, Descriptions } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
const { TabPane } = Tabs;
const Dashboard = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "60px",
          marginLeft: "100px",
          marginRight: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ alignItems: "center" }}>
          <Title
            level={3}
            style={{
              fontWeight: 300,
              display: "inline-block",
              marginRight: 5,
            }}
          >
            Admin Dashboard:
          </Title>
          <Title level={3} style={{ display: "inline-block" }}>
            Field Operator
          </Title>
        </div>
        <div>
          <Title
            level={3}
            style={{
              marginTop: 25,
              fontWeight: 300,
              display: "inline-block",
              marginRight: 5,
            }}
          >
            East Region, Mandya
          </Title>
        </div>
      </div>

      <Tabs
        defaultActiveKey="1"
        type="card"
        style={{
          padding: "10px 75px",
        }}
      >
        <TabPane tab="Information" key="1">
          <Information />
        </TabPane>
        <TabPane tab="Actions" key="2" className="custom">
          <ActionsUI />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Dashboard;
