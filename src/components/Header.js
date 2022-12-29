import React from 'react'

const Header = (props) => {
  return (
    <div>
    <h4>My Budget Planner</h4>
    <div className ='d-flex'>
     <div className='box'>Budget : $20000</div>
     <div className='box1'>Remainig: ${20000- props.total}</div>
     <div className='box2'>Spent so far: ${props.total}</div>
     </div>
    </div>
  )
}

export default Header