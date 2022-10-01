import React, {FC} from "react"

import './index.scss'

interface IProps {
  children: any
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const ContentWrap: FC<Props> = (props) => {
  const { children } = props
  console.log({children});

  return (
    <div className="content-wrap">{children}</div>
  )
}

ContentWrap.defaultProps = defaultProps

export default ContentWrap
