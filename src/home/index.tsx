import React, {FC} from "react"
import { Link } from "react-router-dom";

import Footer from '../components/Footer'
import './index.scss'

const HomePage: FC = () => {
  return (
    <div className="home">
        <h1 className="home__title">THIS IS MY BLOG！！</h1>
        <p>http://www.xiaohua.life</p>
        <h3>首页</h3>
        <h3>技术</h3>
        <h3>随想</h3>
        <h3>读书笔记</h3>
        <h3><Link to="/about-me">ABOUT ME</Link></h3>
        <Footer />
    </div>
  )
}

export default HomePage
