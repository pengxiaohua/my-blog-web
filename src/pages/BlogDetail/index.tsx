import React, { FC } from "react"

import ContentWrap from "../../components/ContentWrap"
import Header from '../../components/Header'

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const BlogDetail: FC<Props> = (props) => {
  return (
    <div className="blog-detail">
      <Header />
      <ContentWrap>blog-detail</ContentWrap>
    </div>
  )
}

BlogDetail.defaultProps = defaultProps

export default BlogDetail
