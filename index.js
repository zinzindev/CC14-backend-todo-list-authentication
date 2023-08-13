require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const todoListRoute = require('./routes/todoListRoutes');
const userRoute = require('./routes/userRoutes');
const db = require('./models');

require('./config/passport/passport');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todo-list', todoListRoute);
app.use('/users', userRoute);

db.sequelize.sync({ alter: true }).then(() => {
	app.listen(process.env.PORT, () => {
		console.log(`Server is running at port ${process.env.PORT}`);
	});
});
