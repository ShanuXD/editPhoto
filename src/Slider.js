import React from 'react'

function Slider({min,max,value,handelChange}) {
    return (
        <div className="slider-container">
            <input 
            type='range' 
            className='slider'
            min={min}
            max={max}
            value={value}
            onChange={handelChange}></input>
        </div>
    )
}

export default Slider
