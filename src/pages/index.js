import * as React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
import '../fonts/linearicons/style.css'
import '../css/style.css'
import image1 from '../images/image-1.png'
import image2 from '../images/image-2.png'

const IndexPage = () => {
  return (
    <Layout pageTitle="">

      <div className="wrapper">
        <div className="inner">
          <img src={ image1 } alt="" className="image-1" />
          <form action="">
            <h3>Contactez-nous !</h3>
            <div className="form-holder">
              <span className="lnr lnr-user"></span>
              <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="form-holder">
              <span className="lnr lnr-envelope"></span>
              <input type="text" className="form-control" placeholder="Mail" />
            </div>
            <div className="form-holder">
              <span className="lnr lnr-lock"></span>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <button>
              <span>Register</span>
            </button>
          </form>
          <img src={  image2  } alt="" className="image-2" />
        </div>

      </div>

    </Layout>
  )
}

export const Head = () => <title>Home Page</title>


export default IndexPage
