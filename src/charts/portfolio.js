
import { Card, CardBody } from 'reactstrap'



import Chart from 'react-apexcharts'

const Portfolio = () => {

    const options = {
        chart: {
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: { show: false },
        comparedResult: [2, -3, 8],
        labels: ['Mutal Funds', 'ETF'],
        stroke: { width: 0 },
        colors: ['#1313ed', '#ed9d13'],
        grid: {
            padding: {
                right: -20,
                bottom: -8,
                left: -10
            }
        },
        plotOptions: {
            pie: {
                startAngle: -10,
                donut: {
                    labels: {
                        show: true,
                        name: {
                            offsetY: 15
                        },
                        value: {
                            offsetY: -15,
                            formatter(val) {
                                return `${parseInt(val)} %`
                            }
                        },
                        total: {
                            show: true,
                            offsetY: 15,
                            label: 'Total'
                            // formatter() {
                            //   return '53%'
                            // }
                        }
                    }
                }
            }
        },
        responsive: [
            {
                breakpoint: 1325,
                options: {
                    chart: {
                        height: 150
                    }
                }
            },
            {
                breakpoint: 1200,
                options: {
                    chart: {
                        height: 150
                    }
                }
            },
            {
                breakpoint: 1065,
                options: {
                    chart: {
                        height: 150
                    }
                }
            },
            {
                breakpoint: 992,
                options: {
                    chart: {
                        height: 150
                    }
                }
            }
        ]
    }
    return (
        <div>
            <Card  className='m-3'>
                <CardBody>
                    <h5>Portfolio</h5>

                    <Chart options={options} series={[72.62, 27.38]} type='donut' height={100} />
                    <div className='d-flex align-items-center me-2 d-inline'>
                        <span className="bg-primary p-2 m-1"></span>-Mutual Funds
                        
                    </div>
                    <div className='d-flex align-items-center d-inline'>
                         <span className="bg-warning p-2 m-1"></span>-ETFs
                    </div>

                </CardBody>
            </Card>
        </div>
    )
}

export default Portfolio