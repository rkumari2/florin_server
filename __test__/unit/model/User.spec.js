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
})
