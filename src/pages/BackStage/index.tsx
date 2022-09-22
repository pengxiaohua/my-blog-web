import React, {FC} from "react"

import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const BackStage: FC<Props> = (props) => {
  return (
    <div className="back-stage">后台管理系统</div>
  )
}

BackStage.defaultProps = defaultProps

export default BackStage
