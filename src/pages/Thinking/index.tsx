import React, {FC} from "react"

import ContentWrap from "../../components/ContentWrap"
import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Thinking: FC<Props> = (props) => {
  return (
    <div className="thinking-page">
      <ContentWrap>THINKING</ContentWrap>
    </div>
  )
}

Thinking.defaultProps = defaultProps

export default Thinking
