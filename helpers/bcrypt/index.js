const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
const secretKey = 'IMBATMAN'

exports.hashText = (text) => {
    const value = String(text)
    return bcrypt.hashSync(value, saltRounds)
}

exports.compareHash = (a, b) => {
    return bcrypt.compareSync(String(a), String(b))
}

exports.createHash = (text) => {
    const value = String(text)
    return bcrypt.hashSync(value, saltRounds)
}

exports.signJwt = (sign) => jwt.sign(sign, secretKey)

exports.verifyHeaders = (header) => {
    try {
        const token = header.replace('Bearer ', '')
        return jwt.verify(token, secretKey)
    } catch (e) {
        throw new Error(e.message || e)
    }
}
