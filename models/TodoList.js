module.exports = (sequelize, DataTypes) => {
	const TodoList = sequelize.define(
		'TodoList',
		{
			task: {
				type: DataTypes.STRING(255),
			},
		},
		{
			tableName: 'todolists',
			timestamps: false,
		}
	);

	TodoList.associate = (db) => {
		TodoList.belongsTo(db.User, { foreignKey: 'user_id' });
	};

	return TodoList;
};
