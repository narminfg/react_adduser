import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container ">
            <div className="row align-items-center ">
              <div className="col-lg-2 left">
                <Link to='/'>Cargo.az</Link>
              </div>
              <div className="col-lg-10 right text-end">
                <Link to='/'>Home</Link>
                <Link to='/add'>Add Users</Link>
                </div>  
            </div>
        </div>
    </header>
  )
}

export default Header