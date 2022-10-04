import React, {FC} from "react"

import ContentWrap from "../../components/ContentWrap"
import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const EssayAndReading: FC<Props> = (props) => {
  return (
    <div className="essay-and-reading">
      <ContentWrap>EssayAndReading</ContentWrap>
    </div>
  )
}

EssayAndReading.defaultProps = defaultProps

export default EssayAndReading
