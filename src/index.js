import React from 'react';

import BtnSt from './styles.module.css'


export const MagixButton = (props) => {
  return (
    <button
      className={`${BtnSt.mxbtn} ${BtnSt[props.family] || 'default'} ${
        props.inverse && BtnSt["mxbtn--inverse"]
      } ${props.round && BtnSt["mxbtn--round"] } ${props.circle && BtnSt["mxbtn--circle"]}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
