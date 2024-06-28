import React, { useState, useEffect, useRef } from "react"
import { Row, Col, Card, Statistic, Tabs, Table } from "antd"
import * as d3 from "d3"
import "tailwindcss/tailwind.css"

const { TabPane } = Tabs

interface DataPoint {
    date: string
    amount: number
}

interface ProductRevenue {
    product: string
    revenue: number
}

interface SalesData {
    date: string
    quantity: number
}

interface InventoryData {
    product: string
    quantity: number
}

interface CustomerData {
    newCustomers: number
    returningCustomers: number
}

interface OrderData {
    orderId: string
    customer: string
    product: string
    price: number
    category: string
    status: string
}

interface MonthlyStatistics {
    date: string
    profit: number
    refunds: number
    expenses: number
}

const Dashboard: React.FC = () => {
    const [revenueData, setRevenueData] = useState<DataPoint[]>([])
    const [monthlyStatistics, setMonthlyStatistics] = useState<MonthlyStatistics[]>(
        [],
    )
    const [recentOrders, setRecentOrders] = useState<OrderData[]>([])
    const [topProducts, setTopProducts] = useState<ProductRevenue[]>([])
    const revenueChartRef = useRef<SVGSVGElement>(null)
    const monthlyStatisticsChartRef = useRef<SVGSVGElement>(null)
    const [customerData, setCustomerData] = useState<CustomerData | null>(null)
    const [orderData, setOrderData] = useState<OrderData | null>(null)
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (revenueData.length) {
            drawRevenueChart()
        }
        if (monthlyStatistics.length) {
            drawMonthlyStatisticsChart()
        }
    }, [revenueData, monthlyStatistics])

    const fetchData = async () => {
        const fakeRevenueData: DataPoint[] = [
            { date: "2023-06-01", amount: 100 },
            { date: "2023-06-02", amount: 200 },
            { date: "2023-06-03", amount: 300 },
            { date: "2023-06-04", amount: 150 },
            { date: "2023-06-05", amount: 250 },
        ]

        const fakeMonthlyStatistics: MonthlyStatistics[] = [
            { date: "2023-06-01", profit: 1000, refunds: 200, expenses: 500 },
            { date: "2023-06-02", profit: 1200, refunds: 250, expenses: 600 },
            { date: "2023-06-03", profit: 1300, refunds: 300, expenses: 700 },
            { date: "2023-06-04", profit: 1400, refunds: 350, expenses: 800 },
            { date: "2023-06-05", profit: 1500, refunds: 400, expenses: 900 },
        ]

        const fakeRecentOrders: OrderData[] = [
            {
                orderId: "12345",
                customer: "Alice",
                product: "Product A",
                price: 100,
                category: "Category 1",
                status: "Delivered",
            },
            {
                orderId: "12346",
                customer: "Bob",
                product: "Product B",
                price: 200,
                category: "Category 2",
                status: "Processing",
            },
            {
                orderId: "12347",
                customer: "Charlie",
                product: "Product C",
                price: 150,
                category: "Category 1",
                status: "Cancelled",
            },
        ]

        const fakeTopProducts: ProductRevenue[] = [
            { product: "Product A", revenue: 500 },
            { product: "Product B", revenue: 700 },
            { product: "Product C", revenue: 400 },
        ]
        const fakeCustomerData: CustomerData = {
            newCustomers: 20,
            returningCustomers: 30,
        }

        const fakeOrderData: OrderData = {
            totalOrders: 100,
            averageOrderValue: 250,
            status: {
                delivered: 60,
                processing: 30,
                cancelled: 10,
            },
        }
        setRevenueData(fakeRevenueData)
        setMonthlyStatistics(fakeMonthlyStatistics)
        setRecentOrders(fakeRecentOrders)
        setTopProducts(fakeTopProducts)
        setCustomerData(fakeCustomerData)
        setOrderData(fakeOrderData)
    }

    const drawRevenueChart = () => {
        const svg = d3
            .select(revenueChartRef.current)
            .attr("width", 600)
            .attr("height", 400)

        const margin = { top: 20, right: 30, bottom: 30, left: 40 }
        const width = 600 - margin.left - margin.right
        const height = 400 - margin.top - margin.bottom

        const x = d3
            .scaleBand()
            .domain(revenueData.map((d) => d.date))
            .range([margin.left, width - margin.right])
            .padding(0.1)

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(revenueData, (d) => d.amount) || 0])
            .nice()
            .range([height - margin.bottom, margin.top])

        svg.selectAll("*").remove()

        svg.append("g")
            .attr("fill", "#1f77b4")
            .selectAll("rect")
            .data(revenueData)
            .join("rect")
            .attr("x", (d) => x(d.date)!)
            .attr("y", (d) => y(d.amount))
            .attr("height", (d) => y(0) - y(d.amount))
            .attr("width", x.bandwidth())

        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x))

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y))
    }

    const drawMonthlyStatisticsChart = () => {
        const svg = d3
            .select(monthlyStatisticsChartRef.current)
            .attr("width", 600)
            .attr("height", 400)

        const margin = { top: 20, right: 30, bottom: 30, left: 40 }
        const width = 600 - margin.left - margin.right
        const height = 400 - margin.top - margin.bottom

        const x = d3
            .scaleBand()
            .domain(monthlyStatistics.map((d) => d.date))
            .range([margin.left, width - margin.right])
            .padding(0.1)

        const y = d3
            .scaleLinear()
            .domain([
                0,
                d3.max(monthlyStatistics, (d) =>
                    Math.max(d.profit, d.refunds, d.expenses),
                ) || 0,
            ])
            .nice()
            .range([height - margin.bottom, margin.top])

        const color = d3
            .scaleOrdinal()
            .domain(["profit", "refunds", "expenses"])
            .range(["#1f77b4", "#ff7f0e", "#2ca02c"])

        svg.selectAll("*").remove()

        const barGroups = svg
            .selectAll("g.bar-group")
            .data(monthlyStatistics)
            .join("g")
            .attr("class", "bar-group")
            .attr("transform", (d) => `translate(${x(d.date)})`)

        barGroups
            .append("rect")
            .attr("x", x.bandwidth() / 6)
            .attr("y", (d) => y(d.profit))
            .attr("width", x.bandwidth() / 3)
            .attr("height", (d) => y(0) - y(d.profit))
            .attr("fill", color("profit"))

        barGroups
            .append("rect")
            .attr("x", x.bandwidth() / 3 + x.bandwidth() / 6)
            .attr("y", (d) => y(d.refunds))
            .attr("width", x.bandwidth() / 3)
            .attr("height", (d) => y(0) - y(d.refunds))
            .attr("fill", color("refunds"))

        barGroups
            .append("rect")
            .attr("x", (2 * x.bandwidth()) / 3 + x.bandwidth() / 6)
            .attr("y", (d) => y(d.expenses))
            .attr("width", x.bandwidth() / 3)
            .attr("height", (d) => y(0) - y(d.expenses))
            .attr("fill", color("expenses"))

        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x))

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y))
    }

    const columns = [
        { title: "Order Id", dataIndex: "orderId", key: "orderId" },
        { title: "Customer", dataIndex: "customer", key: "customer" },
        { title: "Product", dataIndex: "product", key: "product" },
        { title: "Price", dataIndex: "price", key: "price" },
        { title: "Category", dataIndex: "category", key: "category" },
        { title: "Status", dataIndex: "status", key: "status" },
    ]

    return (
        <div className="statistics-page bg-gray-100 p-6">
            <Tabs defaultActiveKey="1" style={{ marginTop: 16 }}>
                <TabPane tab="Số lượng hàng bán" key="1">
                    <Row gutter={16}>
                        <Col span={6}>
                            <Card>
                                <Statistic
                                    title="Số lượng bán hôm nay"
                                    value={320}
                                />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card>
                                <Statistic
                                    title="Số lượng bán tuần này"
                                    value={1450}
                                />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card>
                                <Statistic
                                    title="Số lượng bán tháng này"
                                    value={5678}
                                />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card>
                                <Statistic
                                    title="Sản phẩm bán chạy nhất"
                                    value="Sản phẩm A"
                                />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>

                <TabPane tab="Quản lý tồn kho" key="2">
                    <Row gutter={16}>
                        <Col span={6}>
                            <Card>
                                <Statistic
                                    title="Số lượng tồn kho hiện tại"
                                    value={9876}
                                />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card>
                                <Statistic
                                    title="Sản phẩm tồn kho nhiều nhất"
                                    value="Sản phẩm B"
                                />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card>
                                <Statistic
                                    title="Sản phẩm tồn kho ít nhất"
                                    value="Sản phẩm C"
                                />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>

                <TabPane tab="Khách hàng" key="3">
                    <Row gutter={16}>
                        <Col span={12}>
                            <Card>
                                <Statistic
                                    title="Khách hàng mới"
                                    value={customerData?.newCustomers}
                                />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card>
                                <Statistic
                                    title="Khách hàng quay lại"
                                    value={customerData?.returningCustomers}
                                />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>

                <TabPane tab="Đơn hàng" key="4">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card>
                                <Statistic
                                    title="Tổng số đơn hàng"
                                    value={orderData?.totalOrders}
                                />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <Statistic
                                    title="Giá trị trung bình mỗi đơn hàng"
                                    value={orderData?.averageOrderValue}
                                />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <Statistic
                                    title="Đơn hàng đã giao"
                                    value={orderData?.status.delivered}
                                />
                            </Card>
                            <Card>
                                <Statistic
                                    title="Đơn hàng đang xử lý"
                                    value={orderData?.status.processing}
                                />
                            </Card>
                            <Card>
                                <Statistic
                                    title="Đơn hàng bị hủy"
                                    value={orderData?.status.cancelled}
                                />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="Total Sales" className="bg-white shadow-md">
                        <svg ref={revenueChartRef}></svg>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Monthly Statistics" className="bg-white shadow-md">
                        <svg ref={monthlyStatisticsChartRef}></svg>
                    </Card>
                </Col>
            </Row>

            <Card title="Recent Orders" className="mt-6 bg-white shadow-md">
                <Table dataSource={recentOrders} columns={columns} />
            </Card>

            <Card title="Top Products" className="mt-6 bg-white shadow-md">
                <Table
                    dataSource={topProducts}
                    columns={[
                        { title: "Product", dataIndex: "product", key: "product" },
                        { title: "Revenue", dataIndex: "revenue", key: "revenue" },
                    ]}
                />
            </Card>

            <Row gutter={16} className="mt-6">
                <Col span={12}>
                    <Card
                        title="Inventory Management"
                        className="bg-white shadow-md"
                    >
                        <p>Include inventory details and images here.</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Customer Data" className="bg-white shadow-md">
                        <p>Include customer data and images here.</p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard
