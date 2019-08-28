import React from 'react'
import useLayerProgress from './useLayerProgress'

export default layerWrapper => {
  const [layerHeight, setLayerHeight] = React.useState(0)
  const [layerOffset, setLayerOffset] = React.useState(0)
  const progress = useLayerProgress(layerHeight, layerOffset)

  React.useEffect(() => {
    const handleResize = () => {
      setLayerHeight(layerWrapper.current.offsetHeight);
      setLayerOffset(layerWrapper.current.offsetTop);
    };
    window.addEventListener('resize', handleResize)
    return window.removeEventListener('resize', handleResize)
  }, [layerWrapper])

  return {progress}
}
