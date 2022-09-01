import React, { FC } from "react"

import Navigation from "../../components/Navigation"
import Footer from '../../components/Footer'
import './index.scss'

const HomePage: FC = () => {
  return (
    <div className="home">
      <h1 className="home__title">THIS IS MY BLOG！！</h1>
      <div className="home__nav">
        <Navigation />
      </div>
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
