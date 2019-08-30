import React from 'react'
import styled from '@emotion/styled'
import useLayer from '../hooks/useLayer'

export default () => {
  const wrapperRef = React.useRef()
  const { isInViewport, progress } = useLayer(wrapperRef)

  return (
    <Wrapper ref={wrapperRef} style={{background: isInViewport ? 'green' : 'red'}}>
      <span>{progress.toFixed(2)}%</span>
      <span>{progress.toFixed(2)}%</span>
      <span>{progress.toFixed(2)}%</span>
    </Wrapper>
  )
}

const Wrapper = styled('section')`
  min-height: 130vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 60px;
  border: 10px solid yellow;
`
