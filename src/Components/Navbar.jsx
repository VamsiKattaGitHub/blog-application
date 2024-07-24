import React from 'react'
import styles from "../Styles/Navbar.module.css"
import { Link ,Outlet,NavLink} from 'react-router-dom'

const Navbar = ({auth}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm">
  <div className="container-fluid">
  <h2 className='nav-brand text-dark '>My<span className='text-warning m-0'>Blog</span></h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto text-center">
        <li className="nav-item">
          <Link className= {`${styles.yellow} nav-link active`}  to="/" >
           Home
          </Link>
        </li>
        <center><hr className='m-0 w-75  d-md-none' /></center>


        <li className="nav-item dropdown">
              <Link className={`${styles.yellow} nav-link dropdown-toggle`} to="#" id="bollywoodDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Bollywood
              </Link>
              <ul className="dropdown-menu" aria-labelledby="bollywoodDropdown">
                <li>
                  <Link className="dropdown-item" to="/bollywood/bollywoodnews">Bollywood News</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/bollywood/fitness">Fitness</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/bollywood/food">Food</Link>
                </li>
              </ul>
            </li>
          
      


        <center><hr className='m-0 w-75  d-md-none' /></center>
        <li className="nav-item">
          <Link className={`${styles.yellow} nav-link `} to="/technology" >
          Technology
          </Link>
        </li>
        <center><hr className='m-0 w-75 w-sm-100 d-md-none' /></center>
        <li className="nav-item">
          <Link className={`${styles.yellow} nav-link `} to="/hollywood" >
          Hollywood
          </Link>
        </li>
      </ul>

    </div>
    <div className="d-flex d-none d-md-block">
          {!auth ? (
            <>
              <NavLink className="btn btn-outline-primary me-2" to="/login">Login</NavLink>
              <NavLink className="btn btn-outline-secondary" to="/signup">Signup</NavLink>
            </>
          ) : (
            <NavLink className="btn btn-outline-success" to="/profile">Profile</NavLink>
          )}
        </div>
  </div>
</nav>
<hr className='m-0 d-none d-lg-block' />
<Outlet/>
    </>
  )
}

export default Navbar
