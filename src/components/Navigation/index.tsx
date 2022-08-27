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
            <nav className="navigation-page__nav-list">
                <h3><Link to="/">HOME</Link></h3>
                <h3>TECHNOLOGY</h3>
                <h3>ESSAYS</h3>
                <h3>READING NOTES</h3>
                <h3><Link to="/about-me">ABOUT ME</Link></h3>
            </nav>
        </div>
    )
}

Navigation.defaultProps = defaultProps

export default Navigation
