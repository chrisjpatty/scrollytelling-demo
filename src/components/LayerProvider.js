import React from 'react'
import useScrollTop from '../hooks/useScrollTop'

export const scrollContext = React.createContext(0)

export default ({children}) => {
  const scrollTop = useScrollTop();
  return (
    <scrollContext.Provider value={scrollTop}>
      {children}
    </scrollContext.Provider>
  )
}
