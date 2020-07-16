import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
  <Router>
    {/* switch덕분에 한번에 오직 하나의 Route만 render하게 된다 */}
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
      {/* Redirect -> 만약 일치하는 Route가 하나도 없다면 어느 페이지든 받아서 '/'로 보내주자 */}
      {/* 하지만 /tv/~~~~ 을 입력해준다면 /로 돌아오지 않는다 -> exact가 없기 때문에 */}
      {/* 다음에 구현할 때 필요하면 exact를 입력해주자 */}
    </Switch>
  </Router>
);
