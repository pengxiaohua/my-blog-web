import React, { FC } from "react"

import Navigation from '../Navigation'
import githubIcon from '../../assets/github-icon.png'
import wechatIcon from '../../assets/wechat-icon.png'
import './index.scss'

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Header: FC<Props> = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo font-bold underline">
          xiaohua.run!
        </div>
        <Navigation />
        <div className="header__social-links">
          <div className="header__wechat-link cursor-pointer">
            <img src={wechatIcon} alt="wechat" />
          </div>
          <div className="header__github-link cursor-pointer">
            <img src={githubIcon} alt="github" />
          </div>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = defaultProps

export default Header
