import Bar from "./bar";
import Detail from "./Detprof";
import { Link } from "react-router-dom";
import { Breadcrumb, Image, Modal } from "antd";
import { Layout, Menu, Dropdown } from "antd";
import { CaretDownOutlined, BellFilled } from "@ant-design/icons";
import "antd/dist/antd.css";

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/transactions">Transactions</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/matches">Matches</Link>
    </Menu.Item>
  </Menu>
);

function AppHeader() {
  return (
    <div className="container1">
      <div className="standard-bar">
        <Bar
          mail="support@vikasbandhu.com    "
          phone="        +91 9876543210"
        />
      </div>
      <div className="landing-page-header-bar">
        <div className="col-2">
          <Image className="logo" src="./logo192.png" preview={false} />
        </div>
        <div className="col-22">
          <div className="col-2-2">
            <Breadcrumb className="header-breadcrumb" separator=" ">
              <Breadcrumb.Item className="item button">
                <Link to="/">Dashboard</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Dropdown overlay={menu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Operations
                    <CaretDownOutlined />
                  </a>
                </Dropdown>
              </Breadcrumb.Item>
              <Breadcrumb.Item className="item button">
                <Link to="/users">Users</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item className="item button">
                <Link to="/produces">Produces</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item className="item bell">
                <BellFilled style={{ fontSize: "115%" }} />
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div className="col-2-2-2">
            <Detail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
