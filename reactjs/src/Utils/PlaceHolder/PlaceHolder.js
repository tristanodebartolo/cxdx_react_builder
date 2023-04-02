import React from 'react';
// style
import './PlaceHolder.scss'
// compents
const PlaceHolder = (props) => {
  const { type, number, design } = props;
  const personneRow = (index) => {
    return <div key={index} className='cx-placeholder'>
      <div className='cx-placeholder-i'></div>
      <div className='cx-placeholder-i'></div>
      <div className='cx-placeholder-i'></div>
    </div>
  }
};
export default PlaceHolder;
