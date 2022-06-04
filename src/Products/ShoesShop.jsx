import React, { Component } from 'react'
import data from './data.json'
import ProductList from './ProductList'
import Modal from './Modal'
import ProductsItem from './ProductsItem'
import Menu from './Menu'
export default class ShoesShop extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         selectedProduct: null,
      }
    }
    handleDetails=(product)=>{
        this.setState({selectedProduct: product})
    }
  render() {
    return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-4" style={{"margin-top":"300px"}}>
                <Menu/>
              </div>
              <div className="col-sm-8 border border-primary">
              <h3 className="text-center">ShoesShop</h3>
          <ProductList getData={this.handleDetails} products={data}/>
              </div>
          </div>
          <Modal productsDetails={this.state.selectedProduct} />
         
      </div>
    )
  }
}
