import React from 'react'
import Portfolio from './portfolio'
import Ishares from './ishares'
import { Col, Row } from 'reactstrap'
const Index = () => {
  return (
    <div>
        <Row>
        <Col lg='8'>
        <Ishares/>
        </Col>
        <Col lg='4'>
        <Portfolio/>
        </Col>
        </Row>
       
    </div>
  )
}

export default Index