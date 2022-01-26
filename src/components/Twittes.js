import React from 'react'
import CreateTwitts from './CreateTwitts'
import Posts from './Posts'

const Twittes = () => {
    return (
        <div className='posts'>
            <div className="posts__home">Home</div>
            <CreateTwitts />
            <Posts />
        </div>
    )
}

export default Twittes
