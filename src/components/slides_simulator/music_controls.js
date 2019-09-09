import React, { useState, useRef, useCallback, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlay,
  faPause,
  faStepBackward,
} from "@fortawesome/pro-solid-svg-icons"

const MusicControls = function(props) {
  const [playing, setPlaying] = useState(false)
  const player = useRef()
  const handlePause = useCallback(() => {
    player.current.pause()
    setPlaying(false)
  })
  const handlePlay = useCallback(() => {
    player.current.play()
    setPlaying(true)
  })
  const handleSkipBack = useCallback(() => {
    player.current.currentTime = 0
    player.current.play()
    setPlaying(true)
    props.onReset()
  })
  useEffect(() => {
    const endedListener = () => {
      setPlaying(false)
    }
    player.current.addEventListener("ended", endedListener)
    return () => {
      player.current.removeEventListener("ended", endedListener)
    }
  }, [])
  return (
    <>
      <audio ref={player}>
        <source src={props.url} />
      </audio>
      <div
        className="controls-container flex justify-between items-center"
        css={{ width: 150 }}
      >
        <FontAwesomeIcon
          icon={faStepBackward}
          size="lg"
          onClick={handleSkipBack}
        />
        {playing ? (
          <FontAwesomeIcon onClick={handlePause} icon={faPause} size="2x" />
        ) : (
          <FontAwesomeIcon onClick={handlePlay} icon={faPlay} size="2x" />
        )}
        <FontAwesomeIcon
          icon={faStepBackward}
          size="lg"
          className="text-gray-900"
        />
      </div>
    </>
  )
}

export default MusicControls
