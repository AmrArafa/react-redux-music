import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GenreList from "./components/GenreList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/genre/:genreId?/artists" component={GenreList} />
        <Route path="/" component={GenreList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
