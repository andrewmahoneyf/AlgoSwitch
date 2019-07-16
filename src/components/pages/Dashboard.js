import React from 'react';
import * as routes from '../../constants/routes';
import { db } from '../../firebase';
import withAuthorization from '../withAuthorization';
import '../../styles/Dashboard.scss';


import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, Table,
} from 'reactstrap';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import PanelHeader from './dash_components/PanelHeader';
import Stats from './dash_components/Stats';
import CardCategory from './dash_components/CardCategory';
import Tasks from './dash_components/Tasks';

import {
    dashboardPanelChart,
    dashboardShippedProductsChart,
    dashboardAllProductsChart,
    dashboard24HoursPerformanceChart
} from '../variables/charts.jsx';

import { tasks } from '../variables/general.jsx';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current_user: null,
        };
    }

    componentDidMount() {
        if (db.getCurrentUser()) {
            db.getCurrentUser().then(doc => this.setState(() => ({ current_user: doc })))
        }
    }
    render() {
        const { current_user } = this.state;

        return (
            <section className="dashboard pt-4">
                <div>
                    <h2>Average Hashrate</h2>
                    <PanelHeader size="lg"
                        content={
                            <Line data={dashboardPanelChart.data} options={dashboardPanelChart.options} />
                        }
                    />
                    <div className="content">
                        <Row className="my-5">
                            <Col xs={12} md={4}>
                                <Card className="card-chart">
                                    <CardHeader>
                                        <CardCategory>Hash Dificulty</CardCategory>
                                        <CardTitle>Current Coin: ZEC</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="chart-area">
                                            <Line data={dashboardShippedProductsChart.data} options={dashboardShippedProductsChart.options} />
                                        </div>
                                    </CardBody>
                                    <CardFooter>
                                        <Stats>
                                            {[
                                                { i: "now-ui-icons arrows-1_refresh-69", t: "Past 12 Hours" }
                                            ]}
                                        </Stats>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col xs={12} md={4}>
                                <Card className="card-chart">
                                    <CardHeader>
                                        <CardCategory>2018 Revenue</CardCategory>
                                        <CardTitle>All Coins</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="chart-area">
                                            <Line data={dashboardAllProductsChart.data} options={dashboardAllProductsChart.options} />
                                        </div>
                                    </CardBody>
                                    <CardFooter>
                                        <Stats>
                                            {[
                                                { i: "now-ui-icons arrows-1_refresh-69", t: "Just Updated" }
                                            ]}
                                        </Stats>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col xs={12} md={4}>
                                <Card className="card-chart">
                                    <CardHeader>
                                        <CardCategory>Payouts</CardCategory>
                                        <CardTitle>24 Hour Performance</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="chart-area">
                                            <Bar data={dashboard24HoursPerformanceChart.data} options={dashboard24HoursPerformanceChart.options} />
                                        </div>
                                    </CardBody>
                                    <CardFooter>
                                        <Stats>
                                            {[
                                                { i: "now-ui-icons ui-2_time-alarm", t: "Past Day" }
                                            ]}
                                        </Stats>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col xs={12} md={6}>
                                <Card className="card-tasks">
                                    <CardHeader>
                                        <CardTitle>Tasks</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Tasks tasks={tasks} />
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <Stats>
                                            {[
                                                { i: "now-ui-icons loader_refresh spin", t: "Updated 3 minutes ago" }
                                            ]}
                                        </Stats>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col xs={12} md={6}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Pool Stats</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Table responsive>
                                            <thead className=" text-primary">
                                                <tr>
                                                    <th>Hashrate</th>
                                                    <th>Blocks mined (24hrs)</th>
                                                    <th>Miners</th>
                                                    <th className="text-right">ZEC price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>59349.5 KSol/s</td>
                                                    <td>62</td>
                                                    <td>13,452</td>
                                                    <td className="text-right">$266.57</td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                        <CardHeader>
                                            <CardTitle>Top 5 Miners</CardTitle>
                                        </CardHeader>
                                        <Table responsive>
                                            <thead className="text-primary">
                                                <tr>
                                                    <th>Rank</th>
                                                    <th>Miner</th>
                                                    <th>Hashrate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>t1fJuHWrfcWnYMYyP9VAF96vRnvND2NziMG</td>
                                                    <td className="text-right">936,375.3 Sol/s</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>t1VwDJV6g75FdCQYbTHdunAnZVAdYvd7Q2d</td>
                                                    <td className="text-right">740,735.0 Sol/s</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>t1hA6mmAuPSjuHHuVScNMomy5ei28tPFoAq</td>
                                                    <td className="text-right">596,486.4 Sol/s</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>t1M9nQgFZbQ1eDcf6dBD4gx61Pw7ko2QiTQ</td>
                                                    <td className="text-right">334,609.9 Sol/s</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>t1PpTxB82F5BLXT2X42L8bAgqJFEJGwvz1f</td>
                                                    <td className="text-right">315,072.9 Sol/s</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section >
        );
    }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Dashboard);