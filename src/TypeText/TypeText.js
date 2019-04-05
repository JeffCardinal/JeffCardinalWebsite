import React, { Component } from 'react';
import './TypeText.css';

class TypeText extends Component {

  constructor(props) {
    super();
    this.state = {
      text: ''
    }
  }

  typeWriter(fullText, n) {
    if (n < (fullText.length)) {
      let subText = fullText.substring(0, n+1);
      this.setState({ text: subText });
      n++;
      setTimeout( () => { this.typeWriter(fullText, n) }, 50 );
    }
  }

  componentDidMount() {
    setTimeout( () => { this.typeWriter(this.props.text, 0) }, 1000 );
  }

  render(props) {
    return (
      <div>
        <div className="Description" id="demo">{this.state.text}</div>
      </div>
    );
  }
}

export default TypeText;
