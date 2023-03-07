const Users = require('./users.model');
const Posts = require('./posts.model');
const Answers = require('./answers.model');
const Categories = require('./categories.model');

const initModels = () => {
    Users.hasMany(Posts, { foreignKey: 'author' });
    Posts.belongsTo(Users , { foreignKey: 'author' });
    Users.hasMany(Answers, { foreignKey: 'author' });
    Answers.belongsTo(Users, { foreignKey: 'author' });
    Categories.hasMany(Posts, { foreignKey: 'category_id' });
    Posts.belongsTo(Categories, { foreignKey: 'category_id' });
    Posts.hasMany(Answers, { foreignKey: 'post_id' });
    Answers.belongsTo(Posts, { foreignKey: 'post_id' });
}

module.exports = initModels;