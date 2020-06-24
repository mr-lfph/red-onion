import React from 'react'
import { Link } from 'react-router-dom'

const TestS=()=> {
    return (
        <div>
            <h2>This is Test Screen</h2>
            {
                <Link to="../Login">Go Login</Link>
            }
        </div>
    )
}

export default TestS
