import React, { Component } from "react";
import ReactDOM from "react-dom";
import { FaBusSimple } from "react-icons/fa6";
class ReactEventHandling extends Component {
  constructor() {
    super();
    this.state = { content: "Welcome" };
  }

  changethevalue = () => {
    this.setState({ content: "Love You" });
  };
  changethevalue1 = () => {
    this.setState({ content: "Hate You" });
  };
  render() {
    return (
      <div>
        <h1>{this.state.content}</h1>
        <button type="button"  onDoubleClick={this.changethevalue1} onClick={this.changethevalue}>
          Login<FaBusSimple />
        </button>
      </div>
    );
  }
}

ReactDOM.render(<ReactEventHandling />, document.getElementById('root'));

// class Reactprops extends Component{
//   render(){
//     return <h1>Welcome  {this.props.Name23}</h1>
//   }
// }
//   ReactDom.render(<Reactprops Name23="Lavanya"/>,document.getElementById('root'));

