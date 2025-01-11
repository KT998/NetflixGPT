import React from 'react'
import { IFRAME_TITLE } from '../../utils/constants'

const Player = ({ width, src, videoLoader }) => {
  return (
    <div className={`${width} border-2 border-gray-700`}>
      <iframe
        className={`${width} aspect-video`}
        src={videoLoader ? "" : src}
        title={IFRAME_TITLE}
      ></iframe>
    </div>
  )
}

export default Player
