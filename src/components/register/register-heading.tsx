import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

function RegisterHeader() {
  return (
    <div>
      <Title level={3} style={{ fontWeight: 700, marginTop: 80 }}>
        VikasBandhu
      </Title>
      <Title
        style={{ fontWeight: 300, color: "green", marginTop: "10px" }}
        level={1}
      >
        Field Officer Registration
      </Title>
    </div>
  );
}

export default RegisterHeader;
