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

    describe('getAll', () => {
        it ('resolves with Suggestion when called', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({
                    rows: [
                        {title: 'recycling', content:'something about recycling'},
                        {title: 'transport', content:'something about transport'}
                    ]
                })
            const suggestions = await Suggestion.getAll()
            expect(suggestions).toHaveLength(2)
        })

        it('throws an error on db query error', async() => {
            jest.spyOn(db, 'query').mockRejectedValue(new Error('No suggestions available'))
            try {
                await Suggestion.getAll()
              } catch (error) {
                expect(error).toBeDefined()
                expect(error.message).toBe('No suggestions available')
              }
        })     
        
    })

    describe('findById', () => {
        it ('resolves with Suggestion when query is successful', async() => {
            let data = {id:1, title:'something', content:'something else'}
            jest.spyOn(db, 'query').mockResolvedValueOnce({rows:[data]})

            const result = await Suggestion.findById(1)
            expect(result).toBeInstanceOf(Suggestion)
            expect(result.id).toBe(1)
            expect(result.title).toBe('something')
        })

        it ('should throw an error on db query error', async () => {
            jest.spyOn(db, 'query').mockRejectedValue()

            try {
                await Suggestion.findById(1)
            } catch(error) {
                expect(error).toBeTruthy()
                expect(error).toBeDefined()
                expect(error.message).toBe('does not exist')
            }
        })
    })

})
