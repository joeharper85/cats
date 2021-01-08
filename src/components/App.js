import React, { useState } from "react";
import { CatList } from "./CatList";
import { Switch, Route, NavLink } from "react-router-dom";
import { UploadCat } from "./UploadCat";
import { Container, Menu, Message } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setError } from "../actions";

const App = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("");

  const dispatch = useDispatch();

  const errorMessage = useSelector((state) => state.error);

  console.log(errorMessage);

  return (
    <div>
      <Menu fixed="top" inverted>
        <Menu.Item header>Rate My Cat</Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/"
          name="list"
          active={activeMenuItem === "list"}
          onClick={() => setActiveMenuItem("list")}
        >
          List
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/upload"
          name="upload"
          active={activeMenuItem === "upload"}
          onClick={() => setActiveMenuItem("upload")}
        >
          Upload
        </Menu.Item>
      </Menu>
      <Container style={{ padding: "2rem", marginTop: "4rem" }}>
        {errorMessage.length > 0 && (
          <Message
            onDismiss={() => dispatch(setError(""))}
            negative
            header="Error!"
            content={errorMessage}
          />
        )}
        <Switch>
          <Route path="/upload">
            <UploadCat />
          </Route>
          <Route path="/">
            <CatList />
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
