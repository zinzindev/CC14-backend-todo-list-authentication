module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			username: {
				type: DataTypes.STRING(200),
				unique: true,
			},
			password: {
				type: DataTypes.STRING(255),
			},
			name: {
				type: DataTypes.STRING(100),
			},
		},
		{
			tableName: 'users',
			// timestamps: false,
		}
	);

	User.associate = (db) => {
		User.hasMany(db.TodoList, { foreignKey: 'user_id' });
	};

	return User;
};
