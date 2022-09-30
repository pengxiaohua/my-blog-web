import React, { FC } from "react"
import { useNavigate } from 'react-router-dom'

import Header from "../../components/Header"
import Footer from '../../components/Footer'
import { blogList } from "../../mock/blog-list"
import { customHistory } from "../../utils"
import readTimesIcon from '../../assets/read-times.svg'
import './index.scss'

const HomePage: FC = () => {

  console.log({history});


  const viewBlogDetail = (id) => {
    customHistory.push(`/blog-detail/${id}`)
  }

  return (
    <div className="home">
      <Header />
      <div className="home__content">
        <article className="home__blog-list">
          {
            blogList.map(blog => (
              <div
                className="home__blog-item border border-slate-900 dark:border-white"
                key={blog.id}
                onClick={() => viewBlogDetail(blog.id)}
              >
                <div className="home__blog-item__title dark:text-white">{blog.title}</div>
                <div className="home__blog-item__time-and-author dark:text-slate-400">
                  <div className="home__blog-item__time">{blog.createTime}</div>
                  <div className="home__blog-item__author">{blog.author}</div>
                </div>
                <div className="home__blog-item__content dark:text-white">{blog.content}</div>
                <div className="home__blog-item__bottom-info">
                  <div className="home__blog-item__read-times dark:text-white">
                    阅读次数：{blog.readTimes}
                  </div>
                  <div className="home__blog-item__tags dark:text-white">{blog.tags}</div>
                </div>
              </div>
            ))
          }
        </article>
        <div className="home__blog-aside border border-slate-900 dark:border-white">
          博客日历
          <br />
          词云分类
          <br />
          数据统计
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage
