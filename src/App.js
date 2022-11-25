import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import {} from 'firebase/compat/firestore';
//import {} from 'firebase/firestore';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [],
        loading: true
    }
    this.db = firebase.firestore();
}
componentDidMount(){
  // firebase
  // .firestore()
  // .collection('products')
  // .get()
  // .then((snapshot)=>{
  //   console.log(snapshot);
  //   snapshot.docs.map((doc)=>{
  //     console.log(doc.data());
  //   });
  //   const products=snapshot.docs.map((doc)=>{
  //     const data = doc.data();
  //     data['id'] = doc.id;
  //     return data;
  //   });
  //   this.setState({
  //     products,
  //     loading: false
  //   });
  // })
  this.db
  .collection('products')
  .onSnapshot((snapshot)=>{
    console.log(snapshot);
    snapshot.docs.map((doc)=>{
      console.log(doc.data());
    });
    const products=snapshot.docs.map((doc)=>{
      const data = doc.data();
      data['id'] = doc.id;
      return data;
    });
    this.setState({
      products,
      loading: false
    });
  })
}
handleIncreaseQuantity =(product)=>{
  const {products} = this.state;
  const ind = products.indexOf(product);
//   products[ind].qty+=1
// this.setState({
//   products
// })
  const docRef = this.db.collection('products').doc(products[ind].id);
  docRef
    .update({
      qty: products[ind].qty+1
    })
    .then(() =>{
      console.log('Updated product');
    })
    .catch(err =>{
      console.log('Error updating product',err);
    })
}
handleDecreaseQuantity= (product)=>{
    const {products} = this.state;
    const ind = products.indexOf(product);
    if (products[ind].qty===0){
      return ;
    }
    const docRef = this.db.collection('products').doc(products[ind].id);
    docRef
       .update({
        qty: products[ind].qty-1
  })
      .then(()=>{
        console.log('updated product');
      })
      .catch(err=>{
        console.log('error updating product',err);
      });

}
// this.setState({
//     products
// })
    
   
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

addProduct=()=>{
  this.db
  .collection('products')
  .add({
    img: '',
    price: 99999,
    qty: 3,
    title: 'Washing MAchine'
  })
  .then((docRef)=>{
    console.log(docRef);
  })
  .catch((err)=>{
    console.log(err);
  });
}

render(){
  const {products,loading} = this.state;
  return (
    <div className="App">
      <Navbar count = {this.getCount()}/>
      {/* <button onClick={this.addProduct} style={{fontSize: 12, padding:20}}>Add a product</button> */}
      <Cart
          products = {products}
          increaseQuantity={this.handleIncreaseQuantity}
          decreaseQuantity = {this.handleDecreaseQuantity}
          deleteQuantity = {this.handleDeleteQuantity} 
      />
      <div style={{padding:10, fontSize: 20}}>TOTAL : {this.getTotal()}</div>
      {loading && <h1>Loading...</h1>}
    </div>
  );
}
}


export default App;
