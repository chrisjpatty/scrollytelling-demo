import React from 'react'
import styled from '@emotion/styled'
import useLayer from '../hooks/useLayer'

export default () => {
  const wrapperRef = React.useRef()
  const { progress } = useLayer(wrapperRef)
  console.log(progress);
  return (
    <Wrapper ref={wrapperRef}>

    </Wrapper>
  )
}

const Wrapper = styled('section')`
  min-height: 100vh;
`
