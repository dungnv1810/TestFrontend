import React, { useState } from 'react';
import { Container, Row, Col} from "reactstrap";
import { Input } from "antd";

import Title from '../Components/Title/Title';
import "../Styles/Setting.css";

const Settings = () => {
  const [settings, setSettings] = useState({
    title: "",
    email: "",
    backgroundColor: "#ffffff",
    activeDate: "",
  });

  const [showSaveButton, setShowSaveButton] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
    setShowSaveButton(true);
  }

  const handleOnclickSave = () => {
    console.log('Setting ===', settings)
    setShowSaveButton(false);
  }

  return (
    <div>
      <Container>
        <Row>
          <Col lg='12'>
            <div className='title'>
              <Title title='Settings'/>
            </div>
          </Col>
        </Row>
        <Row className='container_setting'>
          <Col lg='6'>
              {/* Title input */}
              <div className='title_input'>
                <label htmlFor='title'>Title: </label>
                <Input
                  className='inputStyle'
                  type='text'
                  id='title'
                  value={settings.title}
                  onChange={handleChange}
                />
              </div>
          </Col>
          <Col lg='6'>
            {/* Email input */}
            <div className='email_input'>
                <label htmlFor='email'>Email:</label>
                <Input
                  className='inputStyle'
                  type='email'
                  id='email'
                  value={settings.email}
                  onChange={handleChange}
                />
              </div>
          </Col>
        </Row>
        <Row className='container_setting'>
          <Col lg='6'>
            {/* Background Color Picker */}
            <div className='bgColor_input'>
                <label htmlFor='bgColor'>Background Color:</label>
                <div className='bgColor'>
                  <Input
                    className='inputStyle'
                    type='text'
                    value={settings.backgroundColor}
                  />
                    <Input
                      className='select_bgColor'
                      type='color'
                      id='bgColor'
                      value={settings.backgroundColor}
                      onChange={handleChange}
                    />
                </div>
              </div>
          </Col>
          <Col lg='6'>
            {/* Active Date Picker */} 
            <div className='activeDate_input'>
                <label htmlFor="activeDate">Active date:</label>
                <Input
                  className='inputStyle'
                  type="date"
                  id="activeDate"
                  value={settings.activeDate}
                  onChange={handleChange}
                />
              </div>
          </Col>
        </Row>
        <Row>
          <Col lg='12'>
            {
              showSaveButton && (
                <div className='btn_save'>
                  <button
                    className=''
                    onClick={handleOnclickSave}
                  >
                    Save
                  </button>
                </div>
              )
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Settings
