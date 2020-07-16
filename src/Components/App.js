import React, { Component } from "react";
import Router from "Components/Router";
import Header from "Components/Header";

class App extends Component {
  render() {
    return (
      // 밑에 있는 것은 fragment라고 부른다 내가 원하는 만큼 component를 return 할 수 있도록 해준다.
      <>
        <Header />
        <Router />
      </>
    );
  }
}

export default App;
