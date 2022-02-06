import React from "react";
import { Table, Row, Col, Button, Select, Typography, Radio } from "antd";
import "./ongoing_actions.scss";

const { Option } = Select;
const { Title } = Typography;

const escalateButtonStyle = {
  backgroundColor: "rgba(242, 242, 242, 1)",
  borderRadius: "5px",
  color: "rgba(66, 133, 244, 1)",
};

const OngoingActions = () => {
  const decideHtml = (text: string) => {
    if (text == "To be verified") {
      return (
        <Row gutter={[10, 10]}>
          <Col span={10}>
            <Button
              style={{
                backgroundColor: "rgba(18, 128, 92, 1)",
                borderRadius: "5px",
              }}
              block
              type="primary"
            >Approve
            </Button>
          </Col>
          <Col span={10}>
            <Button
              block
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
                color: "rgba(218, 76, 98, 1)",
              }}
            >
              Reject
            </Button>
          </Col>
          <Col span={20}>
            <Button style={escalateButtonStyle} block>
              Escalate to Admin
            </Button>
          </Col>
        </Row>
      );
    } else if (text == "To be resolved") {
      return (
        <Row gutter={[8, 8]}>
          <Col span={20}>
            <Button
              block
              type="primary"
              style={{
                backgroundColor: "rgba(18, 128, 92, 1)",
                borderRadius: "5px",
              }}
            >
              Mark as resolved
            </Button>
          </Col>
          <Col span={20}>
            <Button
              style={{
                backgroundColor: "rgba(242, 242, 242, 1)",
                borderRadius: "5px",
                color: "rgba(66, 133, 244, 1)",
              }}
              block
            >
              Escalate to admin
            </Button>
          </Col>
        </Row>
      );
    }
    return "";
  };

  const newData = [
    {
      key: "1",
      actionId: "A12345",
      category: "User",
      requestIssue: "Add User",
      buyer_seller_id: 12345,
      details: "Seller unable to login. Please reset",
      status: "Sent to Admin",
    },
    {
      key: "2",
      actionId: "A12345",
      category: "User",
      requestIssue: "Add User",
      buyer_seller_id: 12345,
      details: "Seller unable to login. Please reset",
      status: "Sent to Admin",
    },
    {
      key: "3",
      actionId: "A12345",
      category: "User",
      requestIssue: "Add User",
      buyer_seller_id: 12345,
      details: "Seller unable to login. Please reset",
      status: "To be verified",
    },
    {
      key: "4",
      actionId: "A12345",
      category: "User",
      requestIssue: "Add User",
      buyer_seller_id: 12345,
      details: "Seller unable to login. Please reset",
      status: "To be verified",
    },
    {
      key: "5",
      actionId: "A12345",
      category: "User",
      requestIssue: "Add User",
      buyer_seller_id: 12345,
      details: "Seller unable to login. Please reset",
      status: "To be resolved",
    },
  ];
  const { Option } = Select;

  const columns = [
    {
      title: (
        <Row>
          <Col span={24}>Action ID</Col>
          <Col span={24}>
            <Select
              className="filters"
              showSearch
              // value={this.state.value}
              placeholder={"Search"}
              // style={this.props.style}
              // defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              onSearch={() => { }}
              onChange={() => { }}
              notFoundContent={null}
            ></Select>
          </Col>
        </Row>
      ),
      dataIndex: "actionId",
      key: "actionId",
    },
    {
      title: (
        <Row>
          <Col span={24}>Action ID</Col>
          <Col span={24}>
            <Select
              className="filters"
              placeholder="Select"
              onChange={() => { }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled">Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Col>
        </Row>
      ),
      dataIndex: "category",
      key: "category",
    },
    {
      title: (
        <Row>
          <Col span={24}>Request/Issue</Col>
          <Col span={24}>
            <Select
              className="filters"
              placeholder="Select"
              onChange={() => { }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled">Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Col>
        </Row>
      ),
      dataIndex: "requestIssue",
      key: "requestIssue",
    },
    {
      title: (
        <Row>
          <Col span={24}>Seller/BuyerID</Col>
          <Col span={24}>
            <Select
              className="filters"
              showSearch
              // value={this.state.value}
              placeholder={"Search"}
              // style={this.props.style}
              // defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              onSearch={() => { }}
              onChange={() => { }}
              notFoundContent={null}
            ></Select>
          </Col>
        </Row>
      ),
      key: "buyer_seller_id",
      dataIndex: "buyer_seller_id",
      render: (id: any) => <a>{id}</a>,
    },
    {
      title: (
        <Row>
          <Col span={24}>Details</Col>
          <Col span={24}>
            <Select
              className="filters"
              showSearch
              // value={this.state.value}
              placeholder={"Search"}
              // style={this.props.style}
              // defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              onSearch={() => { }}
              onChange={() => { }}
              notFoundContent={null}
            ></Select>
          </Col>
        </Row>
      ),

      key: "details",
      dataIndex: "details",
    },
    {
      title: (
        <Row>
          <Col span={24}>Status</Col>
          <Col span={24}>
            <Select
              className="filters"
              placeholder="Select"
              onChange={() => { }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled">Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Col>
        </Row>
      ),
      key: "status",
      dataIndex: "status",
      render: (status: any, record: any) => (
        <Row>
          <Col span={8}>{status}</Col>
          <Col span={16}>{decideHtml(status)}</Col>
        </Row>
      ),
    },
  ];
  return (
    <div className="ongoing-actions">
      <Table
        columns={columns}
        dataSource={newData}
        pagination={{ position: ["bottomLeft"] }}
      />
    </div>
  );
};

export default OngoingActions;
