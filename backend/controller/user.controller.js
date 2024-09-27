const User = require("../model/user.model.js");
const bcryptjs = require("bcryptjs"); // used to encrypt the password

// Signup function
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            name: name,
            email: email,
            password: hashPassword,
        });

        await createdUser.save();
        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error("An error occurred: " + error.message);
        return res.status(500).json({ error: 'Server error' });
    }
};

// Login function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(404).json({ error: 'Email and password do not match' });
        }

        return res.status(200).json({
            message: 'Login successful',
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        console.error("An error occurred: " + error.message);
        return res.status(500).json({ error: 'Server error' });
    }
};

// Export the functions using CommonJS syntax
module.exports = {
    signup,
    login
};
