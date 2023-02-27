import * as React from 'react'
import { Link } from 'gatsby'
import {  
    container,  
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    headerTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    /*
    We have used destructuring notation instead of using :

    const Layout = (props) => {
        const pageTitle = props.pageTitle
        const children = props.children
      }
    */

  return (
    <div>
      <nav className={container}>
        <h1 className={ headerTitle }>Welcome to My Gatsby Project</h1>
        
        <ul className={navLinks}>

        <li className={navLinkItem}>
            <Link to="/page-about" className={navLinkText}>
              Acceuil
            </Link>
          </li>

        <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Contactez-nous
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>  
    )
}

export default Layout