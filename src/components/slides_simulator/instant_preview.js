import React from "react"

const InstantPreview = function(props) {
  return (
    <div
      className="slide-preview bg-gray-800 rounded-lg flex justify-center items-center"
      css={{ width: 640, height: 360 }}
    >
      <p
        className="uppercase font-bold text-center text-xl"
        dangerouslySetInnerHTML={{ __html: props.slide }}
      ></p>
    </div>
  )
}

export default InstantPreview
