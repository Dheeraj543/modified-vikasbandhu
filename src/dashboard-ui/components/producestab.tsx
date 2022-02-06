import React from 'react';
// import './App.css';
import 'antd/dist/antd.css';
import { Tabs, Table, Row, Col, Typography, Space, Input, Select, Radio, Checkbox, DatePicker, Pagination } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { CaretDownOutlined } from "@ant-design/icons";
import { useEffect, useState, useRef } from "react";
import { Button } from 'antd/lib/radio';
const { TabPane } = Tabs;
const { Option } = Select;
interface User {
    id: string;
    category: string;
    produce: string;
    variety: string;
    grade: string;
    sellerid: string;
    quantity: string;
    dayssinceadded: Number;
    priceperquintal: string;
    estimatedvalue: string;
    latestapmcrate: string;
    more: any;
}
function onChange(date: any, dateString: any) {
    console.log(date, dateString);
}




const data: User[] = [

    {
        id: "T123",
        category: "Cereals",
        produce: "Rice",
        variety: "Sona Masuri",
        grade: "Good",
        sellerid: "5",
        quantity: "20",
        priceperquintal: "3500",
        estimatedvalue: "7500",
        latestapmcrate: "3400",
        dayssinceadded: 2,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "Cereals",
        produce: "Rice",
        variety: "Basmathi",
        grade: "Good",
        sellerid: "50",
        quantity: "20",
        priceperquintal: "3500",
        estimatedvalue: "7500",
        latestapmcrate: "3400",
        dayssinceadded: 2,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "Cereals",
        produce: "Rice",
        variety: "Basmathi",
        grade: "Good",
        sellerid: "65",
        quantity: "26",
        priceperquintal: "3500",
        estimatedvalue: "7500",
        latestapmcrate: "3400",
        dayssinceadded: 2,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "Cereals",
        produce: "Rice",
        variety: "Sona Masuri",
        grade: "Good",
        sellerid: "45",
        quantity: "20",
        priceperquintal: "3500",
        estimatedvalue: "7500",
        latestapmcrate: "3400",
        dayssinceadded: 2,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "Cereals",
        produce: "Rice",
        variety: "Sona Masuri",
        grade: "Good",
        sellerid: "53",
        quantity: "120",
        priceperquintal: "3500",
        estimatedvalue: "7500",
        latestapmcrate: "3400",
        dayssinceadded: 128,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "pulses",
        produce: "Rice",
        variety: "Sona Masuri",
        grade: "Good",
        sellerid: "85",
        quantity: "20",
        priceperquintal: "3500",
        estimatedvalue: "7500",
        latestapmcrate: "3400",
        dayssinceadded: 8,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "Cereals",
        produce: "wheat",
        variety: "Sona Masuri",
        grade: "Good",
        sellerid: "15",
        quantity: "20",
        priceperquintal: "3500",
        estimatedvalue: "7500",
        latestapmcrate: "3400",
        dayssinceadded: 60,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "Cereals",
        produce: "Rice",
        variety: "Sona Masuri",
        grade: "Good",
        sellerid: "49",
        quantity: "20",
        priceperquintal: "3500",
        estimatedvalue: "7500",
        latestapmcrate: "3400",
        dayssinceadded: 2,
        more: ["Terms n Conditions", "Additional Info"]
    },
    {
        id: "T88",
        category: "pulses",
        produce: "wheat",
        variety: "Sona Masuri",
        grade: "Good",
        sellerid: "5",
        quantity: "20",
        priceperquintal: "3500",
        estimatedvalue: "7500",
        latestapmcrate: "3400",
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
    const [sellerSearch, setSellerSearch] = useState('');
    const [quantitySearch, setQuantitySearch] = useState('');
    const [priceSearch, setPriceSearch] = useState('');
    const [estimatedSearch, setEstimatedSearch] = useState('');
    const [latestSearch, setLatestSearch] = useState('');
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
            return entry.sellerid.toLowerCase().includes(sellerSearch.toLowerCase())
        })
        filtered = filtered.filter(entry => {
            return entry.quantity.toLowerCase().includes(quantitySearch.toLowerCase())

        })
        filtered = filtered.filter(entry => {
            return entry.priceperquintal.toLowerCase().includes(priceSearch.toLowerCase())

        })
        filtered = filtered.filter(entry => {
            return entry.estimatedvalue.toLowerCase().includes(estimatedSearch.toLowerCase())

        })
        filtered = filtered.filter(entry => {
            return entry.latestapmcrate.toLowerCase().includes(latestSearch.toLowerCase())

        })
        console.log(daysSearch)
        if (daysSearch) {
            filtered = filtered.filter(entry => {
                return entry.dayssinceadded <= Number(daysSearch);
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
    }, [idSearch, categorySearch, produceSearch, varietySearch, gradeSearch, sellerSearch, quantitySearch, daysSearch, priceSearch, estimatedSearch, latestSearch])
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
    const FilterSeller = (
        <>
            <Typography.Paragraph>Buyer ID</Typography.Paragraph>
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
    const FilterPrice = (
        <>
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}>Price Per Quintal</Typography.Paragraph>
            <Input
                placeholder="Search"
                value={priceSearch}
                onChange={async e => {
                    const currValue = e.target.value;
                    setPriceSearch(currValue);
                    // let filtered = data.filter(entry => {
                    //   return entry.id.toLocaleLowerCase().includes(currValue.toLocaleLowerCase())
                    // })
                    // setDataSource(filtered);
                }}
            />
        </>
    );
    const Filterestimate = (
        <>
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}>Estimated Value</Typography.Paragraph>
            <Input
                placeholder="Search"
                value={estimatedSearch}
                onChange={async e => {
                    const currValue = e.target.value;
                    setEstimatedSearch(currValue);
                    // let filtered = data.filter(entry => {
                    //   return entry.id.toLocaleLowerCase().includes(currValue.toLocaleLowerCase())
                    // })
                    // setDataSource(filtered);
                }}
            />
        </>
    );
    const FilterApmc = (
        <>
            <Typography.Paragraph
                style={{
                    fontSize: "16px",
                }}>Latest APMC Rate</Typography.Paragraph>
            <Input
                placeholder="Search"
                value={latestSearch}
                onChange={async e => {
                    const currValue = e.target.value;
                    setLatestSearch(currValue);
                    // let filtered = data.filter(entry => {
                    //   return entry.id.toLocaleLowerCase().includes(currValue.toLocaleLowerCase())
                    // })
                    // setDataSource(filtered);
                }}
            />
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
            title: FilterSeller,
            dataIndex: "sellerid",
        },
        {
            title: Filterquantity,
            dataIndex: "quantity"
        },
        {
            title: FilterPrice,
            dataIndex: "priceperquintal",
        },
        {
            title: Filterestimate,
            dataIndex: "estimatedvalue",
        },
        {
            title: FilterApmc,
            dataIndex: "latestapmcrate",
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