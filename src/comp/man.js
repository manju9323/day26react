import React from 'react'
import { Link } from 'react-router-dom'
import "../index"
function Man({det}) {

  const {pic,name,price,option}=det
  return (
    <div>
<div className='main'>
<img src={pic} alt={name} className="product-img"/>
<div className='main-cont'>
<div className='bold'>{name}</div>
<div>{price}</div>
<br/>
<button className='option'>{option}</button>
<Link to={`/users/${det.id}`}><button className='option'>VIEW</button></Link>
</div>
    </div>
    </div>
  )
}

export default Man




