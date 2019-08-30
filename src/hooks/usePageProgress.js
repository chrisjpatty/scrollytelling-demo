import useScrollContext from './useScrollContext'

export default () => {
  const scrollTop = useScrollContext()
  const pageHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  return scrollTop / (pageHeight - windowHeight)
}
