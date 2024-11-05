import React from 'react'
import './Checkout.css'
import { useStateValue } from '../../components/StateProvider/StateProvider'
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct'
import Subtotal from '../../components/Subtotal/Subtotal'

const Checkout = () => {
  const [{basket}] = useStateValue()
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        {
          basket.length === 0 ?(
            <div>
              <h2>Your Shopping cart is empty</h2>
              <p>You have no items in your cart</p>
            </div>
          ) : (
            <div>
              <h2 className='checkout__title'>Your shopping basket</h2>
              {
                basket.map((items)=>{
                  return (
                    <CheckoutProduct key={items.id} id={items.id} title={items.title} image={items.image} price={items.price} rating={items.rating}/>
                  )
                })
              }
            </div>
          )
        }

      </div>
      {basket.length > 0 && (
        <div className='checkout__right'>
          <Subtotal/>
        </div>
      )}
    </div>
  )
}

export default Checkout;
