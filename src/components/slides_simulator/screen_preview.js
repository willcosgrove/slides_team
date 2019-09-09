import React, { useMemo } from "react"
import { css } from "@emotion/core"
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
      css={css`
        @media (min-width: 1400px) {
          width: 640px;
          height: 360px;
        }
        width: 512px;
        height: 288px;
        position: relative;
      `}
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
