import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import { Link, useNavigate, useLocation, NavLink} from "react-router-dom";

import Title from "../Components/Title/Title";

import '../Styles/Dashboard.css';
import {Outlet} from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
    <Container>
      <Row>
        <Col lg='12'> 
          <div className='title'>
            <Title title="Dashboard"/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg='12'>
          <div className='btn_container'>
            <Button
            color="primary"
            outline
            className='subcription_btn'>
              <Link to={'/dashboard/subcription'}>
                Subcription
              </Link>
            </Button>
            
            <Button
            color="primary"
            outline
            className='revenue_btn'>
              <Link to={'/dashboard/revenue'}>
                Revenue
              </Link>
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg='12'>
          <Outlet/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Dashboard
