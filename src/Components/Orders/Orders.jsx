import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import './Orders.scss'
function Orders() {
  const { order , setOrder } = useContext(Context)
  return (
    <div className='orders'>
        <h2>Orders #34562</h2>
        <div className="orders__btns">
          <button>Dine In</button>
          <button>To Go </button>
          <button>Delivery</button>
        </div>

        <ul className="order__list">
          {
            order?.map((e,i)=>(
              <li key={i} className='order__item'>
                <div className='item__left'>
                <img src={e.img} alt="" />
                <span>
                  <b>{e.title}</b>
                  <p>$ {e.price}</p>
                </span>
                <p>{e.number}</p>
                <input type="text" placeholder='Please, just a little bit spicy only.' />
              </div>
              <div className='item__right'>
                <span>$ {e.number + e.price}</span>
                <button><i className='bi bi-trash'></i></button>
              </div>
          </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Orders