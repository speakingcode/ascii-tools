import { overlayChars } from './overlayChars'

const overlayLines = (
  bottom   = "",
  top      = "",
  xOffset  = 0,
  yOffset  = 0
) => {
  let bottomLines = bottom.split('\n'),
      topLines    = top.split('\n'),
      newLines    = []

  for(let i = 0; i < bottomLines.length; i++) {
    if(i < yOffset || i > topLines.length + yOffset)
      newLines.push(bottomLines[i])
    else
      newLines.push(overlayChars(
        bottomLines[i],
        topLines[i - yOffset],
        xOffset
      ))
  }

  return newLines.join('\n')
}

export { overlayLines }
