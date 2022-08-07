import React, {FC} from "react"

import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const AboutMe: FC<Props> = (props) => {
  return (
    <div className="about-me">ABOUT ME</div>
  )
}

AboutMe.defaultProps = defaultProps

export default AboutMe
