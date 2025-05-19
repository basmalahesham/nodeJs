module.exports.getUser = (req, res,next) => {
    return res.json({ message: 'done' ,user:"userData"});
};
module.exports.addUser = (req, res,next) => {
    return res.json({ message: 'add user' ,user:"userData"});
};
module.exports.updateUser = (req, res,next) => {
    return res.json({ message: 'update user' ,user:"userData"});
};
module.exports.deleteUser = (req, res,next) => {
    return res.json({ message: 'delete user' ,user:"userData"});
};

// module.exports = {
//     getUser,
//     addUser,
//     updateUser,
//     deleteUser
// };