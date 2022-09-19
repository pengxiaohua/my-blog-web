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
              <div className="home__blog-item border border-slate-900 dark:border-white" key={blog.id}>
                <div className="home__blog-item__title dark:text-white">{blog.title}</div>
                <div className="home__blog-item__time-and-author dark:text-slate-400">
                  <div className="home__blog-item__time">{blog.createTime}</div>
                  <div className="home__blog-item__author">{blog.author}</div>
                </div>
                <div className="home__blog-item__content dark:text-white">{blog.content}</div>
                <div className="home__blog-item__tags dark:text-white">{blog.tags}</div>
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
