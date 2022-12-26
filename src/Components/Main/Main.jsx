import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import { data } from '../../data/data'
import './Main.scss'
const arrCategory = []
function Main() {
  const {order , setOrder} = useContext(Context)
  data.forEach((e,i) => {
    if(!arrCategory.includes(e.type))
    arrCategory.push(e.type)
  });
const [category,setCategory] = useState(arrCategory[0])

  return (
    <div className='main'>
      <div className="main__header">
        <div className="main__header__inner">
          <div>
            <h1>Jaegar Resto</h1>
            <p>Tuesday, 2 Feb 2021</p>
          </div>
          <div className='main__header__inner-forms'>
            <label htmlFor="search"><i className="bi bi-search"></i> </label>
            <input type="text" placeholder='Search for food, coffe, etc..' />
        </div>
        </div>
        <div className="category__list">
          {
            arrCategory?.map((item,i)=>(
              <button className={category == item?  'btn__active': ''} onClick={()=> setCategory(item)} key={i}>{item}</button>
            ))
          }
        </div>
      </div>
        <ul className='main__list'>
          {
            data?.filter((e)=>e.type == category).map((item,i)=>(
              <li onClick={()=>
              {
                setOrder([...new Set([...order, item])])

                item.number = item.number ? item.number + 1 :1;
              }
          }   key={i} className='main__list__card'>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <b>$ {item.price}</b>
              <span>{item.have} Bowls available</span>
            </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Main