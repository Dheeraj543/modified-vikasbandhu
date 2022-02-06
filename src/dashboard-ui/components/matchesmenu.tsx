import React from 'react';
// import './App.css';
import 'antd/dist/antd.css';
import { Tabs, Table, Typography, Space, Input, Select, Radio, Checkbox, DatePicker } from 'antd';
import { Pagination } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { CaretDownOutlined } from "@ant-design/icons";
import { useEffect, useState, useRef } from "react";
import { Button } from 'antd';
// import './matchesmenu.scss';
const { TabPane } = Tabs;
const { Option } = Select;
interface User {
    id: string;
    tags: any;
    produce: string;
    tvalue: string;
    quantity: any;
    sids: string;
    buyer: any;
    dayssinceadded: Number;
    deliveryDate: Date;
    askingdeliverydate: string;
    /*
    tinfo: any;
    addcost: string;
    */
}
function onChange(date: any, dateString: any) {
    console.log(date, dateString);
}

const convertDateToDDMMYYYY = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dateOfMonth = date.getDate();
    return `${dateOfMonth}/${month}/${year}`;
}

const data: User[] = [
    {
        id: "T12345",
        tags: ["Pending", "Seller Accepted", "Details"],
        produce: "Produce-Variety-Grade",
        tvalue: "43,000",
        quantity: "10 qtl",
        sids: "12345",
        buyer: ["67890", "Mandya"],
        dayssinceadded: 78,
        deliveryDate: new Date(2008, 4, 28),
        askingdeliverydate: convertDateToDDMMYYYY(new Date(2020, 4, 28)),
        /*
        tinfo: ["-"],
        addcost: "-"
        */
    },
    {
        id: "1111",
        tags: ["Pending", "Seller Accepted", "Details"],
        produce: "produce-variety",
        tvalue: "42,000",
        quantity: "20 qtl",
        sids: "12345",
        buyer: ["67890", "Mandya"],
        dayssinceadded: 5,
        deliveryDate: new Date(2021, 10, 1),
        askingdeliverydate: convertDateToDDMMYYYY(new Date(2021, 10, 1)),
        /*
        tinfo: ["-"],
        addcost: "-"
        */
    },
    {
        id: "88",
        tags: ["On Going", "Produce Booked", "Details"],
        produce: "Produce-Variety-Grade",
        tvalue: "42,000",
        quantity: "20 qtl",
        sids: "77",
        buyer: ["67890", "Mandya"],
        dayssinceadded: 28,
        deliveryDate: new Date(2021, 6, 28),
        askingdeliverydate: convertDateToDDMMYYYY(new Date(2021, 6, 28)),
        /*
        tinfo: ["-"],
        addcost: "Transportation",
        */

    },
    {
        id: "88",
        tags: ["On Going", "Produce Booked", "Details"],
        produce: "Produce-Variety-Grade",
        tvalue: "41,000",
        quantity: "20 qtl",
        sids: "67",
        buyer: ["23890", "Nikhil"],
        dayssinceadded: 8,
        deliveryDate: new Date(2021, 11, 10),
        askingdeliverydate: convertDateToDDMMYYYY(new Date(2021, 11, 10)),
        /*
        tinfo: ["-"],
        addcost: "Transportation",
        */

    },
    {
        id: "1111",
        tags: ["On Going", "Transporter Assigned", "Details"],
        produce: "Produce-Variety-Grade",
        tvalue: "41,000",
        quantity: "20 qtl",
        sids: "84",
        buyer: ["67834", "Balu"],
        dayssinceadded: 2,
        deliveryDate: new Date(2021, 11, 11),
        askingdeliverydate: convertDateToDDMMYYYY(new Date(2021, 11, 11)),
        /*
        tinfo: ["Transportation", "Details"],
        addcost: "-",
        */
    },
];
const selectedFilters = {
    searchId: '',
    produceId: '',
};
function App(this: any) {
    var filteredData = data;
    const [dataSource, setDataSource] = useState(filteredData);
    const [idSearch, setIdSearch] = useState('');
    const [produceSearch, setProduceSearch] = useState('');
    const [transactionvalueSearch, setTransactionvalueSearch] = useState('');
    const [quantitySearch, setQuantitySearch] = useState('');
    const [sellerSearch, setSellerSearch] = useState('');
    const [buyerSearch, setBuyerSearch] = useState('');
    const [askedDelivery, setAskedDelivery] = useState('');
    const [daysAdded, setDaysAdded] = useState('');
    const [filters, setFilters] = useState(selectedFilters);
    const [dropDownOpen, setDropdownOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState('');

    const initialRender = useRef(true);

    const applyFilters = () => {
        let clonedData = [...data];

        let filtered = clonedData.filter(entry => {
            return entry.id.toLowerCase().includes(idSearch.toLowerCase())
        })

        filtered = filtered.filter(entry => {
            return entry.sids.toLowerCase().includes(sellerSearch.toLowerCase())
        })
        if (produceSearch.length) {
            filtered = filtered.filter(entry => {
                return entry.produce === produceSearch;
            })
        }
        filtered = filtered.filter(entry => {
            return entry.tvalue.toLowerCase().includes(transactionvalueSearch.toLowerCase())
        })
        filtered = filtered.filter(entry => {
            return entry.quantity.toLowerCase().includes(quantitySearch.toLowerCase())
        })
        filtered = filtered.filter(entry => {
            return entry.buyer.join().toLowerCase().includes(buyerSearch.toLowerCase())
        })
        console.log(daysAdded)
        if (daysAdded) {
            filtered = filtered.filter(entry => {
                return entry.dayssinceadded <= Number(daysAdded);
            })
        }

        if (askedDelivery.length) {
            const endDate = new Date();
            let startDate: any = null;
            console.log(askedDelivery)
            switch (askedDelivery) {
                case '1':
                    console.log('entered')
                    const tempDate = new Date();
                    tempDate.setDate(endDate.getDate() - 2);
                    startDate = tempDate;
                    break;
                case '2':
                    const tempDate1 = new Date();
                    tempDate1.setDate(endDate.getDate() - 7);
                    startDate = tempDate1;
                    break;
                case '3':
                    const tempDate2 = new Date();
                    tempDate2.setMonth(endDate.getMonth() - 1)
                    startDate = tempDate2;
                    break;
                case '4':
                    const tempDate3 = new Date();
                    tempDate3.setMonth(endDate.getMonth() - 3)
                    startDate = tempDate3;
                    break;
                case '5':
                    const tempDate4 = new Date();
                    tempDate4.setFullYear(endDate.getFullYear() - 1)
                    startDate = tempDate4;
                    break;
                default:
                    startDate = new Date();
            }
            filtered = filtered.filter(entry => {
                console.log(entry.deliveryDate.getFullYear(), endDate);
                return entry.deliveryDate >= startDate && entry.deliveryDate <= endDate;
            })

        }

        console.log(filtered, idSearch, clonedData)
        setDataSource([...filtered]);
    }

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }
        applyFilters();
    }, [idSearch, transactionvalueSearch, quantitySearch, sellerSearch, buyerSearch, askedDelivery])

    const FilterByNameInput = (
        <>
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}
            >
                ID</Typography.Paragraph>
            <Input
                placeholder="Search"
                value={idSearch}
                onChange={async (e: { target: { value: any; }; }) => {
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
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}
            >
                Seller ID</Typography.Paragraph>
            <Input
                placeholder="Search"
                value={sellerSearch}
                onChange={(e: { target: { value: any; }; }) => {
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
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}
            >
                Transaction Value</Typography.Paragraph>
            <Input
                placeholder="search"
                style={{ width: 160 }}
                value={transactionvalueSearch}
                onChange={(e: { target: { value: any; }; }) => {
                    const currValue = e.target.value;
                    setTransactionvalueSearch(currValue);
                }}
            />
        </>
    );
    const Filterquantity = (
        <>
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}
            >
                Quantity</Typography.Paragraph>
            <Input
                placeholder="Search"
                value={quantitySearch}
                onChange={(e: { target: { value: any; }; }) => {
                    const currValue = e.target.value;
                    setQuantitySearch(currValue);
                }}
            />
        </>
    );
    const FilterBuyer = (
        <>
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}
            >
                Buyer</Typography.Paragraph>
            <Input
                placeholder="Search"
                value={buyerSearch}
                onChange={(e: { target: { value: any; }; }) => {
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
    const selectfilter = (
        <>
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}
            >
                Produce</Typography.Paragraph>
            <Select placeholder="Select" value={produceSearch}
                style={{ width: 160 }}
                onDropdownVisibleChange={(e: any) => {
                    if (e) {
                        setDropdownOpen(true)
                        setActiveDropdown('produce');
                    }
                }}
                open={dropDownOpen && activeDropdown === 'produce'}
                dropdownRender={(menu: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
                    return (
                        <div style={{ width: 300 }}>
                            {menu}
                            <div className="buttonsWrapper">
                                <Button onClick={async () => {
                                    await setProduceSearch('');
                                    setDropdownOpen(false);
                                    applyFilters();
                                }}>
                                    Reset
                                </Button>
                                <Button type="primary" onClick={() => {
                                    setDropdownOpen(false)
                                    applyFilters()
                                }}>Apply Filter</Button>
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
                <Option value="produce-variety">Produce-Variety</Option>
            </Select>
        </>
    );
    const selectdays = (
        <>
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}>Days Since Added</Typography.Paragraph>
            <Select
                placeholder="Select"
                value={daysAdded}
                style={{ width: 170 }}
                onDropdownVisibleChange={(e: any) => {
                    if (e) {
                        setDropdownOpen(true)
                        setActiveDropdown('daysAdded');
                    }
                }}
                open={dropDownOpen && activeDropdown === 'daysAdded'}
                dropdownRender={(menu: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
                    return (
                        <div style={{ width: 280 }}>
                            {menu}
                            <div className="buttonsWrapper">
                                <Button onClick={async () => {
                                    await setDaysAdded('');
                                    setDropdownOpen(false);
                                    applyFilters();
                                }}>
                                    Reset
                                </Button>
                                <Button type="primary" onClick={() => {
                                    setDropdownOpen(false)
                                    applyFilters()
                                }}>Apply Filter</Button>
                            </div>
                        </div>
                    )
                }}
                onSelect={(e: React.SetStateAction<string>) => {
                    console.log(e, daysAdded)
                    if (daysAdded && e === daysAdded) {
                        setDaysAdded('');
                    } else {
                        setDaysAdded(e);
                    }
                    // filteredData = filteredData.filter(entry =>
                    //   entry.dayssinceadded.includes(currValue)
                    // );
                    // setDataSource(filteredData);
                }}>
                <option value="default" disabled hidden>
                    Select
                </option>
                <Option value={1}>today</Option>
                <Option value={7}>past week</Option>
                <Option value={31}>this month</Option>
                <Option value={92}>this quarter</Option>
                <Option value={365}>this year</Option>
                <Space direction="vertical" size={12}>
                    <DatePicker bordered={false} />

                </Space>,
            </Select>

        </>
    );

    const delivery = (
        <>
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}>Asking Delivery Date</Typography.Paragraph>
            <Select placeholder="Select" value={askedDelivery} style={{ width: 160 }} onChange={(e: any) => {
                const currValue = e;
                setAskedDelivery(currValue);
                // filteredData = filteredData.filter(entry =>
                //   entry.dayssinceadded.includes(currValue)
                // );
                // setDataSource(filteredData);
            }}>
                <Option value="1"><Radio value="1" checked={"1" === askedDelivery}>Today</Radio></Option>
                <Option value="2"><Radio value="1" checked={"2" === askedDelivery}>past 7 days</Radio> </Option>
                <Option value="3"><Radio value="1" checked={"3" === askedDelivery}>This Month</Radio> </Option>
                <Option value="4"><Radio value="1" checked={"4" === askedDelivery}>This Quarter</Radio> </Option>
                <Option value="5"><Radio value="1" checked={"5" === askedDelivery}>This year</Radio> </Option>
                <Option value="6"><Radio value="1" checked={"6" === askedDelivery}>Select Date</Radio></Option>
                <Space direction="vertical" size={12}>
                    <DatePicker bordered={false} />

                </Space>,
            </Select>
        </>
    );

    const columns = [
        {
            title: FilterByNameInput,
            dataIndex: "id",
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
            render: (buyer: any[]) => (
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
            title: selectdays,
            dataIndex: "dayssinceadded",
        },
        {
            title: delivery,
            dataIndex: "askingdeliverydate",
            key: "askingdeliverydate",
        }


    ];

    const clearFilters = () => {
        setIdSearch('');
        setProduceSearch('');
        setTransactionvalueSearch('');
        setQuantitySearch('');
        setSellerSearch('');
        setBuyerSearch('');
        setDaysAdded('');
        setAskedDelivery('');
        setDataSource([...data]);
    }

    return (
        <>
            <div className='match card-container'>
                <Typography.Title level={4} className="title">Matches</Typography.Title>
                <Space> </Space>
                <Tabs type="card" className="card" >
                    <TabPane tab="Seller Matches" key="1">
                        <div style={{ marginBottom: "25px" }}></div>
                        <Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 2, position: ["bottomLeft"] }} scroll={{ x: 1350 }} />
                        <Checkbox className="check">View All Issues</Checkbox>
                        <Checkbox className="checkk" onChange={clearFilters}>Clear All Filters</Checkbox>
                    </TabPane>
                    <TabPane tab="Buyer Matches" key="2">
                        <div style={{ marginBottom: "25px" }}></div>
                        <Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 2, position: ["bottomLeft"] }} scroll={{ x: 1350 }} />
                        <Checkbox className="check">View All Issues</Checkbox>
                        <Checkbox className="checkk" onChange={clearFilters}>Clear All Filters</Checkbox>
                    </TabPane>
                </Tabs>
            </div>
        </>

    );
}
export default App;