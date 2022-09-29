import React, { FC } from "react"

import Header from "../../components/Header"
import './index.scss'

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const AboutMe: FC<Props> = (props) => {
  return (
    <div className="about-me">
      <Header />
      <h1>THIS IS ABOUT ME！</h1>
      <h3>小米(武汉)</h3>
      <h3>高德地图</h3>
      <h3>小米(北京)</h3>
      <h3>金风科技</h3>
    </div>
  )
}

AboutMe.defaultProps = defaultProps

export default AboutMe
