import React, { useEffect } from 'react';
import {Container, Row, Col, Button} from "reactstrap";

import '../../Styles/Popup.css';

const PostViewPopup = (props) => {
  const {post, onClose} = props;

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  return (
    <div>
      <div className='overlay'>
        <div className='popup'>
          <div className='close-modal'>
            <button onClick={onClose}>
              <i className="ri-close-fill"></i>
            </button>
          </div>
          <h2>Popup Details</h2>
          <p><strong>User Id: </strong>{post.userId}</p>
          <p><strong>Title: </strong>{post.title}</p>
          <p><strong>Body: </strong>{post.body}</p>
        </div>
      </div> 
    </div>
  )
}

export default PostViewPopup
