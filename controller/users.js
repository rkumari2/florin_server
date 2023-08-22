const bcrypt = require('bcrypt')

const User = require ('../model/User')

async function index (req, res) {
    try {
        const allUsers = await User.getAll();
        res.json(allUsers);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function register (req, res) {
    const data = req.body; 
    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS))

    data.password = await bcrypt.hash(data.password, salt)

    const result = await User.create(data)

    res.status(201).send(result)
}

async function login (req, res) {
    const data = req.body;
    try {
        const user = await User.getByUsername(data.username)
        const authenticated = await bcrypt.compare(data.password, user.password)

        if (!authenticated) {
            throw new Error('Wrong credentials')
        } else {
            // const token = await Token.create(user.id)
            // res.status(200).json({authenticated: true, token: token.token})
            // console.log(token)
            console.log(authenticated)
        }
    } catch (error) {
        res.status(401).json({error: error.message})
    }
}

module.exports = {
    register, login, index
}
