import React from "react"
import Helmet from "react-helmet"

const Tailwind = function() {
  return (
    <Helmet>
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
    </Helmet>
  )
}

export default Tailwind
