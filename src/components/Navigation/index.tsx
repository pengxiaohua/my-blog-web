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
      <ul className="navigation-page__nav-list font-bold">
        <li className="navigation-page__nav-item">
          <Link to="/" className="hover:text-sky-500 dark:hover:text-sky-400">首页</Link>
        </li>
        <li className="navigation-page__nav-item">技术</li>
        <li className="navigation-page__nav-item">随笔</li>
        <li className="navigation-page__nav-item">读书</li>
        <li className="navigation-page__nav-item">随想</li>
        <li className="navigation-page__nav-item hover:text-sky-500 dark:hover:text-sky-400"><Link to="/about-me">关于</Link></li>
      </ul>
    </div>
  )
}

Navigation.defaultProps = defaultProps

export default Navigation
