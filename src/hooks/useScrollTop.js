import React from 'react'

export default () => {
  const [scrollTop, setScrollTop] = React.useState(0);

  const handleScroll = e => setScrollTop(window.scrollY)

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollTop;
}
