import React, {FC} from "react"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const BlogDetail: FC<Props> = (props) => {
  return (
    <div className="blog-detail">BLOG DETAIL</div>
  )
}

BlogDetail.defaultProps = defaultProps

export default BlogDetail
