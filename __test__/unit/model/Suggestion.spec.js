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
            jest.spyOn(db, 'query').mockRejectedValue(new Error('does not exist'))

            try {
                await Suggestion.findById(1)
            } catch(error) {
                expect(error).toBeTruthy()
                expect(error).toBeDefined()
                expect(error.message).toBe('does not exist')
            }
        })
    })
    
    describe('findByCategory', () => {
        it('resolves with suggestions for a valid category_id', async () => {
            const category_id = 2;
            const expectedQuery = 'SELECT * FROM  categories JOIN suggestions ON categories.category = suggestions.category_name WHERE categories.id = $1;';
            const expectedParams = [category_id];

            let data = [
                { id: 1, category_name: 'recycling', title: 'something', content: 'something else' },
                { id: 2, category_name: 'recycling', title: 'another thing', content: 'another content' },
            ];
            jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: data });

            const result = await Suggestion.findSuggestionByCategory(category_id);

            expect(db.query).toHaveBeenCalledWith(expectedQuery, expectedParams);
            expect(result).toEqual(data);
        });

        it('should throw an error on db query error', async() => {
            jest.spyOn(db, 'query').mockRejectedValue(new Error('no suggestions available'))

            try {
                await Suggestion.findSuggestionByCategory(2)
            } catch (error) {
                expect(error).toBeTruthy()
                expect(error).toBeDefined()
                expect(error.message).toBe('no suggestions available')
            }
        })
          
    })

    // create, update and destroy left to do 

})
