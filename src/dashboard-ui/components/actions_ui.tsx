import { Tabs, Row, Col, Button } from "antd";
import OngoingActions from "./ongoing_actions";
import { PlusOutlined } from "@ant-design/icons";
import CreateNewAction from "./create_action";

const { TabPane } = Tabs;

const ActionsUI = () => {
  return (
    <div>
      <div className="createnewaction">
        <CreateNewAction /></div>

      <Tabs
        defaultActiveKey="1"
        type="card"
        style={{
          marginTop: "10px",
          padding: "50px 75px",
        }}
      >
        <TabPane tab="On Going Actions" key="1">
          <div style={{ marginBottom: "50px" }}></div>
          {/* <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{
              marginBottom: "20px",
              backgroundColor: "rgba(18, 128, 92, 1)",
              height: "40px",
            }}
          >
            Create New Action
          </Button> */}

          <OngoingActions />
        </TabPane>
        <TabPane tab="Completed Actions" key="2">
          <div style={{ border: "2px blue" }}>tab 2</div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ActionsUI;
