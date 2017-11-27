import { expect } from 'chai'
import { overlayChars } from '../src/stringtools'

describe('overlayChars', () => {
  const b = "0123456789",
        t = "abcd"

  it('works with offset 0 when top is shorter than bottom', () => {
    let offset = 0

    let newLine = overlayChars(b, t, offset)
    expect(newLine).to.equal("abcd456789")
  })

  it('works with offset 0 when top is longer than bottom', () => {
    //note top/bottom are inverted
    let offset = 0,
        top    = b,
        bottom = t

    let newLine = overlayChars(bottom, top, offset)
    expect(newLine).to.equal("0123")
  })

  it('works with offset that is greater than bottom length', () => {
    let offset = 11

    let newLine = overlayChars(b, t, offset)
    expect(newLine).to.equal("0123456789")
  })

  it('works with offset when top + offset is shorter than bottom', () => {
    let offset = 3

    let newLine = overlayChars(b, t, offset)
    expect(newLine).to.equal("012abcd789")
  })

  it('works with offset when top + offset is longer than bottom', () => {
    let offset = 7

    let newLine = overlayChars(b, t, offset)
    expect(newLine).to.equal("0123456abc")
  })

  it('works when only bottom is provided', () => {
    let newLine = overlayChars(b)
    expect(newLine).to.equal("0123456789")
  })

  it('works with no input', () => {
    let newLine = overlayChars()
    expect(newLine).to.equal("")
  })
})
