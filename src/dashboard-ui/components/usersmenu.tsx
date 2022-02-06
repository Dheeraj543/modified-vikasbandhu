import React from 'react';
import 'antd/dist/antd.css';
import { Tabs, Table, Typography, Space, Select, Input, Checkbox } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState, useRef } from "react";
// import './matchesmenu.scss';

const { TabPane } = Tabs;
const { Option } = Select;
interface User {
    id: string;
    tags: any;
    produce: string;
    issues: string;
    quantity: string;
    sids: any;
    buyer: any;
    hasIssue: boolean;
    /*
    tinfo: any;
    addcost: string;
    */
}


const data: User[] = [
    {
        id: "T12345",
        tags: "Ramesh Gowda",
        produce: "Independent",
        issues: "",
        quantity: "Address line",
        sids: ["Produce List", "Matches", "Transactions", "ID Card"],
        buyer: ["67890", "Mandya"],
        hasIssue: true,
        /*
        tinfo: ["-"],
        addcost: "-"
        */
    },
    {
        id: "T12345",
        tags: "Ramesh Gowda",
        produce: "FPO",
        issues: "View",
        quantity: "Address line",
        sids: ["Produce List", "Matches", "Transactions", "ID Card"],
        buyer: ["67890", "Mandya"],
        hasIssue: true
        /*
        tinfo: ["-"],
        addcost: "-"
        */
    },
    {
        id: "T12345",
        tags: "Ramesh Gowda",
        produce: "Mill",
        issues: "View",
        quantity: "Address line",
        sids: ["Produce List", "Matches", "Transactions", "ID Card"],
        buyer: ["67890", "Mandya"],
        hasIssue: true
        /*
        tinfo: ["-"],
        addcost: "Transportation",
        */

    },
    {
        id: "T12345",
        tags: "Ramesh Gowda",
        produce: "Produce-Verity-Grade",
        issues: "View",
        quantity: "Address line",
        sids: ["Produce List", "Matches", "Transactions", "ID Card"],
        buyer: ["67890", "Mandya"],
        hasIssue: true
        /*
        tinfo: ["Transportation", "Details"],
        addcost: "-",
        */
    },
];
function App() {
    var filteredData = data;
    const [dataSource, setDataSource] = useState(filteredData);
    const [idSearch, setIdSearch] = useState('');
    const [produceSearch, setProduceSearch] = useState('');
    const [quantitySearch, setQuantitySearch] = useState('');
    const [tagSearch, setTagSearch] = useState('');
    const [buyerSearch, setBuyerSearch] = useState('');
    const [dropDownOpen, setDropdownOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState('');

    const initialRender = useRef(true);

    const applyFilters = () => {
        let clonedData = [...data];

        let filtered = clonedData.filter(entry => {
            return entry.id.toLowerCase().includes(idSearch.toLowerCase())
        })

        filtered = filtered.filter(entry => {
            return entry.tags.toLowerCase().includes(tagSearch.toLowerCase())
        })
        if (produceSearch.length) {
            filtered = filtered.filter(entry => {
                return entry.produce === produceSearch;
            })
        }
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
    }, [idSearch, quantitySearch, tagSearch, buyerSearch])
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
            <Typography.Paragraph>Name</Typography.Paragraph>
            <Input
                placeholder="Search"
                value={tagSearch}
                onChange={e => {
                    const currValue = e.target.value;
                    setTagSearch(currValue);
                    // filteredData = filteredData.filter(entry =>
                    //   entry.sids.includes(currValue)
                    // );
                    // setDataSource(filteredData);
                }}
            />
        </>
    );
    const selectfilter = (
        <>
            <Typography.Paragraph>Type</Typography.Paragraph>
            <Select
                defaultValue=""
                value={produceSearch}
                style={{ width: 200 }}
                onDropdownVisibleChange={e => {
                    if (e) {
                        setDropdownOpen(true)
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
                <Option value="Produce-Verity-Grade">Produce-Verity-Grade</Option>
                <Option value="independent">independent</Option>
                <Option value="FPO">FPO</Option>
                <Option value="Mill">Mill</Option>
            </Select>
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
            <Typography.Paragraph>Contact</Typography.Paragraph>
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
    const columns: ColumnsType<User> = [
        {
            title: FilterByNameInput,
            dataIndex: "id",
        },
        {
            title: FilterBystatusInput,
            dataIndex: "tags"
        },
        {
            title: selectfilter,
            dataIndex: "produce"
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
            title: Filterquantity,
            dataIndex: "quantity"
        },

        {
            title: "More Information",
            dataIndex: "sids",
            render: (sids: string) => (
                <>
                    <div className="info">
                        <a key={sids}>
                            {sids[0]}
                        </a> |
                        <a key={sids}>
                            {sids[1]}
                        </a> |
                        <a key={sids}>
                            {sids[2]}
                        </a> |
                        <a key={sids}>
                            {sids[3]}
                        </a>
                    </div>
                </>

            )
        },
        {
            title: "Issues",
            dataIndex: "issues",
            render: (i) => (
                <>
                    <div className="info">
                        <a key={i}>
                            {i}
                        </a>
                    </div>
                </>)
        }
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
    return (
        <div className='match card-container'>
            <Typography.Title level={4} className="title">Users</Typography.Title>
            <Space> </Space>
            <Tabs type="card" className="card" >
                <TabPane tab="Seller" key="1">
                    <div style={{ marginBottom: "25px" }}></div>
                    <Table<User> columns={columns} dataSource={dataSource} pagination={{ position: ["bottomLeft"] }} scroll={{ x: 1350 }} />
                    <Checkbox className="check">View All Issues</Checkbox>
                </TabPane>
                <TabPane tab="Buyer" key="2">
                    <div style={{ marginBottom: "25px" }}></div>
                    <Table<User> columns={columns} dataSource={dataSource} pagination={{ position: ["bottomLeft"] }} scroll={{ x: 1350 }} />
                    <Checkbox className="check">View All Issues</Checkbox>
                </TabPane>
            </Tabs>
        </div>
    );
}
export default App;
