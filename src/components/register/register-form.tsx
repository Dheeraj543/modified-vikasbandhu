import { Form, Input, Button, Col, Row, Typography, Checkbox } from "antd";
const { Title, Text } = Typography;
function RegisterForm() {
  return (
    <div className="register-form-container" >
      <Form layout="vertical">
        <Row gutter={93}>
          <Col className="gutter-row" span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phonenumber"
              rules={[{ required: true, message: "Phone Number is required" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Years of Experience"
              name="experience"
              rules={[{ required: true, message: "Experience is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <Row gutter={8} align="bottom">
              <Col flex={"auto"} className="gutter-row" span={16}>
                <Form.Item
                  label="PAN card Number"
                  name="pancardnumber"
                  rules={[
                    { required: true, message: "PAN number is required" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={8}>
                <Button ghost type="primary" block>
                  Upload Document
                </Button>
                <Text type="secondary">Max file size: 1MB</Text>
              </Col>
            </Row>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Title level={3} style={{ fontWeight: 400 }}>
              Location
            </Title>

            <Row gutter={16}>
              <Col span={4}>
                <Form.Item
                  label="Pin Code"
                  name="pincode"
                  rules={[{ required: true, message: "Pincode is required" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={20}>
                <Form.Item
                  label="Address"
                  name="address"
                  rules={[{ required: true, message: "Address is required" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ span: 12 }}
        >
          <Checkbox
            style={{
              color: "#4e4e4e",
              fontWeight: "400",
              lineHeight: "16.4px",
            }}
          >
            I certify that the information submitted above is true and correct
            to the best of my knowledge. I further understand that any false
            statements m ay result in denial or revocation of the services
          </Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 16 }}>
          <Button type="primary" htmlType="submit" style={{ width: "223px" }}>
            Submit
          </Button>
          <Button
            type="link"
            htmlType="button"
            style={{ color: "rgba(0, 0, 0, 0.5)" }}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegisterForm;
