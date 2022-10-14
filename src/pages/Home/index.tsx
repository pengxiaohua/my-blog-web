import React, { FC } from "react"

import ContentWrap from "../../components/ContentWrap"
import Aside from "../../components/Aside"
import { blogList } from "../../mock/blog-list"
import { customHistory } from "../../utils"
import './index.scss'

const HomePage: FC = () => {

  const viewBlogDetail = (id) => {
    customHistory.push(`/blog-detail/${id}`)
  }

  return (
    <div className="home">
      <ContentWrap flex>
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
        <Aside />
      </ContentWrap>
    </div>
  )
}

export default HomePage
