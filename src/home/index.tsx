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
        <article className="home__blog-list">
          111
        </article>
        <div className="home__blog-aside">222</div>
        <Footer />
    </div>
  )
}

export default HomePage
