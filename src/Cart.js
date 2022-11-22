import React from "react";
import CartItem from "./CartItem";


class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 3
                }
                
            ]
        }
    }
    handleIncreaseQuantity =(product)=>{
        const {products} = this.state;
        const ind = products.indexOf(product);
        products[ind].qty+=1;
        this.setState({
            products
        })
    }
    handleDecreaseQuantity= (product)=>{
        const {products} = this.state;
        const ind = products.indexOf(product);
        if (products[ind].qty>0){
            products[ind].qty-=1
        
    }
    this.setState({
        products
    })
        
       
    }
   handleDeleteQuantity = (id)=>{
    const{products} = this.state;
    const items = products.filter
            ((item)=>item.id!==id);
        this.setState({
            products:items
        })
   }
    render(){
        const products = this.state.products;
        return(
            <div className="cart">
                {
                    products.map((product)=>{
                        return <CartItem 
                                    product={product} 
                                    key={product.id} 
                                    increaseQuantity={this.handleIncreaseQuantity}
                                    decreaseQuantity = {this.handleDecreaseQuantity}
                                    deleteQuantity = {this.handleDeleteQuantity}
                                />
                    })
                }
            </div>
        );
    }
  }
export default Cart;