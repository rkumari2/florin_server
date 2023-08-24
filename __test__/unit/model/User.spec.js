const User = require('../../../model/User')

const db = require('../../../database/connect')

describe('User model', () => {

    // BeforeEach(() => jest.clearAllMocks())

    describe('class', () => {
        it('exists', () => {
            expect(User).toBeDefined()
        })

        it('is an instance of User', () => {
            const user = new User({username: "rk", password: "jkl"})
            expect(user).toBeInstanceOf(User)
        })
    })

    describe('getAll', () => {
        it('lists all users on successful query completion', async () => {
            const data = [
                {id:1, username:'user', password: 'jkl'},
                {id:2, username:'user2', password: 'jkl'}
            ]
            jest.spyOn(db, 'query').mockResolvedValueOnce({rows: data})

            const result = await User.getAll()
            expect(result).toHaveLength(2)
        })
    })

    describe('getById', () => {
        it('returns a user based on their id', async() => {
            let data = {id: 1, username: 'user1', password: 'jkl'}
            jest.spyOn(db, 'query').mockResolvedValueOnce({rows: [data]})

            const result = await User.getById(1)
            expect(result).toBeInstanceOf(User)
            expect(result.id).toBe(1)
            expect(result.username).toBe('user1')
        })

        it.only('returns an error on db query error', async () => {
            jest.spyOn(db, 'query').mockRejectedValue(new Error('unable to locate user'))

            try {
                await User.getById(1)
            } catch (error) {
                expect(error).toBeTruthy()
                expect(error).toBeDefined()
                expect(error.message).toBe('unable to locate user')                
            }
        })
    })
})
