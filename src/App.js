import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [
            {
                price: 999,
                title: 'Phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
                id: 1
            },
            {
                price: 999,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                id: 2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
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
getCount = ()=>{
  const{products} = this.state;
  let count = 0;
  products.forEach((product)=>{
    count+=product.qty
  })
  return count;
}
getTotal = ()=>{
  const {products} = this.state;
  let total = 0;
  products.forEach((product)=>{
    total+= (product.qty*product.price)
  });
  return total;
}
render(){
  const {products} = this.state;
  return (
    <div className="App">
      <Navbar count = {this.getCount()}/>
      <Cart
          products = {products}
          increaseQuantity={this.handleIncreaseQuantity}
          decreaseQuantity = {this.handleDecreaseQuantity}
          deleteQuantity = {this.handleDeleteQuantity} 
      />
      <div style={{padding:10, fontSize: 20}}>TOTAL : {this.getTotal()}</div>
    </div>
  );
}
}


export default App;
