import React, { Component } from 'react';
import TypeText from './TypeText/TypeText.js'
import Container from './Container/Container.js'
import Glyph from './Glyph/Glyph.js'
import Modal from './Modal/Modal.js'
import Plus100Logo from './Plus100Logo/Plus100Logo.js'
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {show:false};
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
      console.log("yeet")
      this.setState({
        show: true
        // blurStyle: `filter: blur(1.5rem);`
      });
    };

    hideModal = () => {
      this.setState({
        show: false
        // blurStyle: ''
      });
    };

  render() {

    // let blurStyle = {
    // };

    return (
      <div>
      <div onClick={this.showModal}>Show Modal</div>
      <Modal show={this.state.show} handleClose={this.hideModal}/>
      <Container>
        <div className="vertical-centered drop-shadow" style={this.state.blurStyle}>
            <div className="pill">
              <div className="name">Jeff Cardinal</div>
              <TypeText text="Software Engineer, Artist, Musician" />
            </div>
            <div className="flex-container">

              <Glyph backgroundColor="#00bfff" num="g1" link="https://github.com/jeffcardinal">
                <FontAwesomeIcon icon={faGithub} color="#fff" />
              </Glyph>

              <Glyph backgroundColor="#cb94ff" num="g2" link="https://twitter.com/vaperror">
                <FontAwesomeIcon icon={faTwitter} color="#fff" />
              </Glyph>

              <Glyph backgroundColor="#ff84be" num="g3" link="https://www.instagram.com/vaperror/">
                <FontAwesomeIcon icon={faInstagram} color="#fff" />
              </Glyph>

              <Plus100Logo  num="g4" link="https://plus100.bandcamp.com/"/>
            </div>
        </div>
      </Container>
      </div>
    );
  }
}

export default App;
