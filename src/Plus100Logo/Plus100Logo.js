import React from 'react'
import Plus100LogoPill from './Plus100LogoPill.png'
import './Plus100Logo.css'

const Plus100Logo = ( props ) => {
    return(
      <a href={props.link}>
        <img src={Plus100LogoPill} />
      </a>
    )
}
export default Plus100Logo;
