import React from 'react';
// import './matchesmenu.scss';
import './transactionsmenu.scss';
import 'antd/dist/antd.css';
import { Divider } from 'antd';
import { Tabs, Table, Typography, Space, Select, Input, Checkbox ,Dropdown, Menu } from 'antd';
import { DownOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import { CaretDownOutlined } from "@ant-design/icons";
import { useEffect, useState, useRef } from "react";
import MenuItem from 'antd/lib/menu/MenuItem';

const { TabPane } = Tabs;
const { Option } = Select;
interface User {
    id: string;
    tags: any;
    produce: string;
    tvalue: string;
    quantity: string;
    sids: string;
    buyer: any;
    tinfo: any;
    addcost: any;
}
const data: User[] = [
    {
        id: "T12345",
        tags: ["Pending", "Seller Accepted", "Details"],
        produce: "Produce-Variety-Grade",
        tvalue: "₹41,000",
        quantity: "10 qtl",
        sids: "12345",
        buyer: ["67890", "Mandya"],
        tinfo: ["-"],
        addcost: ["-"],
    },
    {
        id: "T12345",
        tags: ["Pending", "Seller Accepted", "Details"],
        produce: "Produce-Variety-Grade",
        tvalue: "₹41,000",
        quantity: "20 qtl",
        sids: "12345",
        buyer: ["67890", "Mandya"],
        tinfo: ["-"],
        addcost: ["-"],
    },
    {
        id: "T12345",
        tags: ["On Going", "Produce Booked", "Details"],
        produce: "Produce-Variety-Grad",
        tvalue: "₹41,000",
        quantity: "20 qtl",
        sids: "12345",
        buyer: ["6788", "Mandya"],
        tinfo: ["-"],
        addcost: ["-"],

    },
    {
        id: "T12345",
        tags: ["On Going", "Transporter Assigned", "Details"],
        produce: "Produce-Variety-Grade",
        tvalue: "₹41,000",
        quantity: "20 qtl",
        sids: "12345",
        buyer: ["67890", "Mandya"],
        tinfo: ["Transportation", "Details"],
        addcost: ["-"],
    },
];


function App() {
    var filteredData = data;
    const [dataSource, setDataSource] = useState(filteredData);
    const [idSearch, setIdSearch] = useState('');
    const [produceSearch, setProduceSearch] = useState('');
    const [statusSearch,setstatusSearch]=useState([]);
    const [transactionvalueSearch, setTransactionvalueSearch] = useState('');
    const [quantitySearch, setQuantitySearch] = useState('');
    const [sellerSearch, setSellerSearch] = useState('');
    const [buyerSearch, setBuyerSearch] = useState('');
    const [dropDownOpen, setDropdownOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState('');
    //statusss

    const [bc,setBC]=useState(false);
const [sa,setSA]=useState(false);
const [pb,setPB]=useState(false);
const [ta,setTA]=useState(false);
const [pp,setPP]=useState(false);
const [spr,setSPR]=useState(false);
const [it,setIT]=useState(false);
const [pd,setPD]=useState(false);
const [fpr,setFPR]=useState(false);
const [com,setCOM]=useState(false);
const [a,setA]=useState(false);
const [b,setB]=useState(false);
const [vis,setVIS]=useState(false);

//statusend

    const initialRender = useRef(true);

    const applyFilters = () => {
        let clonedData = [...data];

        let filtered = clonedData.filter(entry => {
            return entry.id.toLowerCase().includes(idSearch.toLowerCase())
        });

        filtered = filtered.filter(entry => {
            return entry.sids.toLowerCase().includes(sellerSearch.toLowerCase())
        })   
        let dup = filtered.filter(entry => {
            return entry.sids.toLowerCase().includes('abcdefg');
        })     
        let f1=dup,f2=dup,f3=dup,f4=dup,f5=dup,f6=dup,f7=dup,f8=dup,f9=dup,f10=dup;        
        if(sa){            
            f1=filtered.filter(entry=>{
                return entry.tags[1]=="Seller Accepted";
            });         
        };
        if(bc){
            f2=filtered.filter(entry=>{
                return entry.tags[1]=="Buyer Connected";
            });

        };
        if(pb){
            f3=filtered.filter(entry=>{
                return entry.tags[1]=="Produce Booked";
            });
        };
        if(ta){
            f4=filtered.filter(entry=>{
                return entry.tags[1]=="Transporter Assigned";
            });
        };
        if(pp){
            f5=filtered.filter(entry=>{
                return entry.tags[1]=="Produced Picked";
            });
        };
        if(spr){
            f6=filtered.filter(entry=>{
                return entry.tags[1]=="Second Payment Recieved";
            });
        };
        if(it){
            f7=filtered.filter(entry=>{
                return entry.tags[1]=="In Transit";
            });
        };
        if(pd){
            f8=filtered.filter(entry=>{
                return entry.tags[1]=="Produce Delivered";
            });
        };
        if(fpr){
            f9=filtered.filter(entry=>{
                return entry.tags[1]=="Final Payment Received";
            });
        };
        if(com){
            f10=filtered.filter(entry=>{
                return entry.tags[1]=="Completed";
            });
        };
        if(bc || sa || pb || ta || pp || spr || com || it || pd || fpr){
            filtered=[...f1, ...f2, ...f3, ...f4, ...f5, ...f6, ...f7, ...f8, ...f9, ...f10];
        }
        if (produceSearch.length) {
            filtered = filtered.filter(entry => {
                return entry.produce === produceSearch;
            });
        };
        filtered = filtered.filter(entry => {
            return entry.tvalue.toLowerCase().includes(transactionvalueSearch.toLowerCase())
        })
        filtered = filtered.filter(entry => {
            return entry.quantity.toLowerCase().includes(quantitySearch.toLowerCase())
        })
        filtered = filtered.filter(entry => {
            return entry.buyer.join().toLowerCase().includes(buyerSearch.toLowerCase())
        })
        console.log(filtered, idSearch, clonedData)
        
        setDataSource([...filtered]);
        
    }

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }
        applyFilters();
    }, [idSearch, transactionvalueSearch, quantitySearch, sellerSearch, buyerSearch])
    const FilterByNameInput = (
        <>
            <Typography.Paragraph>ID</Typography.Paragraph>
            <Input
                placeholder="Search"
                value={idSearch}
                onChange={async e => {
                    const currValue = e.target.value;
                    setIdSearch(currValue);
                    // let filtered = data.filter(entry => {
                    //   return entry.id.toLocaleLowerCase().includes(currValue.toLocaleLowerCase())
                    // })
                    // setDataSource(filtered);
                }}
            />
        </>
    );
    const FilterBystatusInput = (
        <>
            <Typography.Paragraph>Seller ID</Typography.Paragraph>
            <Input
                placeholder="Search"
                value={sellerSearch}
                onChange={e => {
                    const currValue = e.target.value;
                    setSellerSearch(currValue);
                    // filteredData = filteredData.filter(entry =>
                    //   entry.sids.includes(currValue)
                    // );
                    // setDataSource(filteredData);
                }}
            />
        </>
    );
    const Filtertvalue = (
        <>
            <Typography.Paragraph>Transaction Value</Typography.Paragraph>
            <Input
                style={{ width: 140 }}
                placeholder="search"
                value={transactionvalueSearch}
                onChange={e => {
                    const currValue = e.target.value;
                    setTransactionvalueSearch(currValue);
                }}
            />
        </>
    );
    const Filterquantity = (
        <>
            <Typography.Paragraph>Quantity</Typography.Paragraph>
            <Input
                placeholder="search"
                value={quantitySearch}
                onChange={e => {
                    const currValue = e.target.value;
                    setQuantitySearch(currValue);
                }}
            />
        </>
    );
    const FilterBuyer = (
        <>
            <Typography.Paragraph>Buyer</Typography.Paragraph>
            <Input
                placeholder="Search"
                value={buyerSearch}
                onChange={e => {
                    const currValue = e.target.value;
                    setBuyerSearch(currValue);
                    // filteredData = filteredData.filter(entry =>
                    //   entry.sids.includes(currValue)
                    // );
                    // setDataSource(filteredData);
                }}
            />
        </>
    );
    const Filtertinfo = (
        <>
            <Typography.Paragraph style={{ fontSize: 16 }}>Transportation Info </Typography.Paragraph>
            <Select
                placeholder="Select"
                style={{ width: 140 }}
            />
        </>
    );
    const FilterAcost = (
        <>
            <Typography.Paragraph style={{ fontSize: 16 }}>Additional Cost</Typography.Paragraph>
            <Select
                placeholder="Select"
                style={{ width: 140 }}
            />
        </>
    );
    const selectfilter = (
        <>
            <Typography.Paragraph>Produce</Typography.Paragraph>
            <Select
                defaultValue=""
                value={produceSearch}
                style={{ width: 200 }}

                onDropdownVisibleChange={e => {
                    if (e) {
                        setDropdownOpen(true)
                        setVIS(false);
                        setActiveDropdown('produce');
                    }
                }}
                open={dropDownOpen && activeDropdown === 'produce'}
                dropdownRender={menu => {
                    return (
                        <div style={{ width: 300 }}>
                            {menu}
                            <div className="buttonsWrapper">
                                <button onClick={async () => {
                                    await setProduceSearch('');
                                    setDropdownOpen(false);
                                    applyFilters();
                                }}>
                                    Reset Filters
                                </button>
                                <button onClick={() => {
                                    setDropdownOpen(false)
                                    applyFilters()
                                }}>Apply Filter</button>
                            </div>
                        </div>
                    )
                }}
                onSelect={(e: React.SetStateAction<string>) => {
                    console.log(e, produceSearch)
                    if (produceSearch && e === produceSearch) {
                        setProduceSearch('');
                    } else {
                        setProduceSearch(e);
                    }

                    // setProduceSearch(currValue);
                    // filteredData = filteredData.filter(entry =>
                    //   entry.produce.includes(currValue)
                    // );
                    // setDataSource(filteredData);
                }}>
                <Option value="Produce-Variety-Grade">Produce-Variety-Grade</Option>
                <Option value="produce-Variety">hi</Option>
            </Select>
        </>
    );
//status_related

function handle(e:any){
    let tar=e.target.id;
    if(tar=='bc'){
        setBC(!bc);
        setA(false);
    }
    else if(tar=='sa'){
        setSA(!sa);
        setA(false);
    }
    else if(tar=='a'){
        setA(!a);
        setSA(!a);
        setBC(!a);
    }
    else if(tar=='pb'){
        setPB(!pb);
        setB(false);
    }
    else if(tar=='ta'){
        setTA(!ta);
        setB(false);
    }
    else if(tar=='pp'){
        setPP(!pp);
        setB(false);
    }
    else if(tar=='pd'){
        setPD(!pd);
        setB(false);
    }
    else if(tar=='spr'){
        setSPR(!spr);
        setB(false);
    }
    else if(tar=='it'){
        setIT(!it);
        setB(false);
    }
    else if(tar=='fpr'){
        setFPR(!fpr);
        setB(false);
    }
    else if(tar=='b'){
        setB(!b);
        setPB(!b);
        setTA(!b);
        setPP(!b);
        setSPR(!b);
        setIT(!b);
        setPD(!b);
        setFPR(!b);
    }
    else if(tar=='com'){
        setCOM(!com);
    }
}
const menu=(
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          1st menu item
        </a>
      </Menu.Item>
      <MenuItem>
        <div>
            status
        </div>
        
        <Checkbox
            id='bc'
            onClick={handle}
            checked={bc}>
            Buyer Connected
        </Checkbox>
        <Checkbox
            id='sa'
            onClick={handle}
            checked={sa}>
            Seller Accepted
        </Checkbox>
        <Checkbox
            id='a'
            onClick={handle}
            checked={a}>
            Select All
        </Checkbox>
        
      </MenuItem>
      <Divider dashed className='dashedline'></Divider>
      <MenuItem>
        <div>
            Ongoing transactions
        </div>
        <div className='ongoing'>
        <Checkbox
            id='pb'
            onClick={handle}
            checked={pb}>
            Produce Booked
        </Checkbox>
        <Checkbox
            id='ta'
            onClick={handle}
            checked={ta}>
            Transporter Assigned
        </Checkbox>
        <Checkbox
            id='pp'
            onClick={handle}
            checked={pp}>
            Produced Picked
        </Checkbox>
        <Checkbox
            id='spr'
            onClick={handle}
            checked={spr}>
            Second Payment Recieved
        </Checkbox>
        <Checkbox
            id='it'
            onClick={handle}
            checked={it}>
            In Transit
        </Checkbox>
        <Checkbox
            id='pd'
            onClick={handle}
            checked={pd}>
            Produce Delivered
        </Checkbox>
        <Checkbox
            id='fpr'
            onClick={handle}
            checked={fpr}>
            Final Payment Received
        </Checkbox>
        <Checkbox
            id='b'
            onClick={handle}
            checked={b}>
            Select All
        </Checkbox>
        </div>
      </MenuItem>
      <MenuItem>
        <div>
            Completed Transactions
        </div>
        <Checkbox
            id='com'
            onClick={handle}
            checked={com}>
                Completed
        </Checkbox>
      </MenuItem>
      <Menu.Item>
        <div className="buttonsWrapper">
            <button onClick={async () => {
                await setBC(false);
                setDropdownOpen(false);
                setVIS(false);
                applyFilters();
                }}>
                Reset Filters
            </button>
            <button onClick={() => {
                setDropdownOpen(false)
                setVIS(false);
                    applyFilters()
                }}>Apply Filter
            </button>
        </div>
      </Menu.Item>
    </Menu>
);
function handleClick(e:any){
    setVIS(true);
    setDropdownOpen(false);
}
    const tags = (
        <>
            <Typography.Paragraph>Status</Typography.Paragraph>
            <Dropdown overlay={menu} trigger={['click']} visible={vis} placement="bottomLeft">
    <a className="sty ant-select ant-select-single ant-select-selection-search" onClick={handleClick}>
        <div className='select'>Select</div>
       <DownOutlined />
    </a>
  </Dropdown>
        </>
    );

    const columns: ColumnsType<User> = [
        {
            title: FilterByNameInput,
            dataIndex: "id",
        },
        {
            title: tags,
            dataIndex: "tags",
            render: (tags) => (
                <>
                    {tags.map((tag: any) => {
                        let color: any = "black";
                        if (tag === "Pending") {
                            color = "#F6A041";
                        }
                        if (tag === "On Going") {
                            color = "#12805C";
                        }
                        if (tag === "Details") {
                            color = "#4285F4";
                            return (
                                <p style={(color = { color })} key={tag}>
                                    {tag}
                                    <CaretDownOutlined />
                                </p>
                            );
                        }
                        return (
                            <p style={(color = { color })} key={tag}>
                                {tag}
                            </p>
                        );
                    })}
                </>
            )
        },
        {
            title: selectfilter,
            dataIndex: "produce"
        },
        {
            title: Filtertvalue,
            dataIndex: "tvalue"
        },
        {
            title: Filterquantity,
            dataIndex: "quantity"
        },

        {
            title: FilterBystatusInput,
            dataIndex: "sids",
            render: (sids: string) => (
                <p style={{ color: "blue" }} key={sids}>
                    {sids}
                </p>

            )
        },
        {
            title: FilterBuyer,
            dataIndex: "buyer",
            render: (buyer) => (
                <>
                    {buyer.map((buy: any) => {
                        return (
                            <p key={buy}>
                                {buy}
                            </p>
                        );
                    })}
                </>
            )
        },
        {
            title: Filtertinfo,
            dataIndex: "tinfo"
        },
        {
            title: FilterAcost,
            dataIndex: "Acost"
        },


        /*
        {
          title: "Transaction Info",
          dataIndex: "tinfo",
          render: (tinfo) => (
            <>
              {tinfo.map((ad: any) => {
                return (
                  <p key={ad}>
                    {ad}
                  </p>
                );
              })}
            </>
          )
        },
        {
          title: "Additional Cost",
          dataIndex: "addcost",
      
        }
        */
    ];
    const clearFilters = () => {
        setIdSearch('');
        setProduceSearch('');
        setTransactionvalueSearch('');
        setQuantitySearch('');
        setSellerSearch('');
        setBuyerSearch('');
        setDataSource([...data]);
    }



    return (
        <>
            <div className='match card-container'>
                <Typography.Title level={4} className="title">Transactions</Typography.Title>
                <Space> </Space>
                <Tabs type="card" className="cardd" >
                    <TabPane tab="Seller Transactions" key="1">
                        <div style={{ marginBottom: "25px" }}></div>

                        <Table<User> columns={columns} dataSource={dataSource} pagination={{ position: ["bottomLeft"] }} scroll={{ x: 1350 }} rowClassName={(record, index) => (record.tags[0] == "Pending" ? "rowClassName1" : "rowClassName2")} />
                        <Checkbox className="check">View All Issues</Checkbox>
                        <Checkbox className="checkk" onChange={clearFilters}>Clear All Filters</Checkbox>
                    </TabPane>
                    <TabPane tab="Buyer Transactions" key="2" className="buyer">
                        <div style={{ marginBottom: "25px" }}></div>
                        <Table<User> columns={columns} dataSource={dataSource} pagination={{ position: ["bottomLeft"] }} scroll={{ x: 1350 }} rowClassName={(record, index) => (record.tags[0] == "Pending" ? "rowClassName1" : "rowClassName2")} />
                        <Checkbox className="check">View All Issues</Checkbox>
                        <Checkbox className="checkk" onChange={clearFilters}>Clear All Filters</Checkbox>

                    </TabPane>
                </Tabs>
            </div>
        </>

    );
}



export default App;
