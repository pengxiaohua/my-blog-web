import React, { FC } from "react"

import Navigation from '../../components/Navigation'

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const BlogDetail: FC<Props> = (props) => {
  return (
    <div className="blog-detail">
      <Navigation />
      <h1>THIS IS BLOG DETAIL！</h1>
    </div>
  )
}

BlogDetail.defaultProps = defaultProps

export default BlogDetail
