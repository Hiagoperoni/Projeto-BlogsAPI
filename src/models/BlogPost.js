const BlogPostSchema = (sequelize, DataTypes) => {
    const BlogPostTable = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
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

    BlogPostTable.associate = (models) => {
        BlogPostTable.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'user_id'
        });
    };

    return BlogPostTable; 
};

module.exports = BlogPostSchema;