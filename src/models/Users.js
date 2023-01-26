const UsersSchema = (sequelize, DataTypes) => {
    const UsersTable = sequelize.define('Users', {
        name: DataTypes.STRING,
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
        {
            tableName: 'users',
            underscored: true,
            timestamps: false,
        });
    
    UsersTable.associate = (models) => {
        UsersTable.hasMany(models.BlogPosts, {
            as: 'blog_posts',
            foreignKey: 'user_id'
        });
    };
    return UsersTable; 
};

module.exports = UsersSchema;