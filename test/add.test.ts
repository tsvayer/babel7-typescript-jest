import { expect } from 'chai'
import { add } from '../src'

describe('Added', function() {
  it('should add two numbers', function() {
    expect(add(1, 2)).to.eq(3)
  })
})
