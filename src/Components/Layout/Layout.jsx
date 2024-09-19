import React from 'react';
import { Container, Row, Col } from "reactstrap";

import Navigator from "../Navigator/Navigator";
import Routers from "../../Routers/Routers";

import "../../Styles/Layout.css";

const Layout = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg='3'>
            <div className='navbar'>
              <Navigator/>
            </div>
          </Col>
          <Col lg='9'>
            <div className='content'>
              <Routers/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Layout;
