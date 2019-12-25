import React from 'react'
import { Link } from 'react-router-dom'

const Pageone = () => {
    return (
        <div>
            <Link to="/Pagetwo">
                <div>
                    this is page one
                </div>
            </Link>
        </div>)
}
export default Pageone; 