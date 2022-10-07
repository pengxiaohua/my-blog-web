import React, {FC} from "react"

import ContentWrap from "../../components/ContentWrap"
import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Web3: FC<Props> = (props) => {
  return (
    <div className="web3-page">
      <ContentWrap>Web3、区块链、元宇宙等</ContentWrap>
    </div>
  )
}

Web3.defaultProps = defaultProps

export default Web3
