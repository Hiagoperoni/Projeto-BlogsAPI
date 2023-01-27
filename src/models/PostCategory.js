const PostCategorySchema = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define(
        'PostCategory',
        {
          post_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
          category_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        },
        {
            tableName: 'post_categories',
            underscored: true,
            timestamps: false,
        });
    
    PostCategoryTable.associate = ({ BlogPost, Category }) => {
      PostCategoryTable.belongsToMany(BlogPost, {
        as: 'category',
        foreignKey: 'id_categories',
        otherKey: 'id_blog_posts',
        through: PostCategoryTable,
      });
      PostCategoryTable.belongsToMany(Category, {
        as: 'blog_posts',
        foreignKey: 'id_blog_posts',
        otherKey: 'id_categories',
        through: PostCategoryTable,
      });

    }

    return PostCategoryTable; 
};

module.exports = PostCategorySchema;