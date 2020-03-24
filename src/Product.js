import React from 'react'
import { Table, Button } from "react-bootstrap";

    const Product = ({ products }) => {
      return (
        <Table striped bordered hover style={{ marginTop: '20px' }}>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {products.map((product, i) => (
                <tr key={i+1}>
                    <td>{i+1}</td>
                    <td>{ product.prdNm._text }</td>
                    <td>{ product.selPrc._text }</td>
                    <td><Button variant="primary">Update </Button></td>
                </tr>
            ))}
            </tbody>
            </Table>
      )
    };

    export default Product;