import React, { Fragment, useState } from "react"
import useMeasure from "react-use-measure"
import { ResizeObserver } from '@juggle/resize-observer'
import styled, { createGlobalStyle } from "styled-components"
import { useLocation } from "react-router-dom";

export default () => {
  const [ref, bounds] = useMeasure({ scroll: true, polyfill: ResizeObserver })
  let { pathname } = useLocation();

  // const [big, setBig] = useState(false)
  // const [hovered, setHover] = useState(false)
  // const [xy, setXY] = useState([0, 0])

  return (
    <>
      <div style={{ maxWidth: "800px", margin: "0 auto", height: "150vh", marginTop: "3em", border: "1px solid red" }}>
        <h1>Ascensorista Main</h1>
      </div>
    </>
  )
}
