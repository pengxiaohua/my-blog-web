import React, {FC} from "react"

import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const footer: FC<Props> = (props) => {
  return (
    <div className="footer">{`2022-${new Date().getFullYear()}`}</div>
  )
}

footer.defaultProps = defaultProps

export default footer
