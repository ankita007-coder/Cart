import React from "react";

const CartItem = (props)=>{
    const { title,price, qty } = props.product;
    const {product,increaseQuantity, decreaseQuantity,deleteQuantity} = props;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img} alt=""/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Rs {price}</div>
                <div style={{color:'#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/*Buttons*/}
                    <img alt="increase" className="action-icons" onClick={()=>increaseQuantity(product)} src="https://cdn-icons-png.flaticon.com/512/992/992651.png"/>
                    <img alt="decrease" className="action-icons" onClick={()=>decreaseQuantity(product)} src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                    <img alt="delete" className="action-icons" onClick={()=>deleteQuantity(product.id)} src="https://cdn-icons-png.flaticon.com/512/542/542775.png"/>
                </div>
            </div>
        </div>
    );
}
const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 10,
      background: '#ccc'
    }
  }
export default CartItem;