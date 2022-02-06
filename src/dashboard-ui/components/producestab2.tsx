import 'antd/dist/antd.css';
import { Tabs, Table, Row, Col, Typography, Space, Input, Select, Radio, Checkbox, DatePicker, Pagination } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState, useRef } from "react";
import { Button } from 'antd/lib/radio';
const { Option } = Select;
interface User {
    id: string;
    category: string;
    produce: string;
    variety: string;
    grade: string;
    buyerid: string;
    quantity: string;
    delivery: string;
    dayssinceadded: Number;
    deliveryDate: Date;
    more: any;
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
        id: "T123",
        category: "Cereals",
        produce: "Rice",
        variety: "Sona Masuri",
        grade: "Good",
        buyerid: "5",
        quantity: "20",
        deliveryDate: new Date(2021, 11, 10),
        delivery: convertDateToDDMMYYYY(new Date(2021, 11, 10)),
        dayssinceadded: 2,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "Cereals",
        produce: "Rice",
        variety: "Basmathi",
        grade: "Good",
        buyerid: "50",
        quantity: "20",
        deliveryDate: new Date(2021, 11, 10),
        delivery: convertDateToDDMMYYYY(new Date(2021, 11, 10)),
        dayssinceadded: 2,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "Cereals",
        produce: "Rice",
        variety: "Basmathi",
        grade: "Good",
        buyerid: "65",
        quantity: "26",
        deliveryDate: new Date(2021, 11, 10),
        delivery: convertDateToDDMMYYYY(new Date(2021, 11, 10)),
        dayssinceadded: 2,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "Cereals",
        produce: "Rice",
        variety: "Sona Masuri",
        grade: "Good",
        buyerid: "45",
        quantity: "20",
        deliveryDate: new Date(2021, 11, 10),
        delivery: convertDateToDDMMYYYY(new Date(2021, 11, 10)),
        dayssinceadded: 2,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "Cereals",
        produce: "Rice",
        variety: "Sona Masuri",
        grade: "Good",
        buyerid: "53",
        quantity: "120",
        deliveryDate: new Date(2021, 11, 10),
        delivery: convertDateToDDMMYYYY(new Date(2021, 11, 10)),
        dayssinceadded: 128,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "pulses",
        produce: "Rice",
        variety: "Sona Masuri",
        grade: "Good",
        buyerid: "85",
        quantity: "20",
        deliveryDate: new Date(2021, 11, 10),
        delivery: convertDateToDDMMYYYY(new Date(2021, 11, 10)),
        dayssinceadded: 8,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "Cereals",
        produce: "wheat",
        variety: "Sona Masuri",
        grade: "Good",
        buyerid: "15",
        quantity: "20",
        deliveryDate: new Date(2021, 11, 10),
        delivery: convertDateToDDMMYYYY(new Date(2021, 11, 10)),
        dayssinceadded: 60,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "Cereals",
        produce: "Rice",
        variety: "Sona Masuri",
        grade: "Good",
        buyerid: "49",
        quantity: "20",
        deliveryDate: new Date(2021, 11, 10),
        delivery: convertDateToDDMMYYYY(new Date(2021, 11, 10)),
        dayssinceadded: 2,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "pulses",
        produce: "wheat",
        variety: "Sona Masuri",
        grade: "Good",
        buyerid: "5",
        quantity: "20",
        deliveryDate: new Date(2021, 11, 10),
        delivery: convertDateToDDMMYYYY(new Date(2021, 11, 10)),
        dayssinceadded: 30,
        more: ["Terms n Conditions", "Additional Info"]
    },


];
function App() {
    var filteredData = data;
    const [dataSource, setDataSource] = useState(filteredData);
    const [idSearch, setIdSearch] = useState('');
    const [categorySearch, setCategorySearch] = useState('');
    const [produceSearch, setProduceSearch] = useState('');
    const [varietySearch, setVarietySearch] = useState('');
    const [gradeSearch, setGradeSearch] = useState('');
    const [buyerSearch, setBuyerSearch] = useState('');
    const [quantitySearch, setQuantitySearch] = useState('');
    const [deliverySearch, setDeliverySearch] = useState('');
    const [daysSearch, setDaysSearch] = useState('');
    const [dropDownOpen, setDropdownOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState('');

    const initialRender = useRef(true);

    const applyFilters = () => {
        let clonedData = [...data];

        let filtered = clonedData.filter(entry => {
            return entry.id.toLowerCase().includes(idSearch.toLowerCase())
        })
        if (categorySearch.length) {
            filtered = filtered.filter(entry => {
                return entry.category === categorySearch;
            })
        }
        if (produceSearch.length) {
            filtered = filtered.filter(entry => {
                return entry.produce === produceSearch;
            })
        }
        if (varietySearch.length) {
            filtered = filtered.filter(entry => {
                return entry.variety === varietySearch;
            })
        }
        if (gradeSearch.length) {
            filtered = filtered.filter(entry => {
                return entry.grade === gradeSearch;
            })
        }
        filtered = filtered.filter(entry => {
            return entry.buyerid.toLowerCase().includes(buyerSearch.toLowerCase())
        })
        filtered = filtered.filter(entry => {
            return entry.quantity.toLowerCase().includes(quantitySearch.toLowerCase())

        })
        console.log(daysSearch)
        if (daysSearch) {
            filtered = filtered.filter(entry => {
                return entry.dayssinceadded <= Number(daysSearch);
            })
        }
        if (deliverySearch.length) {
            const endDate = new Date();
            let startDate: any = null;
            console.log(deliverySearch)
            switch (deliverySearch) {
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
    }, [idSearch, categorySearch, produceSearch, varietySearch, gradeSearch, buyerSearch, quantitySearch, daysSearch, deliverySearch])
    const FilterId = (
        <>
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}>ID</Typography.Paragraph>
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
    const filtercategory = (
        <>
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}>Category</Typography.Paragraph>
            <Select
                defaultValue=""
                value={categorySearch}
                style={{ width: 100 }}
                onDropdownVisibleChange={e => {
                    if (e) {
                        setDropdownOpen(true)
                        setActiveDropdown('category');
                    }
                }}
                open={dropDownOpen && activeDropdown === 'category'}
                dropdownRender={menu => {
                    return (
                        <div style={{ width: 300 }}>
                            {menu}
                            <div className="buttonsWrapper">
                                <button onClick={async () => {
                                    await setCategorySearch('');
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
                onSelect={e => {
                    console.log(e, categorySearch)
                    if (categorySearch && e === categorySearch) {
                        setCategorySearch('');
                    } else {
                        setCategorySearch(e);
                    }

                    // setProduceSearch(currValue);
                    // filteredData = filteredData.filter(entry =>
                    //   entry.produce.includes(currValue)
                    // );
                    // setDataSource(filteredData);
                }}>
                <Option value="Cereals">Cereals</Option>
                <Option value="pulses">pulses</Option>
            </Select>
        </>
    );
    const filterproduce = (
        <>
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}>Produce</Typography.Paragraph>
            <Select
                defaultValue=""
                value={produceSearch}
                style={{ width: 100 }}
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
                onSelect={e => {
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
                <Option value="Rice">rice</Option>
                <Option value="wheat">wheat</Option>
            </Select>
        </>
    );
    const filtervariety = (
        <>
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}>Variety</Typography.Paragraph>
            <Select
                defaultValue=""
                value={varietySearch}
                style={{ width: 100 }}
                onDropdownVisibleChange={e => {
                    if (e) {
                        setDropdownOpen(true)
                        setActiveDropdown('variety');
                    }
                }}
                open={dropDownOpen && activeDropdown === 'variety'}
                dropdownRender={menu => {
                    return (
                        <div style={{ width: 300 }}>
                            {menu}
                            <div className="buttonsWrapper">
                                <button onClick={async () => {
                                    await setVarietySearch('');
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
                onSelect={e => {
                    console.log(e, varietySearch)
                    if (varietySearch && e === varietySearch) {
                        setVarietySearch('');
                    } else {
                        setVarietySearch(e);
                    }

                    // setProduceSearch(currValue);
                    // filteredData = filteredData.filter(entry =>
                    //   entry.produce.includes(currValue)
                    // );
                    // setDataSource(filteredData);
                }}>
                <Option value="Sona Masuri">Sona Masuri</Option>
                <Option value="Basmathi">Basmathi</Option>
            </Select>
        </>
    );
    const filtergrade = (
        <>
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}>Grade</Typography.Paragraph>
            <Select
                defaultValue=""
                value={gradeSearch}
                style={{ width: 100 }}
                onDropdownVisibleChange={e => {
                    if (e) {
                        setDropdownOpen(true)
                        setActiveDropdown('grade');
                    }
                }}
                open={dropDownOpen && activeDropdown === 'grade'}
                dropdownRender={menu => {
                    return (
                        <div style={{ width: 300 }}>
                            {menu}
                            <div className="buttonsWrapper">
                                <button onClick={async () => {
                                    await setGradeSearch('');
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
                onSelect={e => {
                    console.log(e, gradeSearch)
                    if (gradeSearch && e === gradeSearch) {
                        setGradeSearch('');
                    } else {
                        setGradeSearch(e);
                    }

                    // setProduceSearch(currValue);
                    // filteredData = filteredData.filter(entry =>
                    //   entry.produce.includes(currValue)
                    // );
                    // setDataSource(filteredData);
                }}>
                <Option value="Good">good</Option>
                <Option value="bad">bad</Option>
            </Select>
        </>
    );
    const FilterBuyer = (
        <>
            <Typography.Paragraph>Buyer ID</Typography.Paragraph>
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
    const Filterquantity = (
        <>
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}>Quantity</Typography.Paragraph>
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
    const filterdays = (
        <>

            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}

            >Days Since Added</Typography.Paragraph>
            <Select
                value={daysSearch}
                defaultValue=""
                style={{ width: 160 }}
                onDropdownVisibleChange={e => {
                    if (e) {
                        setDropdownOpen(true)
                        setActiveDropdown('daysSearch');
                    }
                }}
                open={dropDownOpen && activeDropdown === 'daysSearch'}
                dropdownRender={menu => {
                    return (
                        <div style={{ width: 200 }}>
                            {menu}
                            <div style={{ marginTop: 16, }}>
                                <button onClick={() => {
                                    setDropdownOpen(false)
                                    applyFilters()
                                }}>Apply Filter</button>
                            </div>
                        </div>
                    )
                }}
                onChange={e => {
                    const currValue = e;
                    setDaysSearch(currValue);
                    // filteredData = filteredData.filter(entry =>
                    //   entry.dayssinceadded.includes(currValue)
                    // );
                    // setDataSource(filteredData);
                }}>
                <Option value={1}><Radio>today</Radio></Option>
                <Option value={7}>past week</Option>
                <Option value={31}>this month</Option>
                <Option value={92}>this quarter</Option>
                <Option value={365}>this year</Option>
                <Button>jhgf</Button>
            </Select>

        </>
    );
    const filterdelivery = (
        <>
            <Typography.Paragraph>Asking Delivery Date</Typography.Paragraph>
            <Select value={deliverySearch} defaultValue="" style={{ width: 160 }} onChange={e => {
                const currValue = e;
                setDeliverySearch(currValue);
                // filteredData = filteredData.filter(entry =>
                //   entry.dayssinceadded.includes(currValue)
                // );
                // setDataSource(filteredData);
            }}>
                <Option value="1"><Radio value="1" checked={"1" === deliverySearch}>Today</Radio></Option>
                <Option value="2"><Radio value="1" checked={"2" === deliverySearch}>past 7 days</Radio> </Option>
                <Option value="3"><Radio value="1" checked={"3" === deliverySearch}>This Month</Radio> </Option>
                <Option value="4"><Radio value="1" checked={"4" === deliverySearch}>This Quarter</Radio> </Option>
                <Option value="5"><Radio value="1" checked={"5" === deliverySearch}>This year</Radio> </Option>
                <Option value="6"><Radio value="1" checked={"6" === deliverySearch}>Select Date</Radio></Option>
                <DatePicker open onChange={onChange} />
            </Select>
        </>
    );

    const columns: ColumnsType<User> = [
        {
            title: FilterId,
            dataIndex: "id",
        },

        {
            title: filtercategory,
            dataIndex: "category"
        },
        {
            title: filterproduce,
            dataIndex: "produce"
        },
        {
            title: filtervariety,
            dataIndex: "variety"
        },
        {
            title: filtergrade,
            dataIndex: "grade"
        },
        {
            title: FilterBuyer,
            dataIndex: "buyerid",
        },
        {
            title: Filterquantity,
            dataIndex: "quantity"
        },
        {
            title: filterdelivery,
            dataIndex: "delivery",
        },
        {
            title: filterdays,
            dataIndex: "dayssinceadded",
        },
        {
            title: "More",
            dataIndex: "more",
        },


    ];
    return (
        <div className="ongoing-actions">
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={{ position: ["bottomLeft"] }}
                scroll={{ x: 1350 }}

            />
        </div>

    );
}
export default App; 