import React, { useEffect, useRef, useState } from "react";
import { Container, Col, Row, Image } from 'react-bootstrap';
import '../../routes/dashboard/dashboard.css'
import calenderimgone from '../../assets/images/calendaronee.svg'
import calenderimgtwo from '../../assets/images/calendartwo.svg'
import calenderimgthree from '../../assets/images/calendarthree.svg'
import resubmission from '../../assets/images/resubmission.svg'
import rejected from '../../assets/images/rejected.svg'
import approved from '../../assets/images/approved.svg'
import submitted from '../../assets/images/submitted.svg'
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CanvasJSReact from '../../assets/chart/canvasjs.react';
import * as IosIcons from 'react-icons/io';
import { Chart, Tooltip, CategoryScale, LinearScale, Title } from 'chart.js';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;



const chartConfig2 = {
    type: "doughnut",
    data: {
        labels: [
            "Open Leads",
            "Won Leads",
            "Lost Leads",
        ],
        datasets: [
            {
                data: [15, 25, 60],
                backgroundColor: [
                    "rgb(230, 89, 38)",
                    "rgb(41, 241, 41)",
                    "#117EEA",
                ],
                borderColor: [
                    "rgb(230, 89, 38)",
                    "rgb(41, 241, 41)",
                    "#117EEA",
                ],
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 70,
        tooltips: {
            custom: function (tooltip) {
                if (!tooltip) return;
                // disable displaying the color box;
                tooltip.displayColors = false;
            },
            backgroundColor: "#FFF",
            borderColor: "rgba(0, 0, 0, 0.09)",
            borderWidth: 1,
            bodyFontColor: "rgba(0, 0, 0, 1)",
            bodyAlign: "center",
            bodyFontSize: 14,
            bodyFontStyle: 500,
        },
        legend: {
            align: "center",
            position: "bottom",
            display: true,
            labels: {
                boxWidth: 10,
                padding: 15,
                fontColor: "#373737",
            },
        },
        centerText: {
            display: true,
            text: "280"
        }

    },
};

const chartConfig4 = {
    type: "doughnut",
    data: {
        labels: [
            "Open Leads",
            "Won Leads",
            "Lost Leads",
        ],
        datasets: [
            {
                data: [60, 100, 240],
                backgroundColor: [
                    "rgb(230, 89, 38)",
                    "rgb(41, 241, 41)",
                    "#117EEA",
                ],
                borderColor: [
                    "rgb(230, 89, 38)",
                    "rgb(41, 241, 41)",
                    "#117EEA",
                ],
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 70,
        tooltips: {
            custom: function (tooltip) {
                if (!tooltip) return;
                // disable displaying the color box;
                tooltip.displayColors = false;
            },
            backgroundColor: "#FFF",
            borderColor: "rgba(0, 0, 0, 0.09)",
            borderWidth: 1,
            bodyFontColor: "rgba(0, 0, 0, 1)",
            bodyAlign: "center",
            bodyFontSize: 14,
            bodyFontStyle: 500,
        },
        legend: {
            align: "center",
            position: "bottom",
            display: true,
            labels: {
                boxWidth: 10,
                padding: 15,
                fontColor: "#373737",
            },
        },
        centerText: {
            display: true,
            text: "280"
        }

    },
};


const chartConfig = {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [

            {
                label: "Requests",
                backgroundColor: "rgb(255, 0, 102)",
                borderColor: "rgb(255, 0, 102)",
                pointBorderColor: "rgb(255, 0, 102)",
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 4,
                pointBackgroundColor: "#FFF",
                data: [250, 300, 150, 200, 150, 80, 300, 300],
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        bezierCurve: false,
        elements: {
            line: {
                tension: 0,
            },
        },
        scales: {
            xAxes: [
                {
                    gridLines: { color: "rgba(0, 0, 0, 0)" },
                    barPercentage: 0.4
                },
            ],
            yAxes: [
                {
                    ticks: { beginAtZero: true },
                    gridLines: { color: "rgba(244, 244, 244, 1)" },
                },
            ],
        },

        tooltips: {
            custom: function (tooltip) {
                if (!tooltip) return;
                // disable displaying the color box;
                tooltip.displayColors = false;
            },
            callbacks: {
                // use label callback to return the desired label
                label: function (tooltipItem, data) {
                    return tooltipItem.yLabel;
                },
                // remove title
                title: function (tooltipItem, data) {
                    return;
                },
            },
            backgroundColor: "#FFF",
            borderColor: "rgba(0, 0, 0, 0.09)",
            borderWidth: 1,
            bodyFontColor: "rgba(0, 0, 0, 1)",
            bodyAlign: "center",
            bodyFontSize: 14,
            bodyFontStyle: 500,
        },
        legend: {
            align: "end",
            display: false,
            labels: {
                boxWidth: 12,
                fontColor: "#A4A7B0",
            },
        },
    },
};


const chartConfig5 = {
    type: "bar",
    data: {
        labels: ["Walk In", "Test Drive", "Booking", "Closed As Won", "Closed As Lost"],
        datasets: [

            {
                label: "Requests",
                backgroundColor: "blue",
                pointBorderColor: "rgb(255, 0, 102)",
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 4,
                pointBackgroundColor: "#FFF",
                data: [250, 300, 150, 200, 150],
                backgroundColor: ["blue", "purple", "skyblue", "green", "rgb(230, 89, 38)"],
            },
        ],
    },
    options: {
        scaleShowLabels: false,
        responsive: true,
        maintainAspectRatio: false,
        bezierCurve: false,
        elements: {
            line: {
                tension: 0,
            },
        },
        scales: {
            xAxes: [
                {
                    display: true,
                    gridLines: { color: "white" },
                    barPercentage: 0.4
                },
            ],
            yAxes: [
                {
                    display: false,
                    ticks: { beginAtZero: true },
                    gridLines: { color: "white" },
                },
            ],
        },

        tooltips: {
            custom: function (tooltip) {
                if (!tooltip) return;
                // disable displaying the color box;
                tooltip.displayColors = false;
            },
            callbacks: {
                // use label callback to return the desired label
                label: function (tooltipItem, data) {
                    return tooltipItem.yLabel;
                },
                // remove title
                title: function (tooltipItem, data) {
                    return;
                },
            },
            backgroundColor: "#FFF",
            borderColor: "rgba(0, 0, 0, 0.09)",
            borderWidth: 1,
            bodyFontColor: "rgba(0, 0, 0, 1)",
            bodyAlign: "center",
            bodyFontSize: 14,
            bodyFontStyle: 500,
        },
        legend: {
            align: "end",
            display: false,
            labels: {
                boxWidth: 12,
                fontColor: "#A4A7B0",
            },
        },
    },
};


const chartConfig3 = {
    type: "bar",
    data: {
        labels: ["Walk In", "Test Drive", "Booking", "Closed As Won", "Closed As Lost"],
        datasets: [

            {
                label: "Requests",
                backgroundColor: "blue",
                pointBorderColor: "rgb(255, 0, 102)",
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 4,
                pointBackgroundColor: "#FFF",
                data: [250, 300, 150, 200, 150],
                backgroundColor: ["blue", "purple", "skyblue", "green", "rgb(230, 89, 38)"],
            },
        ],
    },
    options: {
        scaleShowLabels: false,
        responsive: true,
        maintainAspectRatio: false,
        bezierCurve: false,
        elements: {
            line: {
                tension: 0,
            },
        },
        scales: {
            xAxes: [
                {
                    display: true,
                    gridLines: { color: "white" },
                    barPercentage: 0.4
                },
            ],
            yAxes: [
                {
                    display: false,
                    ticks: { beginAtZero: true },
                    gridLines: { color: "white" },
                },
            ],
        },

        tooltips: {
            custom: function (tooltip) {
                if (!tooltip) return;
                // disable displaying the color box;
                tooltip.displayColors = false;
            },
            callbacks: {
                // use label callback to return the desired label
                label: function (tooltipItem, data) {
                    return tooltipItem.yLabel;
                },
                // remove title
                title: function (tooltipItem, data) {
                    return;
                },
            },
            backgroundColor: "#FFF",
            borderColor: "rgba(0, 0, 0, 0.09)",
            borderWidth: 1,
            bodyFontColor: "rgba(0, 0, 0, 1)",
            bodyAlign: "center",
            bodyFontSize: 14,
            bodyFontStyle: 500,
        },
        legend: {
            align: "end",
            labels: {
                boxWidth: 12,
                fontColor: "#A4A7B0",
            },
        },
    },
};




const BorderLinearProgressone = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#5289C9',
    },
}))(LinearProgress);
const BorderLinearProgresstwo = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#2862FF',
    },
}))(LinearProgress);
const BorderLinearProgressthree = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#FF6A81',
    },
}))(LinearProgress);
function DashboardComponent() {

    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const chartContainer2 = useRef(null);
    const [chartInstance2, setChartInstance2] = useState(null);
    const chartContainer3 = useRef(null);
    const [chartInstance3, setChartInstance3] = useState(null);
    const chartContainer4 = useRef(null);
    const [chartInstance4, setChartInstance4] = useState(null);
    const chartContainer5 = useRef(null);
    const [chartInstance5, setChartInstance5] = useState(null);
    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const newChartInstance = new Chart(chartContainer.current, chartConfig);
            setChartInstance(newChartInstance);
        }
        if (chartContainer2 && chartContainer2.current) {
            const newChartInstance2 = new Chart(
                chartContainer2.current,
                chartConfig2
            );
            setChartInstance2(newChartInstance2);
        }
        if (chartContainer3 && chartContainer3.current) {
            const newChartInstance3 = new Chart(
                chartContainer3.current,
                chartConfig3
            );
            setChartInstance2(newChartInstance3);
        }
        if (chartContainer4 && chartContainer4.current) {
            const newChartInstance4 = new Chart(
                chartContainer4.current,
                chartConfig4
            );
            setChartInstance2(newChartInstance4);
        }
        if (chartContainer5 && chartContainer5.current) {
            const newChartInstance5 = new Chart(
                chartContainer5.current,
                chartConfig5
            );
            setChartInstance2(newChartInstance5);
        }

    }, [chartContainer, chartContainer2, chartContainer2, chartContainer4, chartContainer5]);



    return (
        <div>
            <div class="flex-container">
                <div>
                    <div className="card bgcard">
                        <Row>
                            <Col md={4}>
                                <div className="whitecircle">
                                    <Image src={calenderimgone} className="image" />
                                </div>
                            </Col>
                            <Col md={8}>
                                <p className="cardheading">Today Sales<span className="spanheading"><b>4</b></span></p>

                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <div className="card bgcard">
                        <Row>
                            <Col md={4}>
                                <div className="whitecircle">
                                    <Image src={calenderimgone} className="image" />
                                </div>
                            </Col>
                            <Col md={8}>
                                <p className="cardheading">Weekly Sales<span className="spanheading"><b>10</b></span></p>

                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <div className="card bgcard">
                        <Row>
                            <Col md={4}>
                                <div className="whitecircle">
                                    <Image src={calenderimgone} className="image" />
                                </div>
                            </Col>
                            <Col md={8}>
                                <p className="cardheading">Monthly Sales<span className="spanheading"><b>25</b></span></p>

                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            {/* <Container>
                <Row>
                    <Col md={4}>

                        <div className="card bgcard">
                            <Row>
                                <Col md={4}>
                                    <div className="whitecircle">
                                        <Image src={calenderimgone} className="image" />
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <p className="cardheading">Today Sales<span className="spanheading"><b>4</b></span></p>

                                </Col>
                            </Row>

                        </div>
                    </Col>
                    <Col md={4}>
                        <div class="card">
                            <div class="row cardheight">
                                <div class="col-md-4 secondcolumn">
                                    <div className="whitecircle">
                                        <Image src={calenderimgtwo} className="image" />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <p className="cardheading">Weekly Sales<span className="spanheading"><b>10</b></span></p>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div class="card">
                            <div class="row cardheight">
                                <div class="col-md-4 thirdcolumn">
                                    <div className="whitecircle">
                                        <Image src={calenderimgthree} className="image" />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <p className="cardheading">Monthly Sales<span className="spanheading"><b>25</b></span></p>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
 */}

            <Container fluid className="containerpadding">
                <Row>
                    <Col md={8}>
                        <div class="card analysiscard">
                            <Row>
                                <Col md={7}>
                                    <h3 className="h3heading"><b>Lead Analysis</b></h3>
                                    <p className="leadsubheading">This Month</p><hr id="hrline" />
                                    <Row>
                                        <Col md={6}>
                                            <p>100</p>
                                        </Col>
                                        <Col md={6} className="textright">
                                            <p>Total Leads</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <BorderLinearProgressone variant="determinate" value={80} />
                                        </Col>
                                    </Row>
                                    <Row className="rowpadding">
                                        <Col md={6}>
                                            <p>80</p>
                                        </Col>
                                        <Col md={6} className="textright">
                                            <p>Total Walk Ins</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <BorderLinearProgresstwo variant="determinate" value={70} />
                                        </Col>
                                    </Row>
                                    <Row className="rowpadding">
                                        <Col md={6}>
                                            <p>20</p>
                                        </Col>
                                        <Col md={6} className="textright">
                                            <p>Total HO Leads</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <BorderLinearProgressthree variant="determinate" value={40} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={5}>
                                    <h3 className="h3heading"><b>Lead Status</b></h3>
                                    <div className="chartdonughtcontainer">
                                        <canvas ref={chartContainer2} />
                                    </div>

                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <h3 className="h3heading"><b>Lead Stages</b></h3>
                                    <div className="chartlinecontainer">
                                        <canvas ref={chartContainer3} />
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </Col>
                    <Col md={4}>
                        <div class="card analysiscard">
                            <Row>
                                <Col md={12}>
                                    <h3 className="h3heading"><b>Scheme Claims</b></h3>
                                    <p className="leadsubheading">Status</p><hr id="hrline" />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <div className="resubmissioncircle">
                                        <Image src={resubmission} className="imagescheme" />
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <p>Available for resubmission</p>
                                    <p><b>10</b></p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <div className="rejectedcircle">
                                        <Image src={rejected} className="imagescheme" />
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <p>Rejected</p>
                                    <p><b>10</b></p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <div className="approvedcircle">
                                        <Image src={approved} className="imagescheme" />
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <p>Approved</p>
                                    <p><b>90</b></p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <div className="submittedcircle">
                                        <Image src={submitted} className="imagescheme" />
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <p>Submitted</p>
                                    <p><b>100</b></p>
                                </Col>
                            </Row>
                        </div><br /><br />

                        <div class="card z-depth-2 activitycard">
                            <div class="card-image">
                                <div class="card-content">
                                    <button type="button" class="btn btn-default btn-floating"> <IosIcons.IoIosArrowRoundForward className="rightarrow" /></button>
                                    <p><b>Total Call Activities</b></p>
                                    <p className="paragraphheading">Today</p>
                                    <h3><b>30</b></h3>
                                </div>
                            </div>
                        </div><br />
                        <div class="card z-depth-2 activitycard">
                            <div class="card-image">
                                <div class="card-content">
                                    <button type="button" class="btn btn-default btn-floating"> <IosIcons.IoIosArrowRoundForward className="rightarrow" /></button>
                                    <p><b>Total Call Activities</b></p>
                                    <p className="paragraphheading">This Month</p>
                                    <h3><b>700</b></h3>
                                </div>
                            </div>
                        </div><br />
                        <div class="card z-depth-2 activitycard">
                            <div class="card-image">
                                <div class="card-content">
                                    <button type="button" class="btn btn-default btn-floating"> <IosIcons.IoIosArrowRoundForward className="rightarrow" /></button>
                                    <p><b>Total Call Activities</b></p>
                                    <p className="paragraphheading">This Year</p>
                                    <h3><b>1600</b></h3>
                                </div>
                            </div>
                        </div>

                    </Col>

                </Row>
            </Container>

            <Container fluid className="containerpadding">
                <Row>
                    <Col md={12}>
                        <div class="card analysiscard">
                            <Row>
                                <Col md={7}>
                                    <h3 className="h3heading"><b>YTD Open Leads Analysis</b></h3>
                                    <p className="leadsubheading">This Month</p><hr id="hrline" />
                                    <Row>
                                        <Col md={6}>
                                            <p>400</p>
                                        </Col>
                                        <Col md={6} className="textright">
                                            <p>Total Leads</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <BorderLinearProgressone variant="determinate" value={80} />
                                        </Col>
                                    </Row>
                                    <Row className="rowpadding">
                                        <Col md={6}>
                                            <p>320</p>
                                        </Col>
                                        <Col md={6} className="textright">
                                            <p>Total Walk Ins</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <BorderLinearProgresstwo variant="determinate" value={70} />
                                        </Col>
                                    </Row>
                                    <Row className="rowpadding">
                                        <Col md={6}>
                                            <p>80</p>
                                        </Col>
                                        <Col md={6} className="textright">
                                            <p>Total HO Leads</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <BorderLinearProgressthree variant="determinate" value={40} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={5}>
                                    <h3 className="h3heading"><b>Lead Status</b></h3>

                                    <div className="chartdonughtcontainer">
                                        <canvas ref={chartContainer4} />
                                    </div>



                                </Col>
                            </Row>
                            <Row className="rowpadding">
                                <Col md={6}>
                                    <h3 className="h3heading"><b>Lead Stages</b></h3>


                                    <div className="chartlinecontainerpadding">
                                        <canvas ref={chartContainer5} />
                                    </div>



                                </Col>
                                <Col md={6}>
                                    <h3 className="h3heading"><b>Total Orders</b></h3>
                                    <p className="leadsubheading">This Year</p><hr id="hrline" />
                                    <div className="chartlinecontainerorder">
                                        <canvas ref={chartContainer} />
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </Col>

                </Row>
            </Container>



        </div >
    );
}

export default DashboardComponent;
