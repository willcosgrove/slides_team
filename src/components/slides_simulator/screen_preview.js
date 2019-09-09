import React, { useMemo } from "react"
import InstantPreview from "./instant_preview"
import posed, { PoseGroup } from "react-pose"

const ScreenPreview = function(props) {
  const TransitionWrapper = useMemo(() => {
    return posed.div({
      enter: {
        delay: 250,
        opacity: 1,
        transition: {
          duration: 600,
        },
      },
      exit: {
        delay: 250,
        opacity: 0,
        transition: {
          duration: 600,
        },
      },
    })
  })

  return (
    <div
      css={{ position: "relative", width: 640, height: 360 }}
      className="bg-gray-800 rounded-lg"
    >
      <PoseGroup>
        <TransitionWrapper
          key={props.slide}
          css={{ position: "absolute", top: 0, left: 0 }}
        >
          <InstantPreview slide={props.slide} />
        </TransitionWrapper>
      </PoseGroup>
    </div>
  )
}

export default ScreenPreview
