import React, { FC } from "react"

import ContentWrap from "../../components/ContentWrap"

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const BlogDetail: FC<Props> = (props) => {
  return (
    <div className="blog-detail">
      <ContentWrap>blog-detail</ContentWrap>
    </div>
  )
}

BlogDetail.defaultProps = defaultProps

export default BlogDetail
