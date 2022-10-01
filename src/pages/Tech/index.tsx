import React, {FC} from "react"

import ContentWrap from "../../components/ContentWrap"
import Header from "../../components/Header"
import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Tech: FC<Props> = (props) => {
  return (
    <div className="tech-page">
      <Header/>
      <ContentWrap>TECH</ContentWrap>
    </div>
  )
}

Tech.defaultProps = defaultProps

export default Tech
