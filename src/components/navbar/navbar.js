import React from 'react'
//importing link module from react scroll module to assist sliding feature in website
import { Link} from 'react-scroll';
//importing navbar css file 
import './navbar.css'

export default function Navbar() {
  return (
   <>
<nav className={ `navbar navbar-expand-lg navbar-light bg-light` } id="navbr">
  <div className={`container-fluid `}>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                       <Link 
                   className="nav-link active click"
                   to="hero"
                    spy={true}
                    smooth={true}
                  duration={100}  >
                       Hero
                      </Link>
                </li>

               <li className="nav-item">
                    <Link 
                 className="nav-link active click"
                 to="product"
                 spy={true}
                 smooth={true}
                 duration={100}>
                 Products
                   </Link>
              </li>
              
              <li className="nav-item">
                    <Link 
                 className="nav-link active click"
                 to="blog"
                 spy={true}
                 smooth={true}
                 duration={100}>
                 Blogs
                   </Link>
               </li>

               <li className="nav-item">
                    <Link 
                 className="nav-link active click"
                 to="connect"
                 spy={true}
                 smooth={true}
                 duration={100}>
                 Connect us
                   </Link>
              </li>

              <li className="nav-item">
                    <Link 
                 className="nav-link active click"
                 to="footer"
                 spy={true}
                 smooth={true}
                 duration={100}>
                 About us
                   </Link>
              </li>

           </ul>
      

     
      </div>
  </div>
</nav>

   
   </>
  );
}

