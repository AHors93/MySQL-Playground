import * as stores from '../stores'
import * as express from 'express'


jest.mock('express', () => {
    Router: () => {}
})
describe('Stores', () => {
    afterEach(() => {
        jest.resetModules()
        jest.restoreAllMocks()
    })
    it('should return store details', () => {

    })
})