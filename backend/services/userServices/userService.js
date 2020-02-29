
const cryptoJs = require('crypto-js'),
    crypto = require('crypto'),
    db = require('../../configuration/sequalize'),
    BadRequestError = require('../../configuration/errors').BadRequestError

exports.mapUserToResponseModel = (user) => ({
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email
    });

exports.getUser = async (email, raw) => {

    const user = await db.user.findOne({ where: { email } });
    if(user) {
        return raw ? user : exports.mapUserToResponseModel(user);
    }
    return user;
};

exports.registerUser = async (user) => {
    const existingUser = await exports.getUser(user.email, false);

    if(existingUser)
        throw new BadRequestError('user with given email already exist');

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
