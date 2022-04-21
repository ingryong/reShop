import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";
import shoesData from "./assets/data/data.js";

import { Link, Route, Switch } from "react-router-dom";

import Detail from "./components/Detail.js";

function App() {
  let [shoes] = useState(shoesData);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">RSHOP</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/detail">Detail</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <div className="jumbotron background">
            <h1 className="display-4">20% Season off</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <button className="btn btn-primary btn-lg">Learn more</button>
          </div>
          <div className="container">
            <Card shoes={shoes} />
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때 보여줄 것</div>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  return (
    <div className="row">
      {props.shoes.map(function (data, i) {
        return (
          <div className="col-md-4" key={i}>
            <Link to={"/detail/" + data.id}>
              <img className="w-100" src={data.img} alt="shopList" />
              <h4>{data.title}</h4>
              <p>{data.content}</p>
              <p>{data.price}원</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default App;
