import React from 'react'
import "./Pain.css"
import { Link } from 'react-router-dom';
function Pain() {
  return (
    <div className='pain'>
        <input/>
        <input/>
        <Link to="/modal">
        <button>click</button>
        </Link>
    </div>
  )
}

export default Pain