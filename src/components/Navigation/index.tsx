import React, { FC } from "react"
import { Link } from "react-router-dom";

import './index.scss'

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Navigation: FC<Props> = (props) => {
  return (
    <div className="navigation-page">
      <ul className="navigation-page__nav-list font-bold dark:text-white text-[#0B1120]">
        <li className="navigation-page__nav-item">
          <Link to="/" className="hover:text-sky-500 dark:hover:text-sky-400">首页</Link>
        </li>
        <li className="navigation-page__nav-item">
          <Link to="/tech" className="hover:text-sky-500 dark:hover:text-sky-400">技术</Link>
        </li>
        <li className="navigation-page__nav-item">
          <Link to="/essays" className="hover:text-sky-500 dark:hover:text-sky-400">随笔</Link>
        </li>
        <li className="navigation-page__nav-item">
          <Link to="/reading" className="hover:text-sky-500 dark:hover:text-sky-400">读书</Link>
        </li>
        <li className="navigation-page__nav-item">
          <Link to="/thinking" className="hover:text-sky-500 dark:hover:text-sky-400">随想</Link>
        </li>
        <li className="navigation-page__nav-item">
          <Link to="/about-me" className="hover:text-sky-500 dark:hover:text-sky-400">关于</Link>
        </li>
      </ul>
    </div>
  )
}

Navigation.defaultProps = defaultProps

export default Navigation
