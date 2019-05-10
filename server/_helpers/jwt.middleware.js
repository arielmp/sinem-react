const jwt = require('jsonwebtoken');

const middlewareJwt = {};

middlewareJwt.revisarToken =  (req, res, next) => {   
    console.log('revisar token') ;
    token = req.headers['authorization'];
    jwt.verify(token, req.app.get('superSecret'), (err, decoded) => {
        if (err) {
            return res.json({ status: 'No Permitido' });
        } else {
            req.decoded = decoded;
            next();
        }
    })
}

module.exports = middlewareJwt;