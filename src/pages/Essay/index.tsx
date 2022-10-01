import React, {FC} from "react"

import ContentWrap from "../../components/ContentWrap"
import Header from "../../components/Header"
import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Essay: FC<Props> = (props) => {
  return (
    <div className="essay-page">
      <ContentWrap>Essay</ContentWrap>
    </div>
  )
}

Essay.defaultProps = defaultProps

export default Essay
