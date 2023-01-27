const PostCategorySchema = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define(
        'PostCategory',
        {},
        {
            tableName: 'post_categories',
            underscored: true,
            timestamps: false,
        });
    
    PostCategoryTable.associate = ({ BlogPost, Category }) => {
      Category.belongsToMany(BlogPost, {
        as: 'category',
        foreignKey: 'id_categories',
        otherKey: 'id_blog_posts',
        through: PostCategoryTable,
      });
      BlogPost.belongsTo(Category, {
        as: 'blog_posts',
        foreignKey: 'id_blog_posts',
        otherKey: 'id_categories',
        through: PostCategoryTable,
      });

    }

    return PostCategoryTable; 
};

module.exports = PostCategorySchema;