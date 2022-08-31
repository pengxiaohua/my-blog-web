import React, { FC } from "react"

import Navigation from "../../components/Navigation"
import './index.scss'

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const AboutMe: FC<Props> = (props) => {
  return (
    <div className="about-me">
      <Navigation />
      <h1>THIS IS ABOUT ME！</h1>
    </div>
  )
}

AboutMe.defaultProps = defaultProps

export default AboutMe
