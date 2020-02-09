const db = require('../../configuration/sequalize');

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
