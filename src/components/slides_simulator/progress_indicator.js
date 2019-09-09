import React, { useMemo } from "react"
import posed from "react-pose"

const ProgressIndicator = function(props) {
  const BarInner = useMemo(() => {
    return posed.div({
      running: {
        width: "100%",
        applyAtStart: { opacity: 1, width: "0%" },
        opacity: 0,
        transition: {
          opacity: {
            delay: 1000,
          },
          duration: 850,
        },
      },
      stopped: {
        width: "0%",
        opacity: 1,
        transition: {
          duration: 0,
        },
      },
    })
  }, [])
  return (
    <div className="progress-container">
      <div
        className="progress-bar-outer rounded-full bg-gray-800"
        css={{ width: 850, height: 10, position: "relative" }}
      >
        <BarInner
          className="progress-bar-inner rounded-full bg-gray-600"
          css={{ height: 10 }}
          pose="running"
          poseKey={props.slideIndex}
        />
        <div
          className="progress-bar-divider bg-gray-900"
          css={{
            height: 10,
            width: 3,
            position: "absolute",
            left: 250,
            top: 0,
          }}
        />
      </div>
      <div className="progress-legend flex">
        <div css={{ width: 250, textAlign: "center" }}>
          Input Latency (~250ms)
        </div>
        <div css={{ width: 600, textAlign: "center" }}>
          Transition Time (600ms)
        </div>
      </div>
    </div>
  )
}

export default ProgressIndicator
