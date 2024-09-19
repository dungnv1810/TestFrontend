import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button } from "reactstrap";
import axios from "axios";

import Title from '../Components/Title/Title';
import Popup from "../Components/Popup/Popup";

import "../Styles/PostsManagement.css";

const PostsManagement = () => {

  const [listUser, setListUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTitle, setSearchTitle] = useState('');

  const callApi = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
  }

  const getList = async() => {
    try {
      setIsLoading(true);
      const responsive = await callApi();
      if(responsive.status === 200){
        setIsLoading(false);
        setListUser(responsive.data);
      }else{
        setIsLoading(false);
      }
    } catch (error) {
      console.log('error ===', error);
    }
  } 

  useEffect(() => {
    getList();
  },[]);

  const handleOpenViewUserPopup = (user) => {
    setSelectedUser(user);
    setIsPopupOpen(true);
  }

  const handleCloseViewUserPopup = () => {
    setIsPopupOpen(false);
    setSelectedUser(null);
  }

  const filteredUsers = listUser.filter(user =>
    user.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div>
      <Container>
        <Row>
          <Col lg='12'>
            <div className='title'>
              <Title title='Users Management'/>
            </div>
          </Col>
        </Row>
        <Row className='pageSearch'>
          <Col lg='6'>
            <div className='showPage'>
              <span className='show'>Show</span>
              <select
                className='select' 
                value={itemsPerPage} 
                onChange={handleItemsPerPageChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span className=''>result per page</span>
            </div>
          </Col>
          <Col lg='6'>
            <div className='search-container'>
              <input
                type='text'
                placeholder='Filter in records...'
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg='12'>
            <div>
              {
                isLoading ? (
                  <h2>Loading...</h2>
                ) : (
                  <Table striped>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        currentUsers.map((item, index) => {
                          return(
                            <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.userId}</td>
                              <td>{item.title}</td>
                              <td>
                                <Button
                                  onClick={() => handleOpenViewUserPopup(item)}
                                  color="primary">
                                  <i className="ri-eye-line"></i>
                                </Button>
                                {isPopupOpen && (
                                  <Popup post={selectedUser} onClose={handleCloseViewUserPopup}/>
                                )}
                              </td>
                            </tr>
                          )
                        })
                      }
                      {
                        currentUsers.length === 0 && (
                          <tr>
                            <td colSpan='4'>Không có dữ liệu để hiển thị</td>
                          </tr>
                        )
                      }
                    </tbody>
                  </Table>
                )
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PostsManagement
