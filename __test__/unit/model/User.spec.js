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
})
