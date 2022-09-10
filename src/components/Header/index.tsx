import React, { FC, useEffect, useState } from "react"

import Navigation from '../Navigation'
import githubIcon from '../../assets/github-icon.png'
import wechatIcon from '../../assets/wechat-icon.png'
import darkModeIcon from '../../assets/dark-mode-icon.png'
import lightModeIcon from '../../assets/light-mode-icon.png'
import './index.scss'

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Header: FC<Props> = (props) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === 'undefined') return false
    return document.documentElement.classList.contains('dark')
  })

  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (theme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <div className="header bg-[#ffffff] dark:bg-[#0B1120]">
      <div className="header__content">
        <div className="header__logo font-bold dark:text-white text-grey-800">
          xiaohua.run!
        </div>
        <Navigation />
        <div
          className="header__mode cursor-pointer w-5"
          onClick={()=>{
            setIsDark(!isDark)
            window.__setPreferredTheme(isDark ? 'light' : 'dark')
          }}
        >
          <img src={isDark ? lightModeIcon : darkModeIcon} alt="mode" />
        </div>
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
