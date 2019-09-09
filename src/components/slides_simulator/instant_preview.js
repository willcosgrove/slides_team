import React from "react"
import { css } from "@emotion/core"

const InstantPreview = function(props) {
  return (
    <div
      className="slide-preview bg-gray-800 rounded-lg flex justify-center items-center"
      css={css`
        @media (min-width: 1400px) {
          width: 640px;
          height: 360px;
        }
        width: 512px;
        height: 288px;
      `}
    >
      <p
        className="uppercase font-bold text-center text-xl"
        dangerouslySetInnerHTML={{ __html: props.slide }}
      ></p>
    </div>
  )
}

export default InstantPreview
