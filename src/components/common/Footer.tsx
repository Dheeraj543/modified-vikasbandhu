import React from "react";
import { Row, Col, Image } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Text } = Typography;
function Footer() {
  return (
    <div className="footer" style={{ position: "absolute", bottom: "0px" }}>
      <Row justify="space-between" align="top">
        <Col>
          <div style={{ marginBottom: "10px" }}>
            <MailOutlined style={{ fontSize: "20px", marginRight: "10px" }} />
            <Text type="secondary" style={{ color: "#ffffff" }}>
              support@vikasbandhu.com
            </Text>
          </div>

          <div>
            <PhoneOutlined style={{ fontSize: "20px", marginRight: "10px" }} />
            <Text type="secondary" style={{ color: "#ffffff" }}>
              +91-9000090000
            </Text>
          </div>
        </Col>
        <Col>
          <Text type="secondary" style={{ color: "#ffffff" }}>
            &copy; (Pending) Vikasbandhu 2020
          </Text>
        </Col>
        <Col>
          <Text type="secondary" style={{ color: "#ffffff", fontSize: "10px" }}>
            Powered By
          </Text>
          <br />
          <Image src={"./sampark-logo.svg"} width={200} height={50} />
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
