import jwt from "jsonwebtoken"

export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.rollNo,
            password: user.password,
        }, process.env.JWT_SECRET || 'oneEndConstructions', {
            expiresIn:'1d',
        });
}