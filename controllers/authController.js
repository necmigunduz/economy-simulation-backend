// Auth Controller
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({ name, email, password: hashedPassword })

        await user.save()
        res.status(201).json({ message: 'User created successfully!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

    } catch (error) {
        res.status(400).json({ error: error.message })        
    }
}