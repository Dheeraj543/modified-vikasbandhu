import { Row, Col, Card, Select, Anchor } from "antd";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { getDashboardData } from "../../store/slices/dashboardSlice";
import InfoDetails from "./info_details";
import { useEffect, useState } from "react";
import Transactions from "./transactions";
import Matches from "./matches";
import Users from "./users";
const { Link } = Anchor;
const { Option } = Select;

const boxShadowStyle = {
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.16)",
  paddingLeft: "0px !important",
  paddingRight: "0px !important",
};

export default function Information() {
  const [showTransactions, setShowTransactions] = useState(false);
  const [showMatches, setShowMatches] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  const transactions = () => {
    setShowTransactions(true);
    setShowMatches(false);
    setShowUsers(false);
  };
  const matches = () => {
    setShowTransactions(false);
    setShowMatches(true);
    setShowUsers(false);
  };
  const dummy = () => {
    setShowTransactions(false);
    setShowMatches(false);
    setShowUsers(false);
  };
  const user = () => {
    setShowTransactions(false);
    setShowMatches(false);
    setShowUsers(true);
  };
  const {
    liveTransactionValue,
    allTransactions,
    matchStatus,
    sellerProduce,
    totalTransactionValue,
    vbUsers,
  } = useSelector((state: RootState) => state.dashboard.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardData());
  }, []);

  const buildSelector = (data: any) => {
    return (
      <Select
        defaultValue="All"
        style={{ width: 120 }}
        onChange={(value) => console.log(`selected ${value}`)}
      >
        <Option value="All">All</Option>
        {data.map((item: any) => {
          return <Option value={item["legend"]}>{item["legend"]}</Option>;
        })}
      </Select>
    );
  };

  return (
    <>
      <div>
        <Row gutter={[20, 20]} style={{ padding: "10px" }}>
          <Col span={24}>
            <Card
              style={boxShadowStyle}
              title="Live Transaction Overview"
              extra={buildSelector(liveTransactionValue)}
            >
              <InfoDetails
                isHalfDonut={true}
                chartData={liveTransactionValue}
                colors={[
                  "rgba(24, 87, 141, 1)",
                  "rgba(26, 75, 132, 1)",
                  "rgba(29, 63, 121, 1)",
                  "rgba(32, 51, 110, 1)",
                  "rgba(134, 221, 212, 1)",
                  "rgba(102, 197, 202, 1)",
                  "rgba(45, 72, 123, 1)",
                  "rgba(87, 185, 196, 1)",
                  "rgba(73, 173, 191, 1)",
                ]}
              />
              <Anchor
                onClick={transactions}
                targetOffset={110}
                affix={false}
                className="scroll"
              >
                <Link href="#transactionsDiv" title="View Details" />
              </Anchor>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="VB Users" style={boxShadowStyle}>
              <InfoDetails
                isHalfDonut={false}
                chartData={vbUsers}
                colors={[
                  "rgba(81, 130, 108, 1)",
                  "rgba(198, 178, 114, 1)",
                  "rgba(51, 67, 76, 1)",
                ]}
              />
              <Anchor
                onClick={user}
                targetOffset={110}
                affix={false}
                className="scroll"
              >
                <Link href="#transactionsDiv" title="View Details" />
              </Anchor>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="All Transactions"
              style={boxShadowStyle}
              // extra={buildSelector(allTransactions)}
            >
              <InfoDetails
                isHalfDonut={false}
                chartData={allTransactions}
                colors={[
                  "rgba(163, 67, 123, 1)",
                  "rgba(237, 196, 54, 1)",
                  "rgba(235, 111, 93, 1)",
                ]}
              />

              <Anchor onClick={transactions} targetOffset={110} affix={false} className="scroll">
                <Link href="#transactionsDiv" title="View Details" />
              </Anchor>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Seller Produce: Intent to Sell Status"
              style={boxShadowStyle}
              // extra={buildSelector(sellerProduce)}
            >
              <InfoDetails
                isHalfDonut={false}
                chartData={sellerProduce}
                colors={["rgba(73, 108, 206, 1)", "rgba(217, 228, 237, 1)"]}
              />
              <Anchor onClick={dummy} targetOffset={110} affix={false} className="scroll">
                <Link href="#transactionsDiv" title="View Details" />
              </Anchor>
            </Card>
          </Col>
          <Col span={16}>
            <Card
              title="Total Transaction Value"
              style={boxShadowStyle}
              extra={buildSelector(totalTransactionValue)}
            >
              <InfoDetails
                isHalfDonut={true}
                chartData={totalTransactionValue}
                colors={[
                  "rgba(163, 67, 123, 1)",
                  "rgba(242, 126, 84, 1)",
                  "rgba(246, 160, 65, 1)",
                  "rgba(237, 196, 54, 1)",
                  "rgba(198, 78, 115, 1)",
                ]}
              />
              <Anchor onClick={dummy} targetOffset={110} affix={false} className="scroll" style={{ visibility: "hidden" }}>
                <Link href="#transactionsDiv" title="View Details" />
              </Anchor>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Match Status"
              style={boxShadowStyle}
              // extra={buildSelector(matchStatus)}
            >
              <InfoDetails
                isHalfDonut={false}
                chartData={matchStatus}
                colors={["rgba(231, 222, 212, 1)", "rgba(218, 76, 98, 1)"]}
              />
              <Anchor
                onClick={matches}
                targetOffset={110}
                affix={false}
                className="scroll"
              >
                <Link href="#transactionsDiv" title="View Details" />
              </Anchor>
            </Card>
          </Col>
        </Row>
      </div>
      <div id="transactionsDiv">
        {showTransactions ? <Transactions /> : null}
        {showMatches ? <Matches /> : null}
        {showUsers ? <Users /> : null}
      </div>
    </>
  );
}
