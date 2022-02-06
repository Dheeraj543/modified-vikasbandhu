import { Tabs, Row, Col, Button, Typography } from "antd";
import Producestab from "./producestab";
import Producestab2 from "./producestab2";
import "./produce.scss";

const { TabPane } = Tabs;


const produces = () => {
    return (
        <div className="produce match card-container">
            <Typography.Paragraph className="prodtitle">Produces</Typography.Paragraph>
            <Button className="allprod">All Produces</Button>
            <Typography.Paragraph className="produces">Supported by VikasBandhu</Typography.Paragraph>
            <Tabs
                defaultActiveKey="1"
                type="card">

                <TabPane tab="Intent to Sell" key="1">
                    <div style={{ marginBottom: "25px" }}></div>
                    <Producestab />
                </TabPane>
                <TabPane tab="Interested to Buy" key="2">
                    <div style={{ marginBottom: "25px" }}></div>
                    <Producestab2 />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default produces;
