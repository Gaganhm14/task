
import React ,{useState, useEffect} from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Progress, Button } from 'reactstrap'


const Ishares = () => {
    const Mymarketvalue = [
        {Scrip: 'AADR', Quantity:'430',price:'50.30',AvgCost:'$41.75', InvestedAmount:'$17952.07',portfolioValue:'22.06',Unrealized:'$3,676.93',Return:'20.48' },
        
        {Scrip: 'MFEM', Quantity:'210',price:'23.30',AvgCost:'$22.50', InvestedAmount:'$4,725.84',portfolioValue:'5.81',Unrealized:'$146.16',Return:'3.09' },
        {Scrip: 'JPEM', Quantity:'328',price:'52.30',AvgCost:'$56.70', InvestedAmount:'$18,597.60',portfolioValue:'22.86',Unrealized:'$1377.60',Return:'-7.41' },
        {Scrip: 'KEMQ', Quantity:'801',price:'20.30',AvgCost:'$22.24', InvestedAmount:'$17811.04',portfolioValue:'21.89',Unrealized:'$1,470.64',Return:'-8.26' },
        {Scrip: 'KLDW', Quantity:'523',price:'32.30',AvgCost:'$26.32', InvestedAmount:'$13,765.36',portfolioValue:'16.92',Unrealized:'$3,441.34',Return:'25.00' },
        {Scrip: 'KOIN', Quantity:'335',price:'25.30',AvgCost:'$25.40', InvestedAmount:'$8509.00',portfolioValue:'10.46',Unrealized:'$-',Return:'0.00' },
    
    ]
    const [marketvalue,setMaketValue]= useState(Mymarketvalue)
    return (
        <div>

        {
            marketvalue.map((m)=>(
            <Card className='m-3'>
                <CardBody>

                    <Row className='d-flex align-items-sm-center' >
                        <Col  lg='2' sm='12' >
                            <CardText tag='h2'>{m.Scrip}</CardText>
                            <CardText tag='h4' className='text-info'>{m.InvestedAmount}</CardText>
                        </Col>
                        <Col lg='2' sm='12 align-self-center' >
                            <CardText tag='h4'><strong className='text-success'>iShares</strong> <br/></CardText><strong>S&P 500 Index</strong>
                            <CardText tag='h6'>US Equity</CardText>
                        </Col>
                        <Col lg='2' sm='12'  >
                            <CardText tag='h6'>Quantity <span><strong>{m.Quantity}</strong></span> </CardText>
                            <CardText tag='h6'>Avg.Cost  <span><strong>{m.AvgCost}</strong></span></CardText>
                            <CardText tag='h6'>invested Amt <span><strong>{m.InvestedAmount}</strong></span></CardText>
                        </Col>
                        <Col lg='2' sm='12'>
                            <CardText tag='h6'><strong>Market value  <span><strong>${m.price*m.Quantity}</strong></span></strong></CardText>
                            <CardText tag='h6'>% of portfolio value <span><strong>{m.portfolioValue}%</strong></span></CardText>
                            <Progress multi>
                                <Progress bar striped className='progress-bar-success' color='success' sm='6' md='6' value={m.portfolioValue}>
                                </Progress>
                            </Progress>
                        </Col>
                        <Col lg='2' sm='12' >
                            <CardText tag='h6'>unrealizedf P/L <span><strong>{m.Unrealized}</strong></span></CardText>
                            <CardText tag='h6'>% return <span><strong>{m.Return}%</strong></span></CardText>
                            <Progress multi>
                                {/* <Progress bar striped className='progress-bar-success' color='success'  value={m.Return}>
                                </Progress> */}
                                <Progress bar striped className='progress-bar-success' sm='6' color={m.Return>0?'success':'danger'} value={Math.abs(m.Return)}>
                                </Progress>
                            </Progress>
                        </Col>
                        <Col lg='2' sm='12' >
                            <Button color='warning' outline>BUY</Button><br/><br/>
                            <Button color='warning' outline>SELL</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            ))
        }


        </div>
    )
}

export default Ishares