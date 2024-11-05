import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider/StateProvider'
import { getTotal } from '../StateProvider/reducer'

const Subtotal = () => {
    const [{basket}] = useStateValue()
  return (
    <div className='Subtotal'>
        <CurrencyFormat renderText={(value)=>{
            return(
                <>
                 <p>Subtotal ({basket.length} item): <strong>{`${value}`}</strong></p>
                 <small className='subtotal__gift'>
                    <input type='checkbox'/>
                    This order contains a gift
                 </small>
                </>
            )
        }}
        decimalScale ={2}
        value={getTotal(basket)}
        displayType={"text"} 
        thousandSepartor = {true}
        prefix={"₹"}
        />
        <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
