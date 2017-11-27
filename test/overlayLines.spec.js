import { expect } from 'chai'
import { overlayLines } from '../src/overlayLines'

describe('overlayLines', () => {
  const bottom =
`abcdefgh
abcdefgh
abcdefgh
abcdefgh`

  const top =
`1234
5678
wxyz`

  it('works with xoffset 0, yoffset 0, top lines less than bottom lines', () => {
    expect(overlayLines(bottom, top, 0, 0)).to.equal(
`1234efgh
5678efgh
wxyzefgh
abcdefgh`
    )
  })

  it('works with xoffset + top.length > bottom.length, yoffset + toplines.length > bottomlines.length', () => {
    expect(overlayLines(bottom, top, 5, 2)).to.equal(
`abcdefgh
abcdefgh
abcde123
abcde567`
    )
  })
})
