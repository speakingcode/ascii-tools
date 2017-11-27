const overlayChars = (
  bottom        = "",
  top           = "",
  offset        = 0,
) => {
    let bottomLeftEnd     = offset,
        topEnd            = offset > bottom.length ? 0 : bottom.length - offset,
        bottomRightStart  = top.length + offset,
        bottomRightEnd    = offset + top.length > bottom.length ? 0 : bottom.length

    return bottom.slice(0, bottomLeftEnd) +
           top.slice(0, topEnd) +
           bottom.slice(bottomRightStart, bottomRightEnd)

}

export { overlayChars }
