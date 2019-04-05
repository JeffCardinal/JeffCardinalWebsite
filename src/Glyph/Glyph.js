import React, { Component } from 'react';
import './Glyph.css';

const glyph = (props) => {
    const clazz = props.num + " glyph"
    console.log(props.num)
    return (
      <a href={props.link}>
        <div className={clazz} style={{backgroundColor: props.backgroundColor }}>
          {props.children}
        </div>
      </a>
    );
}

export default glyph;
