import React, {FC} from "react"
import { Link } from "react-router-dom";

import Footer from '../components/Footer'
import './index.scss'

const HomePage: FC = () => {
  return (
    <div className="home">
        <h1 className="home__title">THIS IS MY BLOG！！</h1>
        <p>https://www.xiaohua.run</p>
        <h3><Link to="/">HOME</Link></h3>
        <h3>TECHNOLOGY</h3>
        <h3>ESSAYS</h3>
        <h3>READING NOTES</h3>
        <h3><Link to="/about-me">ABOUT ME</Link></h3>
        <div className="home__content">
          <article className="home__blog-list">
            BLOG-LIST
          </article>
          <div className="home__blog-aside">BLOG-ASIDE</div>
        </div>
        
        <Footer />
    </div>
  )
}

export default HomePage
