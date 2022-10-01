import React, {FC} from "react"

import Header from "../Header"
import Footer from '../Footer'
import './index.scss'

interface IProps {
  children: any
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const ContentWrap: FC<Props> = (props) => {
  const { children } = props

  return (
    <div className="content-wrap">
      <Header/>
      <div className="content-wrap__content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

ContentWrap.defaultProps = defaultProps

export default ContentWrap
