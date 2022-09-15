import React, { FC } from "react"

import Header from "../../components/Header"
import Footer from '../../components/Footer'
import { blogList } from "../../mock/blog-list"
import './index.scss'

const HomePage: FC = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__content">
        <article className="home__blog-list">
          {
            blogList.map(blog => (
              <div className="home__blog-item">
                <div className="home__blog-item__title">{blog.title}</div>
                <div className="home__blog-item__time-and-author">
                  <div className="home__blog-item__time">{blog.createTime}</div>
                  <div className="home__blog-item__author">{blog.author}</div>
                </div>
                <div className="home__blog-item__content">{blog.content}</div>
                <div className="home__blog-item__tags">{blog.tags}</div>
              </div>
            ))
          }
        </article>
        <div className="home__blog-aside">BLOG-ASIDE</div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage
