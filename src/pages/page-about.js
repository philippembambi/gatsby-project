import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import image1 from '../images/image-1.png'
import image2 from '../images/image-2.png'

const AboutPage = () => {
  return (
    <Layout pageTitle="">

<div className="wrapper">
        <div className="inner">
        
          <img src={ image1 } alt="" className="image-1" />
            
          <form action="">
            <h3>A props de nous</h3>
            </form>

          <img src={  image2  } alt="" className="image-2" />
        </div>

      </div>

    </Layout>
  )
}

export default AboutPage