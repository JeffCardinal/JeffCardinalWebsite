import React from 'react'
import './Container.css';

class Container extends React.Component {

  constructor(props) {
      super(props);
      this.handleLoad = this.handleLoad.bind(this);
   }

   componentDidMount() {
      window.addEventListener('load', this.handleLoad);
   }

   handleLoad() {
     let i = 0
     React.Children.forEach(this.props.children, child => {
       // child.props.className += blur

     })
   }

    render() {

      const children = this.props.children

      return (
        <div className="container">
          {children}
        </div>
      )
    }
}
export default Container;
