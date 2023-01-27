const UserSchema = (sequelize, DataTypes) => {
    const UserTable = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
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

    UserTable.associate = (models) => {
        UserTable.hasMany(models.BlogPost, {
            as: 'blog_posts',
            foreignKey: 'user_id'
        });
    };
    return UserTable; 
};

module.exports = UserSchema;