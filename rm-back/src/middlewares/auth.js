const jwt = require('jsonwebtoken')

const withAuth = async (req, res, next) => {
    if (req.headers.authorization) {
        try {
            const decoded = await jwt.verify(req.headers.authorization.split(' ')[1], process.env.TOKEN_SECRET)
            if (decoded && decoded.id) {
                req.userId
            }
        }
    }
}