import React from "react";
import "antd/dist/antd.css";
import { Tabs, Table, Typography, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { CaretDownOutlined } from "@ant-design/icons";
import { getUsersDetails } from "../../store/slices/usersSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const { TabPane } = Tabs;
interface Seller {
  pk: string;
  name: any;
  seller_type: any;
  phone_no: any;
  address1: any;
}
interface Buyer {
  pk: string;
  name: any;
  buyer_type: any;
  phone_no: any;
  address1: any;
}

const columns: ColumnsType<Seller> = [
  {
    title: "ID",
    dataIndex: "pk",
    render: (pk: string) => <p key={pk}>{pk.split("#")[1]}</p>,
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Type",
    dataIndex: "seller_type",
  },
  {
    title: "Contact",
    dataIndex: "phone_no",
  },
  {
    title: "Address",
    dataIndex: "address1",
  },
];
const columns1: ColumnsType<Buyer> = [
  {
    title: "ID",
    dataIndex: "pk",
    render: (pk: string) => <p key={pk}>{pk.split("#")[1]}</p>,
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Type",
    dataIndex: "buyer_type",
  },
  {
    title: "Contact",
    dataIndex: "phone_no",
  },
  {
    title: "Address",
    dataIndex: "address1",
  },
];
function App() {
  const userdata = useSelector((state: RootState) => state.users.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersDetails());
  }, []);
  var sellers: any = [];
  var buyers: any = [];

  for (var i = 0; i < userdata?.length; i++) {
    if (userdata[i]["is_buyer"]) buyers.push(userdata[i]);
    else sellers.push(userdata[i]);
  }
  return (
    <div className="t card-container">
      <Typography.Title level={4} className="title">
        Users
      </Typography.Title>
      <Space> </Space>
      <Tabs type="card" className="card">
        <TabPane tab="Seller" key="1">
          {sellers.length !== 0 ? (
            <>
              <Table<Seller>
                columns={columns}
                dataSource={sellers}
                pagination={false}
                scroll={{ x: 1350 }}
              />
              <div className="transactions">
                <a href="/"> View All Users</a>
              </div>
            </>
          ) : (
            <div
              style={{
                textAlign: "center",
                fontSize: "25px",
                marginTop: "120px",
              }}
            >
              Fetching....
            </div>
          )}
        </TabPane>
        <TabPane tab="Buyer" key="2">
          {buyers.length !== 0 ? (
            <>
              <Table<Buyer>
                columns={columns1}
                dataSource={buyers}
                style={{ width: 1300 }}
                pagination={false}
                scroll={{ x: 1350 }}
              />
              <div className="transactions">
                <a href="/users"> View All Users</a>
              </div>
            </>
          ) : (
            <div
              style={{
                textAlign: "center",
                fontSize: "25px",
                marginTop: "120px",
              }}
            >
              Fetching....
            </div>
          )}
        </TabPane>
      </Tabs>
    </div>
  );
}
export default App;
