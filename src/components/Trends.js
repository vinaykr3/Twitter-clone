import React from 'react'
import TrendsKeyword from './TrendsKeyword'

const Trends = () => {
    return (
        <div className='trends'>
            <div className="trends__search">
                <input type="text" className='trend__control' placeholder='Search Twitter...' />
                <div className="trend__icon">
                <i className="fa fa-search search" aria-hidden="true"></i>
                </div>
            </div>
            <TrendsKeyword />
        </div>
    )
}

export default Trends
