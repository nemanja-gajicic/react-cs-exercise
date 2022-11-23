import React from "react";
import Title from "./components/Title";
import "../css/styles.scss";

interface IProps {}

interface IState { 
  version : string
}

class App extends React.Component< IProps,IState>{
  constructor(props:any) { 
    super(props);
    this.state = {version: React.version}
  }

  render() {
    return (
      <div className="page-wrap">
        <Title>React version: {this.state.version}</Title>
      </div>
    )
  }

}

export default App;