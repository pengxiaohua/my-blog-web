import React, { FC } from "react"

import Header from "../../components/Header"
import Footer from '../../components/Footer'
import './index.scss'

const HomePage: FC = () => {
  return (
    <div className="home">
      <Header />
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
