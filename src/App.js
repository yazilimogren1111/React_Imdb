import { Movie } from "./Movie";
import { MovieDetails } from "./MovieDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/detail/:id" component={MovieDetails} />
        <Route path="/hahahay" component={About} />
        <Route path="/" component={Movie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
