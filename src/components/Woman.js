import React from 'react'
import '../styles/Women.scss'
const Woman = ({image,text}) => {
    return (
        <div className='women-section'>
            <div className="header">
                <h1>Burabai</h1>
                <p>Where it's just beautiful</p>
            </div>
            <div className="look">
                <p>Wonderful view</p>
            <button>Let's GO</button>
            </div>
        </div>
    )
}

export default Woman
