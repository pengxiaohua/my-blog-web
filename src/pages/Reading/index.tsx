import React, {FC} from "react"

import ContentWrap from "../../components/ContentWrap"
import Header from "../../components/Header"
import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Reading: FC<Props> = (props) => {
  return (
    <div className="reading-page">
      <ContentWrap>reading</ContentWrap>
    </div>
  )
}

Reading.defaultProps = defaultProps

export default Reading
