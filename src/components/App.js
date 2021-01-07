import React from "react";
import { CatList } from "./CatList";
import { Switch, Route } from "react-router-dom";
import { UploadCat } from "./UploadCat";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Container style={{ padding: "2rem" }}>
      <Switch>
        <Route path="/upload">
          <UploadCat />
        </Route>
        <Route path="/">
          <CatList />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
