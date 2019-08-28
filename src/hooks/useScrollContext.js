import React from 'react'
import { scrollContext } from '../components/LayerProvider'

export default () => {
  const scrollTop = React.useContext(scrollContext)
  return scrollTop
}
