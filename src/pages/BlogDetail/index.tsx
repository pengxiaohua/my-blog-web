import React, { FC } from "react"

import Header from '../../components/Header'

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const BlogDetail: FC<Props> = (props) => {
  return (
    <div className="blog-detail">
      <Header />
      <h1>THIS IS BLOG DETAIL！</h1>
    </div>
  )
}

BlogDetail.defaultProps = defaultProps

export default BlogDetail
