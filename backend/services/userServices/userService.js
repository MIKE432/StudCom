const cryptoJs = require('crypto-js'),
    crypto = require('crypto'),
    db = require('../../configuration/sequalize');

exports.mapUserToResponseModel = (user) => ({
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email
    });

exports.getUser = async (email, raw) => {

    const user = await db.user.findOne({ where: { email } });

    return raw ? user : exports.mapUserToResponseModel(user);
};

exports.registerUser = async (user) => {

    const salt = crypto.randomBytes(16).toString('hex');
    const passwordAndSalt = user.password + salt;
    const hashedPassword = cryptoJs.SHA256(passwordAndSalt).toString();
    const createdUser = await db.user.create({
        email: user.email,
        first_name: user.firstName,
        last_name: user.lastName,
        password: hashedPassword,
        salt
    });

    return exports.mapUserToResponseModel(createdUser.dataValues);
};
