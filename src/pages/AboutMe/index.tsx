import React, { FC } from "react"

import ContentWrap from "../../components/ContentWrap"
import './index.scss'

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const AboutMe: FC<Props> = (props) => {
  return (
    <div className="about-me">
      <ContentWrap>
        <h3>小米(武汉)</h3>
      </ContentWrap>

    </div>
  )
}

AboutMe.defaultProps = defaultProps

export default AboutMe
