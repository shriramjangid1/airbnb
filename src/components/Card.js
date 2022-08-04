import React from 'react'


const Card = (props) => {
    return (
        <div className='card-component'>
            <div className="card">
                <img src='./images/katie-zaferes.png' alt="card-img" className='card-img' />
                <div className='ratting'>
                    <img src="images/start.png" alt='' className='star-img' />
                    <span>{props.ratting} </span>
                    <span className='gray'> ({props.reviweCount}) .</span>
                    <span className='gray'> {props.country} </span> 
                </div>
                <p className='card-text'>{props.title}<br/>
                    <strong>${props.price}</strong>
                </p>
            </div>
        </div>
    )
}

export default Card