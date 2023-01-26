const BlogPostsSchema = (sequelize, DataTypes) => {
    const BlogPostsTable = sequelize.define('BlogPosts', {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },
        {
            tableName: 'blog_posts',
            underscored: true,
        });

    BlogPostsTable.associate = (models) => {
        BlogPostsTable.belongsTo(models.Users), {
            as: 'users',
            foreignKey: 'user_id'
        };
    };

    return UsersTable; 
};

module.exports = UsersSchema;