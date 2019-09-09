import React from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/core"
import { Link } from "gatsby"

import Tailwind from "../components/tailwind"
import SlidesSimulator from "../components/slides_simulator"

import * as TheDarknessWontSurvive from "../songs/the_darkness_wont_survive"

const IndexPage = () => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Global
      styles={css`
        body {
          font-family: "PT Sans", sans-serif;
        }
      `}
    />
    <Tailwind />
    <SlidesSimulator song={TheDarknessWontSurvive} />
  </>
)

export default IndexPage
