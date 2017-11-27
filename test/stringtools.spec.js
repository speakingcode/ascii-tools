import { expect } from 'chai'
import { overlayLines } from '../src/stringtools'

describe('overlayLines', () => {
  const b = "0123456789",
        t = "abcd"

  it('works with offset 0 when top is shorter than bottom', () => {
    let offset = 0

    let newLine = overlayLines(b, t, offset)
    expect(newLine).to.equal("abcd456789")
  })

  it('works with offset 0 when top is longer than bottom', () => {
    let offset = 0

    let newLine = overlayLines(t, b, offset)
    expect(newLine).to.equal("0123")
  })

  it('works with offset that is greater than bottom length', () => {
    let offset = 11

    let newLine = overlayLines(b, t, offset)
    expect(newLine).to.equal("0123456789")
  })

  it('works with offset when top + offset is shorter than bottom', () => {
    let offset = 3

    let newLine = overlayLines(b, t, offset)
    expect(newLine).to.equal("012abcd789")
  })

  it('works with offset when top + offset is longer than bottom', () => {
    let offset = 7

    let newLine = overlayLines(b, t, offset)
    expect(newLine).to.equal("0123456abc")
  })

  it('works when only bottom is provided', () => {
    let newLine = overlayLines(b)
    expect(newLine).to.equal("0123456789")
  })
})
