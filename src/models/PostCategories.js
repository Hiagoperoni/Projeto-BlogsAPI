const PostCategoriesSchema = (sequelize, DataTypes) => {
    const PostCategoriesTable = sequelize.define(
        'PostCategories',
        {},
        {
            tableName: 'PostCategories',
            underscored: true,
            timestamps: false,
        });
    
    PostCategoriesTable.associate = ({ BlogPosts, Categories }) => {
      Categories.hasMany(BlogPosts, {
        as: 'categories',
        foreignKey: 'id_categories',
        otherKey: 'blog_posts_id',
        through: PostCategoriesTable,
      });
      BlogPosts.belongsTo(Categories, {
        as: 'blog_posts',
        foreignKey: 'id_blog_posts',
        otherKey: 'categories_id',
        through: PostCategoriesTable,
      });

    }

    return PostCategoriesTable; 
};

module.exports = CategoriesSchema;