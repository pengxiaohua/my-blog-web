import React, {FC} from "react"
import ContentWrap from "../../components/ContentWrap"

import Header from "../../components/Header"
import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const BackStage: FC<Props> = (props) => {
  return (
    <div className="back-stage">
      <Header />
      <ContentWrap>
        后台管理系统
      </ContentWrap>
    </div>
  )
}

BackStage.defaultProps = defaultProps

export default BackStage
