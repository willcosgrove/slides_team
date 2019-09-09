import React, { useEffect, useRef } from "react"
import { css } from "@emotion/core"

const SlidesCarousel = function(props) {
  const carouselInnerRef = useRef()
  useEffect(() => {
    carouselInnerRef.current.children[props.slideIndex].scrollIntoView({
      inline: "center",
      behavior: "smooth",
    })
  }, [props.slideIndex])
  return (
    <div
      className="carousel w-screen overflow-scroll"
      css={css`
        padding-left: calc(50vw - (320px / 2));
        padding-right: 50vw;
        ::-webkit-scrollbar {
          display: none;
        }
      `}
    >
      <div className="carousel-inner flex py-5" ref={carouselInnerRef}>
        {props.slides.map((slide, index) => (
          <Slide
            active={index == props.slideIndex}
            key={index}
            slide={slide}
            onClick={() => props.onSlideClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

const Slide = function(props) {
  let activeStyles = {}
  let classes =
    "slide bg-gray-800 rounded flex-shrink-0 flex items-center justify-center mr-5"
  if (props.active) {
    activeStyles = { boxShadow: "0 0 0 4px #4A5568" }
  }
  return (
    <div
      className={classes}
      css={{
        width: 320,
        height: 180,
        userSelect: "none",
        cursor: "pointer",
        ...activeStyles,
      }}
      onClick={props.onClick}
    >
      <p
        className="text-center font-bold uppercase text-xs"
        dangerouslySetInnerHTML={{ __html: props.slide }}
      />
    </div>
  )
}

export default SlidesCarousel
