import React from 'react';
import './Product.css';
import { useStateValue } from '../StateProvider/StateProvider';

const Product = ({id, title, image, price, rating}) => {
    const [{basket},dispatch] = useStateValue();

    const addToBasket = ()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id,
                title,
                image,
                price,
                rating
            }
        })
    }
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {
                    Array(rating).fill().map((_, i) => <span key={`${id}-star-${i}`}>⭐</span>)
                }
            </div>
        </div>
        <img src={image} alt=''/>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
