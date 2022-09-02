import React, { FC } from "react"

import Navigation from "../../components/Navigation"
import Footer from '../../components/Footer'
import './index.scss'

const HomePage: FC = () => {
  return (
    <div className="home">
      <header className="home__header">
        <div className="home__header__content">
          <div className="home__header__logo font-bold">
            xiaohua.run!
          </div>
          <Navigation />
        </div>

      </header>
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
