
import { selectProduct } from '../../store/product';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './CartIndexItem.css';
import { useState } from 'react';
import { deleteCartItem, updateCartItem } from '../../store/cartItem';
import placeholder from '../../images/placeholder.svg';


const CartIndexItem = (({ cartItem })=> {
  const product = useSelector(selectProduct(cartItem.productId));
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const sessionUser = useSelector(state => state.session.user);


  if(!product) return null;


  const deleteItem = (e) => {
    e.preventDefault();
    dispatch(deleteCartItem(cartItem.id));
  };

  const quantityHandler = (e) => {
    const updatedQuantity = parseInt(e.currentTarget.value);
    const updatedCartItem = {
      id: cartItem.id,
      quantity: updatedQuantity,
      userId: sessionUser.id,
      productId: product.id,
    };
  
    setQuantity(updatedQuantity);
    dispatch(updateCartItem(updatedCartItem));
  };

  return (
    <div className='cartIndexItem'>
      
      <div className="cartItem" key={cartItem.id}>
        <NavLink to={`/products/${product.id}`}>
          <div className='cartItemImgDiv'>
            <img src={placeholder} alt="" />
          </div>
        </NavLink>
        <div className='cartProductNameDiv'>
          <NavLink to={`/products/${product.id}`}>
            <h1 className='cartItemNameH1'>{product.name}</h1>
          </NavLink>
          <h1 className='cartItemPriceH1'>${product.price}</h1>
        </div>
        {/* <div className='cartItemPriceDiv'>
          <h1 className='cartItemPriceH1'>${product.price}</h1>
        </div> */}

        <div className='cartItemQuantityDiv'>
          <span>Qty:</span>
          <select value={quantity} className="quantityCartItemDropdown" id="quantityCartItem" onChange={quantityHandler}>
            <option value="1">1</option> 
            <option value="2">2</option> 
            <option value="3">3</option> 
            <option value="4">4</option> 
            <option value="5">5</option> 
            <option value="6">6</option> 
            <option value="7">7</option> 
          </select>
          <span className="deleteLink" onClick={deleteItem}>Delete</span>
        </div>
      </div>
      <div className='cartItemIndexDivider'></div>
    </div>
  );
});

export default CartIndexItem;