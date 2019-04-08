import React, { Component } from 'react';
import './Glyph.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const glyph = (props) => {
    return (
      <a href={props.link}>
        <div className="glyph" id={props.id}>
          {props.children}
        </div>
      </a>
    );
}

export default glyph;
