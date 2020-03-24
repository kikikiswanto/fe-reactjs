import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import { Navbar, Container } from "react-bootstrap";

class App extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then((data) => {
      console.log(data.Products.product);
      
      this.setState({ products:  data.Products.product })
    })
    .catch(console.log)
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
          <img src={logo} className="App-logo" alt="logo" />
            React Bootstrap
          </Navbar.Brand>
        </Navbar>
        <Container>
            <Product products={this.state.products} />
        </Container>
      </>
    );
  }
}



export default App;
