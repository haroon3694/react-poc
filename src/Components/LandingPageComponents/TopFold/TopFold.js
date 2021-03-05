import React from 'react';

import './TopFold.scss'

import backgroundImg from '../../../assets/images/pattern.png'

const TopFold = (props) => {

  return (
    <div className="top-fold-component" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>  
    </div>
  );
}

export default TopFold;