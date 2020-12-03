import React from 'react'
import '../assets/Count.css'

function Count({number, counter}) {
    return (
        <div className='counter'>
            <button className='downButton' onClick={()=>counter('-')}>-</button>
                <h2>{number}</h2>
            <button className='upButton' onClick={()=>counter('+')}>+</button>
        </div>
    )
}

export default Count;