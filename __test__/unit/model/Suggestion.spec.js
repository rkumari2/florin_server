const Suggestion = require ('../../../model/Suggestion')

const db = require('../../../database/connect')

describe('Suggestion model', () => {

    beforeEach(() => jest.clearAllMocks())

    describe ('class', () => {
        it ('exists', () => {
            expect(Suggestion).toBeDefined()
        })

        it ('in an instance of Suggestion', () => {
            const suggestion = new Suggestion({title: "hi", content: "hi from content"})
            expect(suggestion).toBeInstanceOf(Suggestion)
        })
    })


})
