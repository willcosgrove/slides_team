import React, { useState, useEffect, useCallback } from "react"

import MusicControls from "./music_controls"
import InstantPreview from "./instant_preview"
import ScreenPreview from "./screen_preview"
import ProgressIndicator from "./progress_indicator"
import SlidesCarousel from "./slides_carousel"

const SlidesSimulator = function(props) {
  const [slideIndex, setSlideIndex] = useState(0)
  useEffect(() => {
    const downHandler = ({ key }) => {
      switch (key) {
        case "ArrowLeft":
          setSlideIndex(i => Math.max(0, i - 1))
          break
        case "ArrowRight":
          setSlideIndex(i => Math.min(props.song.slides.length - 1, i + 1))
          break
      }
    }
    window.addEventListener("keydown", downHandler)
    return () => {
      window.removeEventListener("keydown", downHandler)
    }
  }, [props.song])

  const handleReset = useCallback(() => {
    setSlideIndex(0)
  })

  return (
    <div className="app min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center">
      <div className="header flex flex-col mt-5 mb-5 items-center">
        <h4 className="font-bold mb-2">{props.song.title}</h4>
        <MusicControls url={props.song.file} onReset={handleReset} />
      </div>
      <div className="visualization flex self-stretch flex-col mb-5">
        <div className="previews flex flex-1 justify-around mb-5">
          <div className="preview flex flex-col items-center">
            <h5 className="mb-2">Instantaneous Preview</h5>
            <InstantPreview slide={props.song.slides[slideIndex]} />
          </div>
          <div className="preview flex flex-col items-center">
            <h5 className="mb-2">Screen Preview</h5>
            <ScreenPreview
              slide={props.song.slides[slideIndex]}
              transition={600}
              delay={250}
            />
          </div>
        </div>
        <div className="progress-container flex justify-center">
          <ProgressIndicator slideIndex={slideIndex} />
        </div>
      </div>
      <div className="slides">
        <SlidesCarousel
          slideIndex={slideIndex}
          slides={props.song.slides}
          onSlideClick={setSlideIndex}
        />
      </div>
    </div>
  )
}

export default SlidesSimulator
