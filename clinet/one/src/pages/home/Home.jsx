import React from "react";
import List from "../../component/list/List";
import Item from "../../component/Item/Item";
import { Route } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <List />
        </div>
        <div className="col-md-9">
          <Route path="/home/description/:id">
            <Item />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default Home;
