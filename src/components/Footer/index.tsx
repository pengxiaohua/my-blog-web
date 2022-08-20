import React, {FC} from "react"

import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const footer: FC<Props> = (props) => {
  return (
    <div className="footer">
        <div className="footer__years">{`2022-${new Date().getFullYear()}`}</div>
        <div className="footer__domain-name">https://www.xiaohua.run</div>
    </div>
  )
}

footer.defaultProps = defaultProps

export default footer
